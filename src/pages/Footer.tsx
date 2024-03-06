import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Container } from "../components/Container";

function Footer() {
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
            소프트웨어 개발자 허형준의 개인 포트폴리오 입니다. 취업을 위한
            용도가 아닌 기록을 남기기 위함이 목적이며, 구체적인 인적 사항이
            명시되지 않습니다. 해당 사이트의 코드는{" "}
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
            에 있습니다.
          </p>
          <Link url={"https://www.facebook.com/dipokalhhj"}>페이스북</Link>
          <Link url={"https://github.com/DipokalLab"}>깃허브</Link>
          <Link url={"https://www.instagram.com/hyeongjun.dev/"}>
            인스타그램
          </Link>

          {expend ? (
            <>
              <Link url={"https://velog.io/@dipokalhhj"}>Velog {">"}</Link>
              <Link url={"https://disquiet.io/@hhj"}>디스콰이엇 {">"}</Link>
              <Link url={"https://www.linkedin.com/in/huhhyeongjun/"}>
                링크드인 {">"}
              </Link>
              <Link url={"https://medium.com/@hyeongjun"}>미디엄 {">"}</Link>
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
