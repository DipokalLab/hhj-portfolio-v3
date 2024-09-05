import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { Modal } from "../components/common/Modal";
import { Button, IconButton } from "../components/common/Button";
import { FrondendPage } from "./section/Frontend";
import { BackendPage } from "./section/Backend";
import { PostPage } from "./section/Post";
import { SecurityPage } from "./section/Security";
import { LinksPage } from "./section/Links";

import { Footer } from "./Footer";
import { Container } from "../components/Container";
import i18n from "../i18n";
import { t } from "i18next";
import { Nav } from "../components/common/Nav";
import { getCookies, setCookie } from "../utils/cookie";
import { HackathonPage } from "./section/Hackathon";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nowLanguage, setNowLanguage] = useState("en");

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClickOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOldPage = () => {
    location.href = "https://v2.hhj.devent.kr";
  };

  const onChangeLanguage = () => {
    console.log(nowLanguage);
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
      <Nav onChangeLang={onChangeLanguage} />

      <Container>
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            gap: "30vh",
          })}
        >
          <FrondendPage />
          <BackendPage />
          <PostPage />
          <SecurityPage />
          <HackathonPage />

          <LinksPage />
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
