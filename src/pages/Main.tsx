import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { Modal } from "../components/common/Modal";
import { Button, IconButton } from "../components/common/Button";
import { FrondendPage } from "./subs/Frontend";
import { BackendPage } from "./subs/Backend";
import { PostPage } from "./subs/Post";
import { SecurityPage } from "./subs/Security";
import { Footer } from "./Footer";
import { Container } from "../components/Container";
import { LinksPage } from "./subs/Links";
import i18n from "../i18n";
import { t } from "i18next";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nowLanguage, setNowLanguage] = useState("ko");

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClickOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClickOldPage = () => {
    location.href = "https://v2.hhj.devent.kr";
  };

  const onChangeLanguage = () => {
    if (nowLanguage == "ko") {
      setNowLanguage("en");
      i18n.changeLanguage("en");
    } else {
      setNowLanguage("ko");

      i18n.changeLanguage("ko");
    }
  };

  return (
    <>
      <Header></Header>
      <Modal onClose={handleClose} isOpen={isModalOpen}>
        <div css={css({ display: "flex", flexDirection: "column" })}>
          <div css={css({ display: "flex", gap: "1rem" })}>
            <Button onClick={handleClickOldPage}>
              {t(`ns:main.PrevPortfolio`)}
            </Button>
            <Button onClick={onChangeLanguage}>
              {t(`ns:main.changeLanguage`)}
            </Button>
          </div>
        </div>
      </Modal>

      <IconButton onClick={handleClickOpenModal} isDisplay={!isModalOpen}>
        person
      </IconButton>

      <Container>
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            gap: "30vh",
          })}
        >
          <FrondendPage></FrondendPage>
          <BackendPage></BackendPage>
          <PostPage></PostPage>
          <SecurityPage></SecurityPage>
          <LinksPage></LinksPage>
        </div>
      </Container>

      <Footer></Footer>
    </>
  );
}

function Header() {
  return (
    <div
      css={css({
        backgroundColor: "#f2f3f5",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      })}
    >
      <div
        css={css({
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        })}
      >
        <h1 css={css({ fontSize: "2rem" })}>{t(`ns:main.title`)}</h1>
      </div>
    </div>
  );
}

export default MainPage;
