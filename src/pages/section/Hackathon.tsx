import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Bold } from "../../components/common/Text";
import { t } from "i18next";

export function HackathonPage() {
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
      ></div>
    </div>
  );
}
