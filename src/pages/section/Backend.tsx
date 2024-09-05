import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Box } from "../../components/common/Box";
import { Badge } from "../../components/common/Badge";
import { Modal } from "../../components/common/Modal";
import {
  ProjectBody,
  ProjectItem,
  ProjectPost,
} from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Description, Title } from "../../components/common/Text";
import { t } from "i18next";

function BackendPage() {
  return (
    <div css={css({})}>
      <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}>
        {" "}
        <b css={css({ fontWeight: 500 })}>{t(`ns:backendProject.title`)}</b>
        {t(`ns:backendProject.titleNext`)}
      </p>
      <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>
        {t(`ns:backendProject.description`)}
      </p>

      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "2rem",
        })}
      >
        <ProjectItem
          title="OCR API"
          subtitle="FastAPI를 사용해서 이미지 입력을 받고 이미지에 포함된 텍스트 정보를 반환하는 API를 설계했습니다."
          tags={["#FastAPI", "#Python", "#Docker"]}
          isImage={false}
          clickTo="/project/ocr"
        >
          <ProjectBody>
            <div>
              <Title>프로젝트 소개</Title>
              <Description>
                Scrap 글귀 공유 플랫폼에 포함된 API 입니다. 테서렉트py로
                진행했으며 파일 업로드 파트는 FastAPI로 빠르게 구현했습니다.
              </Description>
            </div>
          </ProjectBody>
        </ProjectItem>

        <ProjectItem
          title="Docker 배포 시스템"
          subtitle="nginx & docker & GoCD를 기반으로 구성된 자동 배포 시스템(CD)입니다. 실제 홈서버에서 가동되고 있습니다."
          tags={["#Docker", "#Nginx", "#GoCD"]}
          isImage={false}
          clickTo="/project/docker"
        ></ProjectItem>
      </div>
    </div>
  );
}

export { BackendPage };
