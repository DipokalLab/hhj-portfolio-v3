import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Container } from "../components/Container";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const [expend, setExpend] = useState(false);

  return (
    <div
      css={css({
        backgroundColor: "#f2f3f5",
        marginTop: "2rem",
      })}
    >
      <Container>
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            paddingBottom: "env(safe-area-inset-bottom)",
          })}
        >
          <p css={css({ fontWeight: "300", fontSize: "0.8rem", margin: 0 })}>
            @dipokal
          </p>
          <p
            css={css({
              fontWeight: "500",
              fontSize: "0.8rem",
              color: "#797a85",
            })}
          >
            {t(`ns:main.FooterDesc`)}{" "}
            <a
              css={css({
                fontWeight: "500",
                fontSize: "0.8rem",
                color: "#797a85",
              })}
              href="https://github.com/DipokalLab/hhj-portfolio-v3"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/DipokalLab/hhj-portfolio-v3
            </a>
          </p>
          <Link url={"https://www.facebook.com/dipokalhhj"}>
            {t(`ns:platform.facebook`)}
          </Link>
          <Link url={"https://github.com/DipokalLab"}>
            {t(`ns:platform.github`)}
          </Link>
          <Link url={"https://www.instagram.com/hyeongjun.dev/"}>
            {t(`ns:platform.instagram`)}
          </Link>

          {expend ? (
            <>
              <Link url={"https://velog.io/@dipokalhhj"}>
                {t(`ns:platform.blog`)} {">"}
              </Link>
              <Link url={"https://disquiet.io/@hhj"}>
                {t(`ns:platform.makerblog`)} {">"}
              </Link>
              <Link url={"https://www.linkedin.com/in/huhhyeongjun/"}>
                {t(`ns:platform.linkedin`)} {">"}
              </Link>
              <Link url={"https://medium.com/@hyeongjun"}>
                {t(`ns:platform.medium`)} {">"}
              </Link>
              <Link url={"https://x.com/huhhyeongjun"}>
                {"X (@huhhyeongjun) >"}
              </Link>
              <Link url={"https://www.threads.net/@hyeongjun.dev"}>
                {"Thread (@hyeongjun.dev) >"}
              </Link>
            </>
          ) : (
            <p
              css={css({
                fontWeight: "500",
                fontSize: "0.8rem",
                color: "#797a85",
                textDecoration: "underline",
                margin: 0,
                cursor: "pointer",
              })}
              onClick={() => setExpend(true)}
            >
              ...
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}

function Link({ url, children }: { url: string; children: any }) {
  return (
    <a
      css={css({
        fontWeight: "500",
        fontSize: "0.8rem",
        color: "#797a85",
      })}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export { Footer };
