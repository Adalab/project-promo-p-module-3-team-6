import '../styles/main.scss';
import '../styles/core/_variables.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import localStorage from '../services/localStorage';
import dataApi from '../services/Api';
import Card from './Card';
import Landing from './Landing';

function App() {
  const [avatar, setAvatar] = useState('');
  const [triangleDesign, setTriangleDesign] = useState('');
  const [triangleForm, setTriangleForm] = useState('');
  const [triangleShare, setTriangleShare] = useState('');
  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowForm, setArrowForm] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
  });
  //const [dataApi, setDataApi] = useState({});
  const [cards, setCards] = useState(localStorage.get('cards', []));
  useEffect(() => {
    if (cards.length === 0) {
      dataApi().then((data) => {
        localStorage.set('cards', data);
        setCards(data);
      });
    }
  }, []);

  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: setAvatar(''),
    });
    //clear();
    // Función que limpia todo el local storage
    /*const clear = () => {
          localStorage.clear();
        };
      };*/
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };

  //add image
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({
      ...dataCard,
      photo: avatar,
    });
  };

  const uploadImage = (ev) => {};

  //HTML
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/card"
          element={
            <Card
              triangleDesign={triangleDesign}
              setTriangleDesign={setTriangleDesign}
              triangleForm={triangleForm}
              setTriangleForm={setTriangleForm}
              triangleShare={triangleShare}
              setTriangleShare={setTriangleShare}
              arrowDesign={arrowDesign}
              setArrowDesign={setArrowDesign}
              arrowForm={arrowForm}
              setArrowForm={setArrowForm}
              arrowShare={arrowShare}
              setArrowShare={setArrowShare}
              dataCard={dataCard}
              handleReset={handleReset}
              handleInput={handleInput}
              dataApi={dataApi}
              //setDataApi={setDataApi}
              cards={cards}
              setCards={setCards}
              uploadImage={uploadImage}
              avatar={avatar}
              updateAvatar={updateAvatar}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
