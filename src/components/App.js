import "../styles/main.scss";
import logoAdalab from "../images/logo-adalab.png";
import logoAwesome from "../images/logo-awesome-profile-cards.svg";
import { useState } from "react";

function App() {
  const [triangleDesign, setTriangleDesign] = useState("");
  const [triangleForm, setTriangleForm] = useState("");
  const [triangleShare, setTriangleShare] = useState("");
  const [dataCard, setDataCard] = useState({
    palette: "1",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  //FUNCIONES/EVENTOS
  const handlerClickColapsibleDesign = () => {
    triangleDesign === "" ? setTriangleDesign("hidden") : setTriangleDesign("");
  };
  const handlerClickColapsibleForm = () => {
    triangleForm === "" ? setTriangleForm("hidden") : setTriangleForm("");
  };
  const handlerClickColapsibleShare = () => {
    triangleShare === "" ? setTriangleShare("hidden") : setTriangleShare("");
  };
  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
  };
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };
  //HTML
  return (
    <div>
      <header>
        <img
          className="logohead"
          src={logoAwesome}
          alt="Logo de la aplicación"
        />
      </header>

      <main className="align-design">
        <section className="preview-section">
          <div className="preview-section__aliner-div">
            <button className="reset-button js-reset" onClick={handleReset}>
              <i className="fa-regular fa-trash-can reset-button__trash"></i>
              <span className="reset-button__text">Reset</span>
            </button>
            <article className="preview-card js_preview">
              <div className="preview-card__div rectangle">
                <h3 className="preview-card__div--name name js-name js_reset-title">
                  {dataCard.name || "Nombre Apellido"}
                </h3>
                <p className="preview-card__div--profession profession js-profession js_reset-subtitle">
                  {dataCard.job || "Front-end developer"}
                </p>
              </div>
              <div className="preview-card__image js__profile-image"></div>
              <nav>
                <ul className="card-list">
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={`tel:${dataCard.phone || ""}`}
                      className="card-list__item--link icon-palette js-phone js_reset-telf"
                      title="Teléfono"
                    >
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </a>
                  </li>
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={`mailto:${dataCard.email || ""}`}
                      className="card-list__item--link icon-palette js-email js_reset-send"
                      title="Correo electrónico"
                    >
                      <i className="fa-regular fa-envelope"></i>
                    </a>
                  </li>
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={dataCard.linkedin || ""}
                      className="card-list__item--link icon-palette js-linkedin js_reset-lknd"
                      title="Perfil de Linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={dataCard.github || ""}
                      className="card-list__item--link icon-palette js-git js_reset-github"
                      title="Perfil de GitHub"
                    >
                      <i className="fa-brands fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </section>

        <form className="form">
          {/*--DESIGN--*/}
          <fieldset className="design-fieldset">
            <div
              className="design js-design-container"
              onClick={handlerClickColapsibleDesign}
            >
              <i className="fa-regular fa-object-ungroup screens"></i>
              <p className="design__text-design">Diseña</p>
              <i className="fa-solid fa-angle-up js-arrow1"></i>
            </div>
            {/*--COLORS-*/}
            {/* PALLETE ONE */}
            <section
              className={`design-fieldset__design-section js-design js-reset-form  ${triangleDesign}`}
            >
              <div className="colors__colors-box">
                <label htmlFor="palette" className="colors">
                  Colores
                </label>
                <input
                  className="colors__colors-input js_radio1 js_radio"
                  type="radio"
                  name="palette"
                  id="1"
                  value="1"
                  checked={dataCard.palette === "1"}
                  onChange={handleInput}
                />
                <span className="spectrum-blue1"></span>
                <span className="spectrum-blue2"></span>
                <span className="spectrum-blue3"></span>
              </div>
              {/*PALETTE TWO*/}
              <div className="colors__colors-box">
                <input
                  className="colors__colors-input js_radio2 js_radio"
                  type="radio"
                  name="palette"
                  id="2"
                  value="2"
                  checked={dataCard.palette === "2"}
                  onChange={handleInput}
                />
                <span className="spectrum-warm1"></span>
                <span className="spectrum-warm2"></span>
                <span className="spectrum-warm3"></span>
              </div>
              {/*PALETTE THREE*/}
              <div className="colors__colors-box">
                <input
                  className="colors__colors-input js_radio3 js_radio"
                  type="radio"
                  name="palette"
                  id="3"
                  value="3"
                  checked={dataCard.palette === "3"}
                  onChange={handleInput}
                />
                <span className="spectrum-mix1"></span>
                <span className="spectrum-mix2"></span>
                <span className="spectrum-mix3"></span>
              </div>
              <span className="cutting-line1"></span>
            </section>
          </fieldset>

          {/*STUFFED*/}
          <fieldset className="stuffed-fieldset">
            <div
              className="stuffed js-stuffed-container"
              onClick={handlerClickColapsibleForm}
            >
              <i className="fa-regular fa-keyboard keyboard"></i>
              <p className="stuffed__text-stuffed">Rellena</p>
              <i className="fa-solid fa-angle-up collapsible js-arrow2"></i>
            </div>
            {/*NAME*/}
            <div
              className={`stuffed__stuffed-form js-stuffed js-stuffed-form js-reset-form ${triangleForm}`}
            >
              <label className="stuffed-titles" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="stuffed-titles__stuffed-texts js-forname js_reset-name"
                id="name"
                type="text"
                name="name"
                placeholder="Ej: Pepita Pérez"
                required
                value={dataCard.name}
                onChange={handleInput}
              />
              {/*PROFESSION*/}
              <label className="stuffed-titles" htmlFor="job">
                Puesto
              </label>
              <input
                className="stuffed-titles__stuffed-texts js-forjob js_reset-job"
                id="job"
                type="text"
                name="job"
                placeholder="Ej: Front-end developer"
                required
                value={dataCard.job}
                onChange={handleInput}
              />
              {/*ADD IMAGE*/}
              <label className="stuffed-titles" htmlFor="image">
                Imagen de perfil
              </label>
              <div className="false-stuffed">
                <label
                  className="false-stuffed__false-button js__profile-trigger"
                  htmlFor="image"
                >
                  Añadir imagen
                </label>
                <input
                  className="hidden js__profile-upload-btn js-forimage"
                  type="file"
                  id="image"
                  name="image"
                />
                <div className="false-stuffed__false-square js__profile-preview"></div>
              </div>
              {/*EMAIL*/}
              <label className="stuffed-titles" htmlFor="email">
                Email
              </label>
              <input
                className="stuffed-titles__stuffed-texts js-formail js_reset-mail"
                id="email"
                type="email"
                name="email"
                placeholder="Ej: pepita.perez@gmail.com"
                required
                value={dataCard.email}
                onChange={handleInput}
              />
              {/*PHONE*/}
              <label className="stuffed-titles" htmlFor="telef">
                Teléfono
              </label>
              <input
                className="stuffed-titles__stuffed-texts js-forphone js_reset-phone"
                id="phone"
                type="tel"
                name="phone"
                placeholder="Ej: 000-000-000"
                required
                value={dataCard.phone}
                onChange={handleInput}
              />
              {/*SOCIAL MEDIA*/}
              <label className="stuffed-titles" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                className="stuffed-titles__stuffed-texts js-forlkdn js_reset-linkedin"
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="url completa de tu perfil"
                value={dataCard.linkedin}
                onChange={handleInput}
              />
              <label className="stuffed-titles" htmlFor="github">
                GitHub
              </label>
              <input
                className="stuffed-titles__stuffed-texts js-forgit js_reset-git"
                type="text"
                name="github"
                id="github"
                placeholder="url completa de tu perfil"
                value={dataCard.github}
                onChange={handleInput}
              />
              <span className="cutting-line2"></span>
            </div>
          </fieldset>

          {/*SHARE AND CARD*/}
          <fieldset className="design-share">
            <div
              className="share-legend js-share-container"
              onClick={handlerClickColapsibleShare}
            >
              <i className="fa-solid fa-square-share-nodes share-legend__icon"></i>
              <p className="share-legend__text">Comparte</p>
              <i className="fa-solid fa-angle-up share-legend__arrow js-arrow3"></i>
            </div>
            <section className={`section-share-1 js-share ${triangleShare}`}>
              <button className="card-button js-button-share">
                <i className="fa-solid fa-address-card card-button__icon"></i>
                <span className="card-button__text">Crear tarjeta</span>
              </button>
              <span className="section-share__line"></span>
            </section>
            <section className="share-newcard card-hidden js-section-link">
              <h3 className="share-newcard__text js-false">
                La tarjeta ha sido creada:
              </h3>
              <a
                target="blank"
                className="share-newcard__link js-true"
                href=""
              ></a>
              <button className="share-newcard__button js-btn-twitter">
                <a className="link-twitter"></a>
              </button>
              <span className="section-share__line"></span>
            </section>
          </fieldset>
        </form>
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

      {/*js*/}
      <script type="text/javascript" src="./assets/js/main.js"></script>
    </div>
  );
}

export default App;
