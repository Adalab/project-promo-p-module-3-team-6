import "../styles/main.scss";
//import logoAdalab from '../images/logo-adalab.png';
//import logoAwesome from '../images/logo-awesome-profile-cards.svg';
import { useEffect, useState } from "react";
import localStorage from "../services/localStorage";
import dataApi from "../services/Api";
import Card from "./Card";

function App() {
  const [triangleDesign, setTriangleDesign] = useState("");
  const [triangleForm, setTriangleForm] = useState("");
  const [triangleShare, setTriangleShare] = useState("");
  const [arrowDesign, setArrowDesign] = useState("");
  const [arrowForm, setArrowForm] = useState("");
  const [arrowShare, setArrowShare] = useState("");
  const [dataCard, setDataCard] = useState({
    palette: "1",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  const [apiData, setApiData] = useState({});
  const [cards, setCards] = useState(localStorage.get("cards", []));
  useEffect(() => {
    if (cards.length === 0) {
      dataApi().then((data) => {
        localStorage.set("cards", data);
        setCards(data);
      });
    }
  }, []);

  //HTML
  return (
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
      setDataCard={setDataCard}
      apiData={apiData}
      setApiData={setApiData}
      cards={cards}
      setCards={setCards}
    />
  );
}

export default App;
