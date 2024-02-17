import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { Button } from "./common/Button";

type ImageType = {
  url: string;
  isAvailableZoom?: boolean;
};

type GalleryType = {
  children?: any;
};

function ImageBox({ url, isAvailableZoom = false }: ImageType) {
  const [isZoom, setIsZoom] = useState(false);
  const handleClickImage = () => {
    if (isAvailableZoom) {
      setIsZoom(true);
    }
  };
  return (
    <>
      <div
        onClick={handleClickImage}
        css={css({
          flex: "1 1 400px",
          width: "100%",
          height: "300px",
          backgroundImage: `url(${url})`,
          borderRadius: "1rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: isAvailableZoom ? "pointer" : "default",
        })}
      ></div>
      <ImageModal isOpen={isZoom} onClose={() => setIsZoom(false)}>
        <img
          src={url}
          css={css({
            objectFit: "scale-down",
            maxWidth: "90vw",
            maxHeight: "90vh",
          })}
          alt=""
        />
      </ImageModal>
    </>
  );
}

function ImageGallery({ children }: GalleryType) {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        flexWrap: "wrap",
        "@media(min-width: 600px)": {
          flexDirection: "row",
        },
      })}
    >
      {children}
    </div>
  );
}

type ImageModalType = {
  children?: any;
  isOpen: boolean;
  onClose?: any;
};

function ImageModal({ children, isOpen = false, onClose }: ImageModalType) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      css={css({
        position: "fixed",
        zIndex: "3000",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: isOpen ? "flex" : "none",
        flexDirection: "column",

        backgroundColor: "#ffffff",
        transition: "0.5s",
        overflowY: "scroll",
      })}
    >
      <div
        css={css({
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          scrollbarWidth: "none",
        })}
      >
        {children}
      </div>

      <div
        css={css({
          display: "flex",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        })}
      >
        <div
          css={css({
            width: "100%",
            padding: "2rem",
          })}
        >
          <Button onClick={handleClose}>닫기</Button>
        </div>
      </div>
    </div>
  );
}

export { ImageBox, ImageGallery };
