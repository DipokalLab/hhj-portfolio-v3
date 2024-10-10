import { css } from "@emotion/react";
import { Title } from "../components/common/Text";
import { Button } from "../components/common/Button";

export function NotFound() {
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
      <Title>NotFound</Title>
      <Button onClick={() => (location.href = "/")}>Home</Button>
    </div>
  );
}
