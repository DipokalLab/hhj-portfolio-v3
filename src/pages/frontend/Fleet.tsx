import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function FrontendFleet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Nav enableBack={true} />

      <ProjectBody>
        <div>
          <Title>프로젝트 소개</Title>
          <Description>
            그래픽 디자이너를 위한 3D 포트폴리오 서비스 입니다. Three.js R3F를
            사용했고 UX, UI와 고객에 집중했습니다만 그냥 만들어보고 싶어서 만든
            프로젝트 입니다. 전작인 마스커스 대비 굉장히 쉬운 설계와 간단함으로
            무장해서인지 빠르게 개발하고 배포할 수 있었습니다.
          </Description>
        </div>

        <div>
          <Title>스크린샷</Title>
          <ImageGallery>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/fleet-01.jpg"}
            ></ImageBox>
          </ImageGallery>
        </div>

        <div>
          <Title>기타 정보</Title>
          <Description>
            <b css={css({ color: "#000000" })}>개발 일자 : 2024년 8월 ~</b>
          </Description>
        </div>

        <div>
          <Title>주요 기술스택</Title>
          <Description>
            <b css={css({ color: "#000000" })}>R3F</b> 필수 스택
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>
              React/TypeScript/Emotioncss/zustand...
            </b>{" "}
            필수 스택.
          </Description>
        </div>

        <div>
          <Title>기타 정보</Title>
          <Description>아직 공개하지 않았습니다.</Description>
        </div>
      </ProjectBody>
    </Container>
  );
}
