import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import {
  ProjectBody,
  ProjectItem,
  ProjectPost,
} from "../../components/Project";
import { ImageBox, ImageGallery } from "../../components/Image";
import { Button } from "../../components/common/Button";
import { Description, Title } from "../../components/common/Text";
import { t } from "i18next";

function FrondendPage() {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleClickMore = () => {
    setIsShowMore(true);
  };
  return (
    <div css={css({})}>
      <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}>
        {" "}
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
        <ProjectItem
          title={t(`ns:frontendProject.archery.title`)}
          subtitle={t(`ns:frontendProject.archery.description`)}
          tags={["#ThreeJS", "#React"]}
          imageUrl="/images/archery-01.jpg"
          clickTo="/project/archery"
        ></ProjectItem>

        <ProjectItem
          title={t(`ns:frontendProject.nugget.title`)}
          subtitle={t(`ns:frontendProject.nugget.description`)}
          tags={["#CE", "#LitJS", "FFmpeg", "Electron"]}
          imageUrl="/images/nugget-01.jpg"
          clickTo="/project/nugget"
        ></ProjectItem>

        <ProjectItem
          title="Inlander"
          subtitle="UX와 디자인을 고려해 개발한 영어 학습 앱 입니다."
          tags={["#TypeScript", "#Emotion", "#TypeORM"]}
          imageUrl="/images/inlander-01.jpg"
          clickTo="/project/inlander"
        ></ProjectItem>

        <ProjectItem
          title="VR LightSaber"
          subtitle="WebVR 기술을 활용해서 날아오는 광선총을 광선검으로 튕깁니다."
          tags={["#ThreeJS", "#WebVR"]}
          imageUrl="/images/saber-02.jpg"
          isShow={isShowMore}
          clickTo="/project/lightsaber"
        ></ProjectItem>

        <ProjectItem
          title="세기의 지성인"
          subtitle="d3.js와 React를 통해 역사속 지성인을 탐구해봅니다."
          tags={["#d3.js", "#React"]}
          imageUrl="/images/intelli-01.jpg"
          isShow={isShowMore}
          clickTo="/project/intelligence"
        ></ProjectItem>

        <ProjectItem
          title="Maskers"
          subtitle="모두가 버튜버가 된다. 웹에서 동작하는 버튜버 플랫폼."
          tags={["#mediapipe", "#On Device AI", "#threejs"]}
          imageUrl="/images/maskers-05.jpg"
          isShow={isShowMore}
          clickTo="/project/maskers"
        ></ProjectItem>

        <ProjectItem
          title="디자인 시스템 v2"
          subtitle="React Design System"
          tags={["#Emotion", "#React", "#Design"]}
          imageUrl="/images/dds-01.jpg"
          isShow={isShowMore}
          clickTo="/project/designsystem"
        ></ProjectItem>
      </div>

      {!isShowMore && (
        <Button onClick={handleClickMore}>{t(`ns:common.more`)}</Button>
      )}
    </div>
  );
}

export { FrondendPage };
