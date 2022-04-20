import '../styles/main.scss';
import logoAdalab from "../images/logo-adalab.png";
import logoAwesome from "../images/logo-awesome-profile-cards.svg";


function App() {
  return (
    <div>
      <header>
      <img className="logohead"
        src={logoAwesome}
        alt="Logo de la aplicación"
      />
    </header>

    <main className="align-design">
      <section className="preview-section">
        <div className="preview-section__aliner-div">
          <button className="reset-button js-reset">
            <i className="fa-regular fa-trash-can reset-button__trash"></i>
            <span className="reset-button__text">Reset</span>
          </button>
          <article className="preview-card js_preview">
            <div className="preview-card__div rectangle">
              <h3 className="preview-card__div--name name js-name js_reset-title">
                Nombre Apellido
              </h3>
              <p
                className="preview-card__div--profession profession js-profession js_reset-subtitle"
              >
                Front-end developer
              </p>
            </div>
            <div className="preview-card__image js__profile-image"></div>
            <nav>
              <ul className="card-list">
                <li className="card-list__item border">
                  <a
                    target="blank"
                    href=""
                    className="card-list__item--link icon-palette js-phone js_reset-telf"
                    title="Teléfono"
                    ><i className="fa-solid fa-mobile-screen-button"></i
                  ></a>
                </li>
                <li className="card-list__item border">
                  <a
                    target="blank"
                    href=""
                    className="card-list__item--link icon-palette js-email js_reset-send"
                    title="Correo electrónico"
                    ><i className="fa-regular fa-envelope"></i
                  ></a>
                </li>
                <li className="card-list__item border">
                  <a
                    target="blank"
                    href=""
                    className="card-list__item--link icon-palette js-linkedin js_reset-lknd"
                    title="Perfil de Linkedin"
                    ><i className="fa-brands fa-linkedin-in"></i
                  ></a>
                </li>
                <li className="card-list__item border">
                  <a
                    target="blank"
                    href=""
                    className="card-list__item--link icon-palette js-git js_reset-github"
                    title="Perfil de GitHub"
                    ><i className="fa-brands fa-github-alt"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </section>

      <form className="form">
        {/* DESIGN */}
        <fieldset className="design-fieldset">
          <div className="design js-design-container">
            <i className="fa-regular fa-object-ungroup screens"></i>
            <p className="design__text-design">Diseña</p>
            <i className="fa-solid fa-angle-up collapsible js-arrow1"></i>
          </div>
          {/* COLORS */}
          {/* PALLETE ONE */}
          <section className="design-fieldset__design-section js-design js-reset-form">
            <div className="colors__colors-box">
              <label htmlFor="palette" className="colors">Colores</label>
              <input
                className="colors__colors-input js_radio1 js_radio"
                type="radio"
                name="palette"
                id="palette1"
                value="palette1"
                checked="selected"
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
                id="palette2"
                value="palette2"
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
                id="palette3"
                value="palette3"
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
          <div className="stuffed js-stuffed-container">
            <i className="fa-regular fa-keyboard keyboard"></i>
            <p className="stuffed__text-stuffed">Rellena</p>
            <i className="fa-solid fa-angle-up collapsible js-arrow2"></i>
          </div>
         {/*NAME*/}
          <div
            className="stuffed__stuffed-form hidden js-stuffed js-stuffed-form js-reset-form"
          >
            <label className="stuffed-titles" htmlFor="name">Nombre completo</label>
            <input
              className="stuffed-titles__stuffed-texts js-forname js_reset-name"
              id="name"
              type="text"
              name="name"
              placeholder="Ej: Pepita Pérez"
              required
            />
            {/*PROFESSION*/}
            <label className="stuffed-titles" htmlFor="profession">Puesto</label>
            <input
              className="stuffed-titles__stuffed-texts js-forjob js_reset-job"
              id="profession"
              type="text"
              name="profession"
              placeholder="Ej: Front-end developer"
              required
            />
            {/*ADD IMAGE*/}
            <label className="stuffed-titles" htmlFor="image">Imagen de perfil</label>
            <div className="false-stuffed">
              <label className="false-stuffed__false-button js__profile-trigger" htmlFor="image"
                >Añadir imagen</label
              >
              <input
                className="hidden js__profile-upload-btn js-forimage"
                type="file"
                id="image"
                name="image"
              />
              <div className="false-stuffed__false-square js__profile-preview"></div>
            </div>
            {/*EMAIL*/}
            <label className="stuffed-titles" htmlFor="email">Email</label>
            <input
              className="stuffed-titles__stuffed-texts js-formail js_reset-mail"
              id="email"
              type="email"
              name="email"
              placeholder="Ej: pepita.perez@gmail.com"
              required
            />
            {/*PHONE*/}
            <label className="stuffed-titles" htmlFor="telef">Teléfono</label>
            <input
              className="stuffed-titles__stuffed-texts js-forphone js_reset-phone"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Ej: 000-000-000"
              required
            />
            {/*SOCIAL MEDIA*/}
            <label className="stuffed-titles" htmlFor="Linkedin">Linkedin</label>
            <input
              className="stuffed-titles__stuffed-texts js-forlkdn js_reset-linkedin"
              type="text"
              name="Linkedin"
              id="Linkedin"
              placeholder="Ej: PepitaPerez"
            />
            <label className="stuffed-titles" htmlFor="GitHub">GitHub</label>
            <input
              className="stuffed-titles__stuffed-texts js-forgit js_reset-git"
              type="text"
              name="GitHub"
              id="GitHub"
              placeholder="Ej: PepiPerez"
            />
            <span className="cutting-line2"></span>
          </div>
        </fieldset>

        {/*SHARE AND CARD*/}
        <fieldset className="design-share">
          <div className="share-legend js-share-container">
            <i className="fa-solid fa-square-share-nodes share-legend__icon"></i>
            <p className="share-legend__text">Comparte</p>
            <i className="fa-solid fa-angle-up share-legend__arrow js-arrow3"></i>
          </div>
          <section className="section-share-1 hidden js-share">
            <button className="card-button js-button-share">
              <i className="fa-solid fa-address-card card-button__icon"></i>
              <span className="card-button__text">Crear tarjeta</span>
            </button>
            <span className="section-share__line"></span>
          </section>
          <section className="share-newcard card-hidden js-section-link">
            <h3 className="share-newcard__text js-false">La tarjeta ha sido creada:</h3>
            <a target="blank" className="share-newcard__link js-true" href=""></a>
            <button className="share-newcard__button js-btn-twitter">
              <a
                target="blank"
                className="js-link-twitter"
                href="https://twitter.com/intent/tweet?text=Aquí%20tienes%20las%20tarjetas%20del%20equipo%20cinco%20"
              >
                <i className="fa-brands fa-twitter"></i><span>Compartir en twitter</span></a
              >
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
