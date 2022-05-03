import "../styles/main.scss";
import logoAdalab from "../images/logo-adalab.png";
import logoAwesome from "../images/logo-awesome-profile-cards.svg";
import {Link} from 'react-router-dom'

function landing() {
    const handleClickStart = () => {

    }
    return (
<>
<div className="align-landing">
      <main className="main-landing">
        <article className="container1">
       {/* container1 */}
 <img
            className="container1__logoMain"
            src={logoAwesome}
            alt="Logo de la aplicación"
          />
          <h1 className="container1__title">Crea tu tarjeta de visita</h1>
          <p className="container1__parraf">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </article>

        {/*container2*/}
  <section className="section">
          <ul className="container2">
            <li className="container2__items">
              <i className="fa-regular fa-object-ungroup container2__icon"></i>
              <p className="container2__pMenu">Diseña</p>
            </li>

            <li className="container2__items">
              <i className="fa-regular fa-keyboard container2__icon"></i>
              <p className="container2__pMenu">Rellena</p>
            </li>
            <li className="container2__items">
              <i className="fa-solid fa-square-share-nodes container2__icon"></i>
              <p className="container2__pMenu">Comparte</p>
            </li>
          </ul>
          <div>
            <button className="button" 
            onClick={handleClickStart}>
              <Link className="button__link" to="/Card" >Comenzar</Link>
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <small>Awesome profile-cards @2022</small>
          <img
            className="footer__logofoot"
            src={logoAdalab}
            alt="Logo Adalab"
          />
        </div>
      </footer>

    </div>
    </>
        );
}

export default landing;
