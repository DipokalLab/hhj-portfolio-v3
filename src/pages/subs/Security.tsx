import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Box } from "../../components/common/Box";
import { Badge } from "../../components/common/Badge";
import { Modal } from "../../components/common/Modal";
import { ProjectItem, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { t } from "i18next";

function SecurityPage() {
  const handleClickOtherSite = () => {
    location.href = "https://dreamhack.io/users/1584/wargame";
  };

  return (
    <div css={css({})}>
      <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}>
        {" "}
        <b css={css({ fontWeight: 500 })}>
          {t(`ns:informationSecurity.title`)}
        </b>
        {t(`ns:informationSecurity.titleNext`)}
      </p>
      <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>
        {t(`ns:informationSecurity.description`)}
      </p>

      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "2rem",
        })}
      >
        <Box>
          <div
            css={css({
              padding: "1rem",
            })}
          >
            <p
              css={css({
                fontWeight: "500",
                fontSize: "1.3rem",
                margin: 0,
                marginBottom: "1rem",
              })}
            >
              {" "}
              <b css={css({ fontWeight: 500 })}>2022</b>
            </p>
            <p css={css({ margin: 0 })}>
              The Hacking Championship Junior 2022 본선 장려상
            </p>
          </div>
        </Box>

        <Box>
          <div
            css={css({
              padding: "1rem",
            })}
          >
            <p
              css={css({
                fontWeight: "500",
                fontSize: "1.3rem",
                margin: 0,
                marginBottom: "1rem",
              })}
            >
              {" "}
              <b css={css({ fontWeight: 500 })}>2021</b>
            </p>
            <p css={css({ margin: 0 })}>
              제 1회 주니어 해킹방어대회(K-CTF Jr.) 국가보안기술연구소장상(2등)
            </p>
            <p css={css({ margin: 0 })}>
              제 7회 정보보안경진대회 단체전 협의회원장상(5등)
            </p>
          </div>
        </Box>

        <Button onClick={handleClickOtherSite}>드림핵</Button>
      </div>
    </div>
  );
}

export { SecurityPage };
