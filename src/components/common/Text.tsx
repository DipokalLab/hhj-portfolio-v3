import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

type TextType = {
  children?: any;
};

function Title({ children }: TextType) {
  return (
    <p
      css={css({
        fontWeight: "300",
        fontSize: "1.3rem",
        margin: 0,
        marginBottom: "1rem",
      })}
    >
      {" "}
      <b css={css({ fontWeight: 500 })}>{children}</b>
    </p>
  );
}

function Description({ children }: TextType) {
  return (
    <p
      css={css({
        fontWeight: "500",
        fontSize: "1rem",
        margin: 0,
        color: "#797a85",
        marginBottom: "0.8rem",
      })}
    >
      {children}
    </p>
  );
}

function Bold({ children }: { children: any }) {
  return <b css={css({ fontWeight: 500 })}>{children}</b>;
}

export { Title, Description, Bold };
