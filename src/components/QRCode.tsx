import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { css } from "@emotion/react";

function LinkedInQRcode() {
  const canvasRef = useRef<any>();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      "https://www.linkedin.com/in/huhhyeongjun/",
      function (error) {
        if (error) console.error(error);
      }
    );
  }, []);

  return (
    <canvas
      css={css({
        border: "0.1rem solid #F0F0F4",
        borderRadius: "0.5rem",
        width: "260px !important",
        height: "260px !important",
      })}
      ref={canvasRef}
    ></canvas>
  );
}

export { LinkedInQRcode };
