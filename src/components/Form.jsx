import { useContext } from "react";
import {
  TextAreaField,
  TextField,
  TitleField,
  InfoField,
  AlertField,
  HashtagsField,
} from "./Fields";
import { ResultContext } from "../contexts/ResultContext";
import { FieldsContext } from "../contexts/FieldsContext";
import styles from "../styles/Home.module.css";

/*
 * Verifica o tipo de elemento que será adicionado
 */
const fieldType = (value) => {
  switch (value) {
    case "title":
      return <TitleField />;

    case "text":
      return <TextField />;

    case "textarea":
      return <TextAreaField />;

    case "info":
      return <InfoField />;

    case "alert":
      return <AlertField />;

    case "hashtags":
      return <HashtagsField />;

    default:
      return null;
  }
};

/*
 * Formulário a ser exibido.
 */
const Form = () => {
  const [, setResult] = useContext(ResultContext);
  const [fields, setFields] = useContext(FieldsContext);

  /* Excluir uma campo do vetor */
  const handleRemoveItem = (index) => {
    const removeItem = [...fields];
    removeItem[index] = null;
    setFields(removeItem);
  };

  /* Acrescenta um novo item no vetor de resultado formatado */
  const handleResult = (event) => {
    event.preventDefault();
    setResult([]);
    let i = 0;

    do {
      const type = event.target[i].name;
      const { value } = event.target[i];

      setResult((prevValue) => [...prevValue, { type, value }]);
      i += 1;
    } while (i < event.target.length - 1);
  };

  return (
    <>
      <form id="post-edit" onSubmit={(e) => handleResult(e)}>
        {/* Verifica de não existe nenhum elemento com "null", para ser ignorado */}
        {fields.map((field, index) =>
          field !== null ? (
            <div key={+index} className={styles.card}>
              {fieldType(field, index)}{" "}
              {index !== 0 ? (
                <div
                  aria-hidden="true"
                  role="link"
                  tabIndex={0}
                  onClick={() => handleRemoveItem(index)}
                  style={{
                    fontSize: "10px",
                    cursor: "pointer",
                    color: "red",
                    textAlign: "right",
                  }}>
                  Excluir
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          ),
        )}
      </form>
    </>
  );
};

export default Form;
