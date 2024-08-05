import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";

export function FrontendInlander() {
  return (
    <Container>
      <ProjectBody>
        <div>
          <Title>프로젝트 소개</Title>
          <Description>디자인을 중심에 둔 영어 학습 앱 입니다.</Description>
        </div>

        <div
          css={css({
            width: "100%",
          })}
        >
          <Title>스크린샷</Title>
          <ImageGallery>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/inlander-01.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/inlander-02.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/inlander-03.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/inlander-04.jpg"}
            ></ImageBox>
          </ImageGallery>
        </div>

        <div>
          <Title>기타 정보</Title>
          <Description>
            <b css={css({ color: "#000000" })}>개발 일자 : 2023년 12월</b>
          </Description>
        </div>

        <div>
          <Title>기술스택</Title>
          <Description>
            <b css={css({ color: "#000000" })}>React & TypeScript</b> 제가 가장
            애용하는 스택입니다. 이 조합을 대체할 다른 기술을 발견하지
            못했습니다.
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>Emotion</b> Emotion, CSS in JS,
            Object Style을 주로 사용합니다. 확장성이 좋고 가장 CSS Native에
            가까운 기술입니다.
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>TypeORM</b> 최근에 PrismaORM으로
            전환했지만, 이전까지는 TypeORM을 사용했습니다. 가장 처음 배운
            ORM이고 SQL구문을 설계하지 않고 추상적인 오브젝트로만 제어할 수 있어
            개발 효율성이 높아집니다.
          </Description>
        </div>
      </ProjectBody>
    </Container>
  );
}
