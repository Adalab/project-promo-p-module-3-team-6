import Header from './Header';
import Design from './Design';
import Stuffed from './Stuffed';
import Share from './Share';
import CardPreview from './CardPreview';
import Footer from './Footer';

function Card(props) {
  //FUNCIONES/EVENTOS

  const handlerClickColapsibleDesign = () => {
    props.triangleDesign === ''
      ? props.setTriangleDesign('hidden')
      : props.setTriangleDesign('');
    props.arrowDesign === ''
      ? props.setArrowDesign('collapsible')
      : props.setArrowDesign('');
  };

  const handlerClickColapsibleForm = () => {
    props.triangleForm === ''
      ? props.setTriangleForm('hidden')
      : props.setTriangleForm('');
    props.arrowForm === ''
      ? props.setArrowForm('collapsible')
      : props.setArrowForm('');
  };

  const handlerClickColapsibleShare = () => {
    props.triangleShare === ''
      ? props.setTriangleShare('hidden')
      : props.setTriangleShare('');
    props.arrowShare === ''
      ? props.setArrowShare('collapsible')
      : props.setArrowShare('');
  };

  /*
    if (triangleDesign === '') {
          setTriangleShare('hidden') && setTriangleForm('hidden');
        }*/

  /*if (triangleForm === '') {
          setTriangleShare('hidden') && setTriangleDesign('hidden');
        }*/
  /*if (triangleShare === '') {
          setTriangleForm('hidden') && setTriangleDesign('hidden');}*/

  //manejadora botón crear
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    props.dataApi(props.dataCard).then((info) => {
      props.setApiData(info);
    });
  };

  return (
    <div>
      <Header />
      <main className="align-design">
        <section className="preview-section">
          <div className="preview-section__aliner-div">
            <button className="reset-button" onClick={props.handleReset}>
              <i className="fa-regular fa-trash-can reset-button__trash"></i>
              <span className="reset-button__text">Reset</span>
            </button>
            <article className="preview-card">
              <div className="preview-card__div rectangle">
                <h3 className="preview-card__div--name name">
                  {props.dataCard.name || 'Nombre Apellido'}
                </h3>
                <p className="preview-card__div--profession profession">
                  {props.dataCard.job || 'Front-end developer'}
                </p>
              </div>
              <div className="preview-card__image"></div>
              <nav>
                <ul className="card-list">
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={`tel:${props.dataCard.phone || ''}`}
                      className="card-list__item--link icon-palette"
                      title="Teléfono"
                    >
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </a>
                  </li>
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={`mailto:${props.dataCard.email || ''}`}
                      className="card-list__item--link icon-palette"
                      title="Correo electrónico"
                    >
                      <i className="fa-regular fa-envelope"></i>
                    </a>
                  </li>
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={props.dataCard.linkedin || ''}
                      className="card-list__item--link icon-palette"
                      title="Perfil de Linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="card-list__item border">
                    <a
                      target="blank"
                      href={props.dataCard.github || ''}
                      className="card-list__item--link icon-palette"
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
          <Design
            dataCard={props.dataCard}
            handlerClickColapsibleDesign={handlerClickColapsibleDesign}
            handleInput={props.handleInput}
          />

          {/*STUFFED*/}
          <fieldset className="stuffed-fieldset">
            <div className="stuffed" onClick={handlerClickColapsibleForm}>
              <i className="fa-regular fa-keyboard keyboard"></i>
              <p className="stuffed__text-stuffed">Rellena</p>
              <i className={`fa-solid fa-angle-up ${props.arrowForm}`}></i>
            </div>
            {/*NAME*/}
            <div className={`stuffed__stuffed-form ${props.triangleForm}`}>
              <label className="stuffed-titles" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="stuffed-titles__stuffed-texts"
                id="name"
                type="text"
                name="name"
                placeholder="Ej: Pepita Pérez"
                required
                value={props.dataCard.name}
                onChange={props.handleInput}
              />
              {/*PROFESSION*/}
              <label className="stuffed-titles" htmlFor="job">
                Puesto
              </label>
              <input
                className="stuffed-titles__stuffed-texts"
                id="job"
                type="text"
                name="job"
                placeholder="Ej: Front-end developer"
                required
                value={props.dataCard.job}
                onChange={props.handleInput}
              />
              {/*ADD IMAGE*/}
              <label className="stuffed-titles" htmlFor="image">
                Imagen de perfil
              </label>
              <div className="false-stuffed">
                <label className="false-stuffed__false-button" htmlFor="image">
                  Añadir imagen
                </label>
                <input className="hidden" type="file" id="image" name="image" />
                <div className="false-stuffed__false-square"></div>
              </div>
              {/*EMAIL*/}
              <label className="stuffed-titles" htmlFor="email">
                Email
              </label>
              <input
                className="stuffed-titles__stuffed-texts"
                id="email"
                type="email"
                name="email"
                placeholder="Ej: pepita.perez@gmail.com"
                required
                value={props.dataCard.email}
                onChange={props.handleInput}
              />
              {/*PHONE*/}
              <label className="stuffed-titles" htmlFor="telef">
                Teléfono
              </label>
              <input
                className="stuffed-titles__stuffed-texts"
                id="phone"
                type="tel"
                name="phone"
                placeholder="Ej: 000-000-000"
                required
                value={props.dataCard.phone}
                onChange={props.handleInput}
              />
              {/*SOCIAL MEDIA*/}
              <label className="stuffed-titles" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                className="stuffed-titles__stuffed-texts"
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="url completa de tu perfil"
                value={props.dataCard.linkedin}
                onChange={props.handleInput}
              />
              <label className="stuffed-titles" htmlFor="github">
                GitHub
              </label>
              <input
                className="stuffed-titles__stuffed-texts"
                type="text"
                name="github"
                id="github"
                placeholder="url completa de tu perfil"
                value={props.dataCard.github}
                onChange={props.handleInput}
              />
              <span className="cutting-line2"></span>
            </div>
          </fieldset>

          {/*SHARE AND CARD*/}
          <fieldset className="design-share">
            <div className="share-legend" onClick={handlerClickColapsibleShare}>
              <i className="fa-solid fa-square-share-nodes share-legend__icon"></i>
              <p className="share-legend__text">Comparte</p>
              <i className={`fa-solid fa-angle-up ${props.arrowShare}`}></i>
            </div>
            <section className={`section-share-1 ${props.triangleShare}`}>
              {/*componente crear tarjeta*/}
              <button className="card-button" onClick={handleClickCreateCard}>
                <i className="fa-solid fa-address-card card-button__icon"></i>
                <span className="card-button__text">Crear tarjeta</span>
              </button>

              <span className="section-share__line"></span>
            </section>
            <section className="share-newcard card-hidden">
              <h3 className="share-newcard__text">
                La tarjeta ha sido creada:
              </h3>
              <a target="blank" className="share-newcard__link" href="">
                {props.apiData.cardUrl || 'url'}
              </a>
              <button className="share-newcard__button">
                <a className="link-twitter"></a>
              </button>
              <span className="section-share__line"></span>
            </section>
          </fieldset>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Card;
