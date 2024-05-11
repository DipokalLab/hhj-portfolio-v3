import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Box } from "./common/Box";
import { Badge } from "./common/Badge";
import { Modal } from "./common/Modal";
import { ImageBox } from "./Image";

type ItemType = {
  title?: string;
  subtitle?: string;
  tags?: string[];
  children?: any;
  imageUrl?: string;
  isShow?: boolean;
  isImage?: boolean;
};

type PostType = {
  title?: string;
  description?: string;
  url: string;
  date?: string;
};

type BodyType = {
  children?: any;
};

function ProjectItem({
  title,
  subtitle,
  tags,
  imageUrl = "",
  children,
  isShow = true,
  isImage = true,
}: ItemType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      css={css({
        flex: isImage ? "1 1 300px" : "1",
        display: isShow ? "" : "none",
      })}
    >
      <Box isBorder={false}>
        <Modal onClose={handleClose} isOpen={isModalOpen}>
          {children}
        </Modal>

        <div
          onClick={handleClick}
          css={css({
            position: "relative",
            width: "100%",
            cursor: "pointer",
            transform: "translateY(0px)",
            transition: "0.4s",
            borderRadius: "1rem",
            border: "0.1rem solid #F0F0F4",

            ":hover": {
              transform: "translateY(-8px)",
              boxShadow: "rgba(147, 148, 158, 0.25) 0px 7px 40px",

              opacity: "100%",
            },
          })}
        >
          {imageUrl && <ImageBox url={imageUrl}></ImageBox>}
          <div
            css={css({
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "0",
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffff00",
              zIndex: "900",
              borderRadius: "1rem",
              transition: "0.1s",
              opacity: "0%",
              ":hover": {
                opacity: "100%",
              },
            })}
          ></div>

          <div
            css={css({
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              padding: "1rem",
            })}
          >
            <p css={css({ fontSize: "1.3rem", fontWeight: "500", margin: 0 })}>
              {title}
            </p>
            <p
              css={css({
                fontSize: "1rem",
                fontWeight: "300",
                color: "#797a85",
                margin: 0,
              })}
            >
              {subtitle}
            </p>
            <div
              css={css({ display: "flex", gap: "0.5rem", marginTop: "0.5rem" })}
            >
              {tags.map((tag) => (
                <Badge>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

function ProjectPost({ title, description, date, url }: PostType) {
  const handleClick = () => {
    location.href = url;
  };

  return (
    <Box onClick={handleClick}>
      <div
        css={css({
          padding: "2rem 1.6rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          cursor: "pointer",
        })}
      >
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            transition: "text-decoration-color 0.5s",
            textDecorationColor: "#ffffff",

            ":hover": {
              textDecoration: "underline 0.2rem",
              textDecorationColor: "#dcdce3",
            },
          })}
        >
          <p css={css({ fontSize: "1.3rem", fontWeight: "500", margin: 0 })}>
            {title}
          </p>
          <p
            css={css({
              fontSize: "1rem",
              fontWeight: "500",
              color: "#797a85",
              margin: 0,
              marginBottom: "0.6rem",
            })}
          >
            {description}
          </p>
        </div>

        <p
          css={css({
            fontSize: "0.8rem",
            fontWeight: "300",
            color: "#797a85",
            margin: 0,
          })}
        >
          {date}
        </p>
      </div>
    </Box>
  );
}

function ProjectBody({ children }: BodyType) {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "1rem 0",
      })}
    >
      {children}
    </div>
  );
}

export { ProjectItem, ProjectPost, ProjectBody };
