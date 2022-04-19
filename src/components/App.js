import "../styles/main.scss";
/*import bg-adalab from "../images/bg-adalab.png";*/
/*import favicon from "../images/favicon.png";*/
import logoAdalab from "../images/logo-adalab.png";
import tarjetasMolonasSvg from "../images/tarjetas-molonas.svg";
/*import tarjetasMolonasPng from "../images/tarjetas-molonas.png";*/
function App() {
  return (
    <div>
      <header className="header">
        <a href="./index.html" title="¡Volver al inicio!">
          <img
            src={tarjetasMolonasSvg}
            alt="Awesome profile-cards"
            className="imageAwesome"
          />
        </a>
      </header>

      <main className="mainCreate">
        <section className="preview">
          {/*Parte silver*/}
          <article>
            <button className="card__reset js_reset" href="">
              <i className="card__icon far fa-trash-alt"></i>Reset
            </button>
            {/*Parte blanca*/}
            <div className="palette-1 containerCard js_preview">
              {/*Datos personales*/}
              <div className="cardInfo js_cardInfo">
                <h2 className="cardInfo__name js_cardName">Nombre apellidos</h2>
                <p className="cardInfo__description js_cardJob">
                  Front-end developer
                </p>
              </div>
              <div className="cardImage js__profile-image"></div>
              <nav>
                <ul className="cardMenu">
                  <li className="cardMenu__icon">
                    <a
                      className="cardMenu__link js_cardPhone js_cardLink"
                      href=""
                      target="blank"
                      title="Número de teléfono"
                    >
                      <i className="icon fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li className="cardMenu__icon">
                    <a
                      className="cardMenu__link js_cardEmail js_cardLink"
                      href=""
                      target="blank"
                      title="Dirección de correo"
                    >
                      <i className="icon far fa-envelope"></i>
                    </a>
                  </li>
                  <li className="cardMenu__icon">
                    <a
                      className="cardMenu__link js_cardLinkedin js_cardLink"
                      href=""
                      target="_blank"
                      title="Perfil en LinkedIn"
                    >
                      <i className="icon fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="cardMenu__icon">
                    <a
                      className="cardMenu__link js_cardGithub js_cardLink"
                      href=""
                      target="_blank"
                      title="Perfil de GitHub"
                    >
                      <i className="icon fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </section>

        <form action="" className="form js_form">
          <fieldset className="fieldset">
            <legend
              className="legend js_designLegend uppercase"
              id="designLegend"
              title="Elige los colores"
            >
              <i className="far fa-object-ungroup legend__icon legend__icon--orange"></i>
              <span className="legend__text">Diseña</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowDesign"></i>
            </legend>
            <section className="containerDesign js_design">
              <h2 className="containerDesign__title">Colores</h2>
              <div className="containerDesign__options">
                <div className="options__palette">
                  <input
                    className="radio js_radio-1 js_radio"
                    name="palette"
                    type="radio"
                    id="radio1"
                    value="1"
                    checked
                  />

                  <label
                    for="radio1"
                    className="palette__sample palette__sample--1"
                  ></label>

                  <label
                    for="radio1"
                    className="palette__sample palette__sample--2"
                  ></label>

                  <label
                    for="radio1"
                    className="palette__sample palette__sample--3"
                  ></label>
                </div>

                <div className="options__palette">
                  <input
                    className="radio js_radio-2"
                    name="palette"
                    type="radio"
                    id="radio2"
                    value="2"
                  />

                  <label
                    for="radio2"
                    className="palette__sample palette__sample--4"
                  ></label>

                  <label
                    for="radio2"
                    className="palette__sample palette__sample--5"
                  ></label>

                  <label
                    for="radio2"
                    className="palette__sample palette__sample--6"
                  ></label>
                </div>

                <div className="options__palette">
                  <input
                    className="radio js_radio-3"
                    name="palette"
                    type="radio"
                    id="radio3"
                    value="3"
                  />

                  <label
                    for="radio3"
                    className="palette__sample palette__sample--7"
                  ></label>

                  <label
                    for="radio3"
                    className="palette__sample palette__sample--8"
                  ></label>

                  <label
                    for="radio3"
                    className="palette__sample palette__sample--9"
                  ></label>
                </div>
              </div>
            </section>
          </fieldset>

          <fieldset className="fieldset">
            <legend
              className="legend js_fillLegend uppercase"
              id="fillLegend"
              title="Escribe tus datos"
            >
              <i className="far fa-keyboard legend__icon legend__icon--orange"></i>
              <span className="legend__text">Rellena</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowFill rotate"></i>
            </legend>
            <div className="containerFill js_fill collapsed">
              <label className="label" for="name">
                Nombre completo
              </label>
              <input
                className="field js_name"
                name="name"
                type="text"
                id="name"
                placeholder="P. ej. Sally Jill"
              />

              <label className="label" for="job">
                Puesto
              </label>
              <input
                className="field js_job"
                name="job"
                type="text"
                id="job"
                placeholder="P. ej. Front-end unicorn"
              />

              <label className="label" for="">
                Imagen de perfil
              </label>
              <div className="component">
                {/*Div temporal para maquetar estos dos items*/}
                <label
                  className="component__btnAddImage js__profile-trigger"
                  type="button"
                  for="addPhoto"
                >
                  Añadir imagen
                </label>
                {/* Este input es para las imagenes y tiene que estar oculto */}
                <input
                  className="action__hiddenField js__profile-upload-btn js_photo"
                  type="file"
                  name="addPhoto"
                  id="addPhoto"
                />
                <div className="component__square js__profile-preview"></div>
              </div>

              <label className="label" for="email">
                E-mail
              </label>
              <input
                className="field js_email"
                name="email"
                type="email"
                id="email"
                placeholder="P. ej. sally-hill@gmail.com"
              />

              <label className="label" for="phone">
                Teléfono
              </label>
              <input
                className="field js_phone"
                name="phone"
                type="tel"
                id="phone"
                placeholder="P. ej. 555 55 55 55"
              />

              <label className="label" for="linkedin">
                LinkedIn
              </label>
              <input
                className="field js_linkedin"
                name="linkedin"
                type="text"
                id="linkedin"
                placeholder="P. ej. sally.hill"
              />

              <label className="label" for="github">
                GitHub
              </label>
              <input
                className="field js_github"
                name="github"
                type="text"
                id="github"
                placeholder="P. ej. sally-hill"
              />
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend
              className="legend js_shareLegend uppercase"
              id="shareLegend"
              title="¡Comparte tu tarjeta!"
            >
              <i className="fa-solid fa-share-nodes legend__icon legend__icon--orange"></i>
              <span className="legend__text">Comparte</span>
              <i className="fas fa-angle-up legend__icon legend__icon--arrow js_arrowShare rotate"></i>
            </legend>
            <div className="containerShare js_share collapsed">
              <button className="buttonCreateCard uppercase js_buttonCreateCard">
                <i className="fa-regular fa-address-card buttonCreateCard__icon"></i>
                Crear tarjeta
              </button>

              <div className="containerDone js_containerDone collapsed"></div>
            </div>
          </fieldset>
        </form>
      </main>

      <footer className="footer">
        <small className="small_text">Awesome profile-cards &copy; 2022</small>
        <a href="https://adalab.es/" title="Visita Adalab" target="blank">
          <img className="img_logo" src={logoAdalab} alt="Logo Adalab" />
        </a>
      </footer>

      <script type="text/JavaScript" src="./assets/js/main.js"></script>
    </div>
  );
}

export default App;
