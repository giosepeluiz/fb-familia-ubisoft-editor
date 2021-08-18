import { faCopy, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import styles from "../styles/Home.module.css";
import { FieldsContext } from "../contexts/FieldsContext";

/*
 * Lista todos os itens formatados
 */
const itemList = (array) => {
  switch (array.type) {
    case "title":
      return `🔥 ${array.value.toUpperCase()} 🔥`;
    case "text":
      return `${array.value}`;
    case "textarea":
      return `${array.value}`;
    case "info":
      return (
        <span>
          ▔⠀▔⠀▔⠀▔⠀▔
          <br />
          💜 {array.value}
          <br />
          ▂⠀▂⠀▂⠀▂⠀▂
        </span>
      );
    case "alert":
      return (
        <span>
          ▔⠀▔⠀▔⠀▔⠀▔
          <br />⚠ {array.value}
          <br />
          ▂⠀▂⠀▂⠀▂⠀▂
        </span>
      );
    case "hashtags":
      return (
        <span>
          ⠀<br />
          ▔⠀▔⠀▔⠀▔⠀▔
          <br />
          {array.value}
          <br />
        </span>
      );
    default:
      return array.value;
  }
};

/*
 * Copiar texto para a Área de Transferência
 */
const copyToTextarea = () => {
  const resultArea = document.getElementById("resultArea");
  navigator.clipboard.writeText(resultArea.innerText);
  /* eslint-disable-next-line */
  alert("Texto copiado para a Área de Transferência!");
};

/*
 * Conteúdo principal do componente
 */
export default function Result() {
  const [result] = useContext(ResultContext);
  const [fields] = useContext(FieldsContext);

  return (
    <div>
      <div className={styles.card} style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          disabled={fields.length === 0}
          form="post-edit"
          className={styles["button-element"]}>
          <FontAwesomeIcon icon={faEdit} className={styles.button} />
        </button>
        <button
          type="button"
          disabled={result.length === 0}
          className={styles["button-element"]}
          onClick={copyToTextarea}>
          <FontAwesomeIcon icon={faCopy} className={styles.button} />
        </button>
      </div>
      {result.length !== 0 && (
        <div className={styles.card} id="resultArea">
          {result.map((item, index) => {
            if (item.value !== "") {
              return (
                <span key={+index}>
                  {itemList(item)}
                  <br />⠀<br />
                </span>
              );
            }
            return "";
          })}
        </div>
      )}
    </div>
  );
}
