import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

export function TitleField() {
  return (
    <input
      className={styles.input}
      style={{ textTransform: "uppercase", fontWeight: "bold" }}
      type="text"
      name="title"
      placeholder="Insira o título"
      required
    />
  );
}

export function TextField() {
  return (
    <input
      className={styles.input}
      type="text"
      name="text"
      placeholder="Insira uma linha"
      required
    />
  );
}

export function TextAreaField() {
  return (
    <textarea className={styles.textarea} name="textarea" placeholder="Insira um texto" required />
  );
}

export function InfoField() {
  return (
    <>
      <FontAwesomeIcon
        icon={faInfo}
        style={{ width: "15px", height: "15px", marginTop: "10px", marginLeft: "10px" }}
      />{" "}
      <input
        required
        className={styles.input}
        type="text"
        name="info"
        placeholder="Insira uma informação"
        style={{
          position: "relative",
          top: "-25px",
          paddingLeft: "30px",
          background: "none",
        }}
      />
    </>
  );
}

export function AlertField() {
  return (
    <>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        style={{ width: "15px", height: "15px", marginTop: "10px", marginLeft: "10px" }}
      />{" "}
      <input
        required
        className={styles.input}
        type="text"
        name="alert"
        placeholder="Insira um aviso de alerta"
        style={{
          position: "relative",
          top: "-25px",
          paddingLeft: "30px",
          background: "none",
        }}
      />
    </>
  );
}

export function HashtagsField() {
  return (
    <input
      required
      className={styles.input}
      type="text"
      name="hashtags"
      placeholder="Insira as hashtags com # na frente e separadas por espaço"
    />
  );
}
