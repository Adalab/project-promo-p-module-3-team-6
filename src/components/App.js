import '../styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import localStorage from '../services/localStorage';
import dataApi from '../services/Api';
import Card from './Card';
import Landing from './Landing';

function App() {
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
  });
  const [apiData, setApiData] = useState({});
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
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  //HTML
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/card"
          element={
            <>
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
                apiData={apiData}
                setApiData={setApiData}
                cards={cards}
                setCards={setCards}
              />
              <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
              <Profile avatar={avatar} />{' '}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
