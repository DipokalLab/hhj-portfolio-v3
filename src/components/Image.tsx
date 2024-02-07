import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

type ImageType = {
  url: string;
};

type GalleryType = {
  children?: any;
};

function ImageBox({ url }: ImageType) {
  return (
    <div
      css={css({
        flex: "1 1 400px",
        width: "100%",
        height: "300px",
        backgroundImage: `url(${url})`,
        borderRadius: "1rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    ></div>
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

export { ImageBox, ImageGallery };
