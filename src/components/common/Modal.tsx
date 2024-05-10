import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { IconButton } from "./Button";

type ModalType = {
  children?: any;
  isOpen: boolean;
  onClose?: any;
};

type CloseButtonType = {
  onClick?: any;
};

function Modal({ children, isOpen = false, onClose }: ModalType) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      css={css({
        position: "fixed",
        zIndex: "2000",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: isOpen ? "flex" : "none",
        backgroundColor: "#ffffff",
        transition: "0.5s",
        overflowY: "scroll",
        scrollbarWidth: "none",
      })}
    >
      <div
        css={css({
          padding: "2rem 2rem",
          width: "100%",
        })}
      >
        {children}
      </div>

      <IconButton onClick={handleClose} isDisplay={true}>
        close
      </IconButton>
    </div>
  );
}

export { Modal };
