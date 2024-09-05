import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Bold } from "../../components/common/Text";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

export function HackathonPage() {
  const navigate = useNavigate();

  const handleClick = (clickTo) => {
    navigate(`/hackathon/${clickTo}`);
  };

  return (
    <div css={css({})}>
      <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}>
        <Bold>{t(`ns:hackathon.title`)}</Bold>
        {t(`ns:hackathon.titleNext`)}
      </p>
      <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>
        {t(`ns:hackathon.description`)}
      </p>

      <div
        css={css({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingTop: "2rem",
        })}
      >
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            paddingTop: "2rem",
            width: "100%",
          })}
        >
          <Item date={"2024. 08 2days"}>
            <p>2024 GDSC KAIST SPARKLINGTHON (2nd prize)</p>
          </Item>
          <Item date={"2024. 08 3days"}>
            <p>Junction Asia 2024 (participation)</p>
          </Item>
          <Item date={"2024. 07 4days"}>
            <p>2024 SPARCS AI Hackathon (finals)</p>
          </Item>
          <Item date={"2024. 05 4days"}>
            <p>goormthon in JEJU 10th (3rd prize)</p>
          </Item>

          <Item date={"2024. 02 2days"} onClick={() => handleClick("1st")}>
            <p>Impacthon 1th (2nd prize)</p>
          </Item>
        </div>
      </div>
    </div>
  );
}

function Item({ children, date, onClick }: any) {
  return (
    <div
      onClick={onClick}
      css={css({
        position: "relative",

        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
      })}
    >
      <div
        css={css({
          width: "4px",
          height: "100%",
          backgroundColor: "#F0F0F4",
        })}
      >
        <div
          css={css({
            position: "absolute",
            width: "12px",
            height: "12px",
            top: "-4px",
            left: "-4px",

            borderRadius: "100px",
            backgroundColor: "#797a85",
          })}
        ></div>
      </div>

      <div
        css={css({
          width: "100%",
        })}
      >
        <p
          css={css({
            position: "absolute",
            top: "-17px",
            margin: 0,
            paddingTop: "6px",
            color: "#797a85",
          })}
        >
          {date}
        </p>
        <div
          css={css({
            cursor: "pointer",
            marginTop: "36px",
            transform: "translateY(0px)",
            transition: "0.4s",
            borderRadius: "1rem",
            border: "0.1rem solid #F0F0F4",
            padding: "0.5rem 1.5rem",
            ":hover": {
              transform: "translateY(-8px)",
              boxShadow: "rgba(147, 148, 158, 0.25) 0px 7px 40px",

              opacity: "100%",
            },
          })}
        >
          {children}
        </div>

        <div
          css={css({
            marginBottom: "36px",
          })}
        ></div>
      </div>
    </div>
  );
}
