import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

function Container({ children }: any) {
  return (
    <div
      css={css({
        display: "flex",
        justifyContent: "center",
        width: "100%",
      })}
    >
      <div
        css={css({
          display: "flex",
          width: "100%",
          padding: "2.5rem 1rem",
          "@media(min-width: 1200px)": {
            maxWidth: "1200px",
          },
        })}
      >
        {children}
      </div>
    </div>
  );
}

export { Container };
