import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

type BoxType = {
  onClick?: any;
  children: any;
  isDisplay?: boolean;
  isBorder?: boolean;
};

function Box({
  onClick,
  children,
  isDisplay = true,
  isBorder = true,
}: BoxType) {
  return (
    <div
      onClick={onClick}
      css={css({
        border: isBorder ? "0.1rem solid #F0F0F4" : "none",
        borderRadius: "1rem",
        width: "100%",
        display: isDisplay ? "" : "none",
      })}
    >
      {children}
    </div>
  );
}

export { Box };
