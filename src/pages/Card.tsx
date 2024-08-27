import { css } from "@emotion/react";
import { LinkedInQRcode } from "../components/QRCode";

export function Card() {
  return (
    <div
      css={css({
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      })}
    >
      <CardBody>
        <CardHead>
          <Title>허형준</Title>
          <SubTitle>프론트엔드 개발자</SubTitle>
        </CardHead>

        <LinkedInQRcode></LinkedInQRcode>
      </CardBody>
    </div>
  );
}

function CardBody({ children }: { children?: any }) {
  return (
    <div
      css={css({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        borderRadius: "0.5rem",
        border: "0.1rem solid #F0F0F4",
        padding: "1rem",
        gap: "1.25rem",
      })}
    >
      {children}
    </div>
  );
}

function CardHead({ children }: { children?: any }) {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      })}
    >
      {children}
    </div>
  );
}

function Title({ children }: { children?: any }) {
  return (
    <h2
      css={css({
        fontSize: "1.85rem",
        fontWeight: "600",
        margin: 0,
      })}
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children?: any }) {
  return (
    <h3
      css={css({
        fontSize: "1.25rem",
        fontWeight: "300",
        margin: 0,
        color: "#64656e",
      })}
    >
      {children}
    </h3>
  );
}
