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
            종료되었습니다.
          </Description>
          <Description>
            새로 리팩토링 하고 있습니다. 고등학생때 학교 끝나고 나서 3시간 정도
            개발할 시간이 있었는데 그때 개발한 프로그램입니다. 제한적인 시간과
            리소스, 물어볼 만한 사람도 없었기에 사실상 독학으로 개발했습니다만,
            저에게는 레딧과 깃허브 이슈라는 거대한 문제해결의 장이 있었음에도
            물어볼 생각을 못했다는 사실에 지금도 놀라곤 합니다. 리팩토링을 함에
            있어 지난번 electron ipc에 TypeScript를 적용해 1차 리팩토링을 끝냈고
            ui 부분을 litjs로 변경해 2차 리팩토링을 끝냈습니다. 3차 리팩토링은
            전체 코드에 TypeScript 적용과 더불어 상태관리 도입, ce의 의존성 분리
            및 litjs 마이그레이션, canvas로 핸들링을 구현하려고 합니다.
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

          <Description>
            <b css={css({ color: "#000000" })}>3차 리팩토링 : 2024년 10월 ~</b>
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
              https://github.com/Team-DeVent/nugget-release (deprecated)
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
