import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import ItensButtons from "../components/ItensButtons";
import Form from "../components/Form";
import Result from "../components/Result";
import { ResultProvider } from "../contexts/ResultContext";
import { FieldsProvider } from "../contexts/FieldsContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  /*
   * useEffect() para confirmar se o usuário quer mesmo sair da página
   */
  useEffect(() => {
    if (window !== undefined) {
      window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        return e ? e.returnValue : "";
      };
    }
  });

  /*
   * Conteúdo principal da página
   */
  return (
    <div className={styles.container}>
      <Head>
        <title>Editor de publicações de Facebook - Giosepe Luiz</title>
        <meta name="description" content="Editor de publicações de Facebook" />
        <meta property="og:title" content="Editor de publicações de Facebook - Giosepe Luiz" />
        <meta property="og:description" content="Editor de publicações de Facebook" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://editor.arqueirover.de" />
        <meta property="og:image" content="../images/og-social-banner.png" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ResultProvider>
          <div className={styles.description}>
            <Image
              alt="Logo Familia Ubisoft "
              width="100px"
              height="100px"
              style={{ borderRadius: "50px" }}
              src="/images/familia-ubi-logo.jpg"
            />
            <p>
              <strong>Editor de publicações: </strong> este projeto tem unicamente a proposta de ser
              um treinamento de ReactJS e NextJS, ao mesmo tempo que é uma aplicação útil para
              editar publicações da página{" "}
              <a
                href="https://www.facebook.com/familiaubisoft"
                target="_blank"
                style={{ color: "#0070f3", fontWeight: "bold" }}
                rel="noreferrer">
                Família Ubisoft
              </a>{" "}
              no Facebook.
            </p>
          </div>

          <div className={styles.grid}>
            <FieldsProvider>
              <div className={styles.column}>
                <h2>Edição</h2>

                {/* Formulário de Inserção de itens */}
                <Form />

                {/* Botões de Inserção de itens */}
                <ItensButtons />
              </div>

              <div className={styles.column}>
                <h2>Resultado</h2>
                {/* Texto já formatado */}
                <Result />
              </div>
            </FieldsProvider>
          </div>
        </ResultProvider>
      </main>

      <footer className={styles.footer}>
        Criado por{" "}
        <a
          href="https://www.facebook.com/giosepeluiz"
          target="_blank"
          style={{ fontWeight: "bold" }}
          rel="noreferrer">
          Giosepe Luiz
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/giosepeluiz/fb-familia-ubisoft-editor"
          target="_blank"
          style={{ fontWeight: "bold" }}
          rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}
