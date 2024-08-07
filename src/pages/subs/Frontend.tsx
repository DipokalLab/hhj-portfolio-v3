import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import {
  ProjectBody,
  ProjectFixedItem,
  ProjectItem,
  ProjectPost,
} from "../../components/Project";
import { ImageBox, ImageGallery } from "../../components/Image";
import { Button } from "../../components/common/Button";
import { Description, Title } from "../../components/common/Text";
import i18n from "../../i18n";
import { t } from "i18next";
import { usePageStore } from "../../store";

function FrondendPage() {
  const isFrontendOpenMore = usePageStore(
    (state: any) => state.isFrontendOpenMore
  );
  const setFrontendOpenMore = usePageStore(
    (state: any) => state.setFrontendOpenMore
  );

  const handleClickMore = () => {
    setFrontendOpenMore(true);
  };

  return (
    <div css={css({})}>
      <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}>
        <b css={css({ fontWeight: 500 })}>{t(`ns:frontendProject.title`)}</b>
        {t(`ns:frontendProject.titleNext`)}
      </p>
      <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>
        {t(`ns:frontendProject.description`)}
      </p>

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
        <ProjectFixedItem
          title={t(`ns:frontendProject.archery.title`)}
          subtitle={t(`ns:frontendProject.archery.description`)}
          tags={["#ThreeJS", "#React"]}
          imageUrl="/images/archery-01.jpg"
          clickTo="/project/archery"
        ></ProjectFixedItem>

        <ProjectFixedItem
          title={t(`ns:frontendProject.nugget.title`)}
          subtitle={t(`ns:frontendProject.nugget.description`)}
          tags={["#CE", "#LitJS", "FFmpeg", "Electron"]}
          imageUrl="/images/nugget-01.jpg"
          clickTo="/project/nugget"
        ></ProjectFixedItem>

        <ProjectFixedItem
          title={t(`ns:frontendProject.maskers.title`)}
          subtitle={t(`ns:frontendProject.maskers.description`)}
          tags={["#mediapipe", "#On Device AI", "#threejs"]}
          imageUrl="/images/maskers-05.jpg"
          clickTo="/project/maskers"
        ></ProjectFixedItem>

        <ProjectFixedItem
          title="Inlander"
          subtitle="UX와 디자인을 고려해 개발한 영어 학습 앱 입니다."
          tags={["#TypeScript", "#Emotion", "#TypeORM"]}
          imageUrl="/images/inlander-01.jpg"
          isShow={isFrontendOpenMore}
          clickTo="/project/inlander"
        ></ProjectFixedItem>

        <ProjectFixedItem
          title={t(`ns:frontendProject.lightsaber.title`)}
          subtitle={t(`ns:frontendProject.lightsaber.description`)}
          tags={["#ThreeJS", "#WebVR"]}
          imageUrl="/images/saber-02.jpg"
          isShow={isFrontendOpenMore}
          clickTo="/project/lightsaber"
        ></ProjectFixedItem>

        <ProjectFixedItem
          title="세기의 지성인"
          subtitle="d3.js와 React를 통해 역사속 지성인을 탐구해봅니다."
          tags={["#d3.js", "#React"]}
          imageUrl="/images/intelli-01.jpg"
          isShow={isFrontendOpenMore}
          clickTo="/project/intelligence"
        ></ProjectFixedItem>

        <ProjectFixedItem
          title="디자인 시스템 v2"
          subtitle="React Design System"
          tags={["#Emotion", "#React", "#Design"]}
          imageUrl="/images/dds-01.jpg"
          isShow={isFrontendOpenMore}
          clickTo="/project/designsystem"
        ></ProjectFixedItem>
      </div>

      {!isFrontendOpenMore && (
        <Button onClick={handleClickMore}>{t(`ns:common.more`)}</Button>
      )}
    </div>
  );
}

export { FrondendPage };
