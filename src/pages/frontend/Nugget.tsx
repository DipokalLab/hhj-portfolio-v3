import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";
import { Column } from "../../components/common/Column";

export function FrontendNugget() {
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
            영상편집 프로그램 입니다. 기본적인 컷편집, 애니메이션 시스템,
            익스텐션을 통한 외부 API 불러오기를 제공하고 ffmpeg를 통해 랜더링이
            가능하도록 구성했습니다. 클라우드플레어 R2를 이용해 ffmpeg바이너리를
            다운로드받도록 설계했으며 코드사인 인증서를 통한 파일의 위 변조를
            방지하기도 했습니다.
          </Description>
          <Description>
            제가 만든 소프트웨어 중에서 복잡도가 가장 높은 소프트웨어 중
            하나입니다. 2번의 전체 리팩토링을 거쳤으며, litjs와 Custom Element를
            적절하게 배치하여 컴포넌트간 의존도를 줄이는 작업을 수행했습니다.
            TypeScript를 제 개인프로젝트에 적용하기 전이라 프론트엔드 코드는
            JS로 백엔드(랜더링) 코드는 TypeScript로 개발되었습니다.
          </Description>
          <Description>
            사실상 코드사인 인증서가 1년동안 유지되기 때문에, 서비스는
            종료되었습니다.{" "}
          </Description>
        </div>

        <div>
          <Title>스크린샷</Title>
          <ImageGallery>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/nugget-01.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/nugget-02.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/nugget-03.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/nugget-04.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/nugget-05.jpg"}
            ></ImageBox>
          </ImageGallery>
        </div>

        <div>
          <Title>기술스택</Title>
          <Description>
            <b css={css({ color: "#000000" })}>CustomElement & LitJS</b> DOM을
            수정하는데 있어 React보다 좋은 성능을 보여주기 때문에 사용했습니다.
            미디어 편집의 특성상 60fps로 재생되고 동작해야 하기 때문에 DOM성능이
            절대적입니다.{" "}
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>FFmpeg</b> 영상을 랜더링하기 위해
            사용했습니다. Electron에서 클라우드플레어 R2로 호스팅한 FFmpeg를
            받아온 다음 특정 디렉토리에 저장하고 후에 커맨트 라인을 호출하는
            방식으로 사용됩니다.
          </Description>
        </div>

        <div>
          <Title>기타 정보</Title>
          <Description>
            <b css={css({ color: "#000000" })}>
              개발 일자 : 2022년 12월 ~ 2023년 6월
            </b>
          </Description>
        </div>

        <div>
          <Title>유튜브 재생목록</Title>
          <Button
            onClick={() =>
              (location.href =
                "https://www.youtube.com/playlist?list=PLJ8NwEH2yOlnNxdw0dDm-S2inERUV_SlT")
            }
          >
            https://www.youtube.com/playlist?list=PLJ8NwEH2yOlnNxdw0dDm-S2inERUV_SlT
          </Button>
        </div>

        <div>
          <Title>깃허브 링크</Title>
          <Column>
            <Button
              onClick={() =>
                (location.href =
                  "https://github.com/Team-DeVent/nugget-release")
              }
            >
              https://github.com/Team-DeVent/nugget-release
            </Button>

            <Button
              onClick={() =>
                (location.href = "https://github.com/cartesiancs/nugget-app")
              }
            >
              https://github.com/cartesiancs/nugget-app
            </Button>
          </Column>
        </div>
      </ProjectBody>
    </Container>
  );
}
