import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faExclamationTriangle,
  faGripLines,
  faHashtag,
  faHeading,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FieldsContext } from "../contexts/FieldsContext";

import styles from "../styles/Home.module.css";

const ItensButtons = () => {
  const initialValue = "Escolha uma opção para editar...";
  const [fields, setFields] = useContext(FieldsContext);
  const [tipArea, setTipArea] = useState(initialValue);

  return (
    <div
      className={styles.card}
      style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {!fields.length ? (
          <button type="button" className={styles["button-element"]}>
            <FontAwesomeIcon
              icon={faHeading}
              onClick={() => setFields([...fields, "title"])}
              className={styles.button}
              onMouseOver={() => setTipArea("Título")}
              onMouseLeave={() => setTipArea(initialValue)}
            />
          </button>
        ) : (
          <>
            <button type="button" className={styles["button-element"]}>
              <FontAwesomeIcon
                icon={faGripLines}
                onClick={() => setFields([...fields, "text"])}
                className={styles.button}
                onMouseOver={() => setTipArea("Texto Simples")}
                onMouseLeave={() => setTipArea(initialValue)}
              />
            </button>
            <button type="button" className={styles["button-element"]}>
              <FontAwesomeIcon
                icon={faAlignJustify}
                onClick={() => setFields([...fields, "textarea"])}
                className={styles.button}
                onMouseOver={() => setTipArea("Parágrafo")}
                onMouseLeave={() => setTipArea(initialValue)}
              />
            </button>
            <button type="button" className={styles["button-element"]}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                onClick={() => setFields([...fields, "info"])}
                className={styles.button}
                onMouseOver={() => setTipArea("Texto informativo")}
                onMouseLeave={() => setTipArea(initialValue)}
              />
            </button>
            <button type="button" className={styles["button-element"]}>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                onClick={() => setFields([...fields, "alert"])}
                className={styles.button}
                onMouseOver={() => setTipArea("Texto de Alerta")}
                onMouseLeave={() => setTipArea(initialValue)}
              />
            </button>
            <button type="button" className={styles["button-element"]}>
              <FontAwesomeIcon
                icon={faHashtag}
                onClick={() => setFields([...fields, "hashtags"])}
                className={styles.button}
                onMouseOver={() => setTipArea("Grupo de Hashtags")}
                onMouseLeave={() => setTipArea(initialValue)}
              />
            </button>
          </>
        )}
      </div>
      <p style={{ textAlign: "center", margin: "10px 0", fontSize: "1.2rem" }}>
        {tipArea === initialValue ? (
          <span style={{ opacity: 0.5 }}>{tipArea}</span>
        ) : (
          <strong>{tipArea}</strong>
        )}
      </p>
    </div>
  );
};

export default ItensButtons;
