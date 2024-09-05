import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Bold } from "../../components/common/Text";
import { t } from "i18next";

function LinksPage() {
  return (
    <div css={css({})}>
      <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}>
        <Bold>{t(`ns:moreLink.title`)}</Bold>
        {t(`ns:moreLink.titleNext`)}
      </p>
      <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>
        {t(`ns:moreLink.description`)}
      </p>

      <div
        css={css({
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingTop: "2rem",
        })}
      >
        <IconLink
          image="/logos/linkedin.svg"
          url="https://www.linkedin.com/in/huhhyeongjun/"
        ></IconLink>
        <IconLink
          image="/logos/instagram.svg"
          url="https://www.instagram.com/hyeongjun.dev/"
        ></IconLink>
        <IconLink
          image="/logos/tistory.svg"
          url="https://devent.tistory.com/"
        ></IconLink>
      </div>
    </div>
  );
}

function IconLink({ image, url }: { image: string; url: string }) {
  return (
    <div
      css={css({
        display: "flex",
      })}
    >
      <div
        css={css({
          position: "relative",
          width: "100px",
          height: "100px",
        })}
      >
        <div
          onClick={() => window.open(url, "_blank")}
          css={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "pointer",
            width: "100px",
            height: "100px",
            backgroundColor: "#ffffff00",
            zIndex: 900,
            borderRadius: ".6rem",
            transition: "0.1s",
            opacity: "0%",
            ":hover": {
              backgroundColor: "#ffffff66",
              backdropFilter: "blur(4px)",
              opacity: "100%",
            },
          })}
        >
          <p>{t(`ns:common.go`)}</p>
        </div>
        <img
          src={image}
          css={css({ position: "absolute", top: 0, left: 0 })}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export { LinksPage };
