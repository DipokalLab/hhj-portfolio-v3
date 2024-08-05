import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";

export function FrontendMaskers() {
  return (
    <Container>
      <ProjectBody>
        <div>
          <Title>프로젝트 소개</Title>
          <Description>
            모두가 버튜버가 된다. 웹 브라우저에서 빠르고 안정적으로 동작하는
            버튜버 플랫폼 입니다. 기존 버튜버 앱이 가진 고질적인 접근성 문제와
            보편성 문제를 해결했으며 누구나 웹브라우저만 있으면 스마트폰이든
            PC든 버튜버를 체험해볼 수 있습니다. WebRTC, ThreeJS, 최적화, On
            Device AI등 현재 최신 기술을 사용해서 웹 환경에서도 끊김없이 페이셜
            트래킹을 수행할 수 있습니다.
            <br />총 2가지 버전이 있으며 flat 3d Face Mode와 버튜버 스타일 2D
            모드가 존재합니다. 사용자의 기호에 따라 선택할 수 있으며 버튜버에
            거부감이 드는 분들은 기존 Face Mode를 사용하면 되도록 설계했습니다.
          </Description>
        </div>

        <div>
          <Title>스크린샷</Title>
          <ImageGallery>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-01.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-02.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-03.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-04.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-05.jpg"}
            ></ImageBox>{" "}
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-06.jpg"}
            ></ImageBox>{" "}
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-07.jpg"}
            ></ImageBox>{" "}
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-08.jpg"}
            ></ImageBox>{" "}
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-09.jpg"}
            ></ImageBox>{" "}
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-10.jpg"}
            ></ImageBox>{" "}
            <ImageBox
              isAvailableZoom={true}
              url={"/images/maskers-11.jpg"}
            ></ImageBox>
          </ImageGallery>
        </div>

        <div>
          <Title>기타 정보</Title>
          <Description>
            <b css={css({ color: "#000000" })}>개발 일자 : 2024년 1월 ~</b>
          </Description>
        </div>

        <div>
          <Title>주요 기술스택</Title>
          <Description>
            <b css={css({ color: "#000000" })}>ThreeJS</b> 사실상 필수
            스택입니다. 웹에서 3D를 표현해주기 위해 사용되었습니다.
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>React</b> 필수 스택, 더 말
            안하겠습니다.
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>WebRTC</b> 모바일 환경에서 얻은
            페이셜 트래킹 랜드마크를 웹으로 보내주는 역할을 합니다. 누가 WebRTC
            제대로 쓰는게 어렵다고 하던데, 실시간 영상처리가 어려운거지 기술 그
            자체는 어렵지 않습니다. 막 대단한 기술이 아니라 가장 적합해서 쓴
            기술입니다.
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>Mediapipe</b> 웹에서 페이셜
            트래킹을 위한 JS기반 머신러닝 플랫폼 입니다. 구글에서 개발했고 고2때
            처음으로 알게 된 후 여러 프로젝트에서 요긴하게 써먹었습니다.
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>Socket.io</b> WebRTC 시그널링
            서버를 위해 필요합니다. 이거이거 사용자에게 구현을 맡긴다 식으로
            문서에 적혀있어서 상당히 불친절 했으나, 실시간 네트워킹에 관한
            지식이 있는 저에게는 껌입니다.
          </Description>
        </div>

        <div>
          <Title>동작 링크</Title>
          <Button onClick={() => (location.href = "https://maskers.app")}>
            https://maskers.app
          </Button>
        </div>
      </ProjectBody>
    </Container>
  );
}
