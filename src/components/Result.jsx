/* eslint-disable */
import { faCopy, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef } from "react";
import { ResultContext } from "../contexts/ResultContext";
import styles from "../styles/Home.module.css";

const itemList = (array) => {
  let nbsp = "\n";
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

export function Result() {
  const [result] = useContext(ResultContext);
  const textRef = useRef(null);

  return (
    <div>
      <div className={styles.card} style={{ display: "flex", justifyContent: "center" }}>
        <button type="submit" form="post-edit" className={styles["button-element"]}>
          <FontAwesomeIcon icon={faEdit} className={styles.button} />
        </button>
        <button type="button" disabled className={styles["button-element"]}>
          <FontAwesomeIcon icon={faCopy} className={styles.button} />
        </button>
      </div>
      {result.length !== 0 && (
        <div className={styles.card} ref={textRef}>
          {result.map((item, index) => {
            return item.value !== "" ? (
              <span key={index}>
                {itemList(item)}
                <br />⠀<br />
              </span>
            ) : (
              ""
            );
          })}
        </div>
      )}
    </div>
  );
}
