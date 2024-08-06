import { css } from "@emotion/react";
import { t } from "i18next";
import { ChevronLeft, CircleUser, Languages, X } from "lucide-react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import i18n from "../../i18n";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Nav({
  onChangeLang,
  enableBack = false,
}: {
  onChangeLang?: any;
  enableBack?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nowLanguage, setNowLanguage] = useState("en");

  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClickOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickBack = () => {
    navigate(-1);
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
      <div
        css={css({
          position: "fixed",
          zIndex: "3000",
          top: "0.6rem",
          right: "0.6rem",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "#ffffff95",
          backdropFilter: "blur(26px)",
          padding: "0.25rem 0.25rem",
          gap: "0.5rem",
        })}
      >
        <ProfileIcon onClick={handleClickOpenModal} isDisplay={!isModalOpen} />
        <LanguagesIcon onClick={onChangeLang} />
      </div>

      {enableBack && (
        <div
          css={css({
            position: "fixed",
            zIndex: "3000",
            top: "0.6rem",
            left: "0.6rem",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "#ffffff95",
            backdropFilter: "blur(26px)",
            padding: "0.25rem 0.25rem",
            gap: "0.5rem",
          })}
        >
          <BackIcon onClick={handleClickBack} />
        </div>
      )}

      <Modal onClose={handleClose} isOpen={isModalOpen}>
        <div css={css({ display: "flex", flexDirection: "column" })}>
          <div css={css({ display: "flex", gap: "1rem" })}>
            <Button onClick={handleClickOldPage}>
              {t(`ns:main.PrevPortfolio`)}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

function ProfileIcon({
  onClick,
  isDisplay,
}: {
  onClick?: any;
  isDisplay?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      css={css({
        width: "24px",
        height: "24px",
        borderRadius: "100px",
        padding: "0.5rem",
        transition: "0.2s",
        ":hover": {
          backgroundColor: "#31323630",
        },
      })}
    >
      {isDisplay ? <CircleUser /> : <X />}
    </div>
  );
}

function LanguagesIcon({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      css={css({
        width: "24px",
        height: "24px",
        borderRadius: "100px",
        padding: "0.5rem",
        transition: "0.2s",
        ":hover": {
          backgroundColor: "#31323630",
        },
      })}
    >
      <Languages />
    </div>
  );
}

function BackIcon({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      css={css({
        width: "24px",
        height: "24px",
        borderRadius: "100px",
        padding: "0.5rem",
        transition: "0.2s",
        ":hover": {
          backgroundColor: "#31323630",
        },
      })}
    >
      <ChevronLeft />
    </div>
  );
}
