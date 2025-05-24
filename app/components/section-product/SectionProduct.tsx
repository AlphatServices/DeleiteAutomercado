import styles from "./SectionProduct.module.css";

function SectionProduct() {
  return (
    <div className={styles["section-product"]}>
      <nav className={styles["nav-tabs"]}>
        <ul>
          <li>
            <a>Descripción</a>
          </li>
          <li>
            <a className={styles["active"]}>Reseñas</a>
          </li>
          <li>
            <a>Ingredientes</a>
          </li>
          <li>
            <a>Ofertas 🔥</a>
          </li>
        </ul>
      </nav>

      <section>
        <div className={styles["add-review"]}>
          <h2 className={styles["add-review-title"]}>Añadir Reseña</h2>
          <div className={styles["add-review-cta"]}>
            <p>Se el primero en comentar</p>
            <p className={styles["stars"]}>★★★★★</p>
          </div>
        </div>
        <div className={styles["review-input-container"]}>
          <input
            id="input-comment"
            type="text"
            className={styles["review-input"]}
            placeholder="Comparte tu opinión"
          />
          <a className={styles["publish-button"]}>
            Publicar! <b>→</b>
          </a>
        </div>

        <div className={styles["comments-section"]}>
          <h3>3 comentarios</h3>
          <div className={styles["comment"]}>
            <img
              className={styles["user-profile-picture"]}
              src="../element-info/profile.png"
              alt="Usuario"
            />
            <div className={styles["comment-user"]}>
              <div className={styles["user-info"]}>
                <div>
                  <span>Osbaldo Beahan</span>
                  <p className={styles["stars"]}>★★★★★</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className={styles["comment-actions"]}>
                <span>Hace 1 hora</span>
                <a>Me gusta</a>
                <a>Responder</a>
              </div>
            </div>
          </div>
          <div className={styles["comment"]}>
            <img
              className={styles["user-profile-picture"]}
              src="../element-info/profile.png"
              alt="Usuario"
            />
            <div className={styles["comment-user"]}>
              <div className={styles["user-info"]}>
                <div>
                  <span>Osbaldo Beahan</span>
                  <p className={styles["stars"]}>★★★★★</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className={styles["comment-actions"]}>
                <span>Hace 1 hora</span>
                <a>Me gusta</a>
                <a>Responder</a>
              </div>
            </div>
          </div>
          <div className={styles["comment"]}>
            <img
              className={styles["user-profile-picture"]}
              src="../element-info/profile.png"
              alt="Usuario"
            />
            <div className={styles["comment-user"]}>
              <div className={styles["user-info"]}>
                <div>
                  <span>Osbaldo Beahan</span>
                  <p className={styles["stars"]}>★★★★★</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className={styles["comment-actions"]}>
                <span>Hace 1 hora</span>
                <a>Me gusta</a>
                <a>Responder</a>
              </div>
            </div>
          </div>
          <a className={styles["loading-comments"]}>
            <img src="../element-info/Shape.svg" alt="" />
            Cargando comentarios
          </a>
        </div>
      </section>
    </div>
  );
}

export default SectionProduct;
