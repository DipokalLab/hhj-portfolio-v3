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
          imageUrl="/public/images/archery-01.jpg"
        >
          <ProjectBody>
            <div>
              <Title>프로젝트 소개</Title>
              <Description>
                심심할때 플레이 하기 좋은 웹 게임을 개발하기 위해 만들었습니다.
                ThreeJS와 React로 개발했으며 실제 DAU수치를 파악하면서 마케팅
                효율을 측정해보기도 했습니다.
              </Description>
            </div>

            <div>
              <Title>관련 블로그</Title>
              <ProjectPost
                title="게임엔진 없이 게임을 만들었다"
                description="Velog 게시글"
                url="https://velog.io/@dipokalhhj/%EB%82%98%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B2%8C%EC%9E%84%EC%97%94%EC%A7%84-%EC%97%86%EC%9D%B4-%EA%B2%8C%EC%9E%84%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%82%98"
                date="2023-09-21"
              ></ProjectPost>
            </div>

            <div>
              <Title>스크린샷</Title>
              <ImageGallery>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/archery-01.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/archery-02.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/archery-03.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/archery-04.jpg"}
                ></ImageBox>
              </ImageGallery>
            </div>

            <div>
              <Title>기타 정보</Title>
              <Description>
                <b css={css({ color: "#000000" })}>개발 일자 : 2023년 9월</b>
              </Description>
            </div>

            <div>
              <Title>기술스택</Title>
              <Description>
                <b css={css({ color: "#000000" })}>ThreeJS</b> 3D 라이브러리
                입니다. 웹상에서 3차원 물체를 표현하는데 있어 ThreeJS를
                사용하는게 가장 효율적입니다. 다른 대안으로는 WebGL이 있으나
                NativeAPI라 문법이 추상적이고 개발 기간이 오래 걸린다는 단점이
                있습니다. 또 다른 대안인 React-three fiber의 경우 지원 하지 않는
                문법도 존재하고 확장성 문제가 존재합니다.
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>React</b> UI를 구성하기 위해
                사용했습니다.
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>Redux</b> ThreeJS Class와
                React Components간 상태 관리를 위해 사용했습니다.{" "}
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>i18n</b> 프로덕트 헌트 출시를
                위해 영어 번역을 추가했습니다. 랜딩페이지에서 영어 한국어를
                선택할 수 있는 옵션 버튼으로 언어를 전환할 수 있습니다.
              </Description>
            </div>

            <div>
              <Title>동작 링크</Title>
              <Button
                onClick={() => (location.href = "https://archery.devent.kr/")}
              >
                archery.devent.kr
              </Button>
            </div>
          </ProjectBody>
        </ProjectItem>

        <ProjectItem
          title={t(`ns:frontendProject.nugget.title`)}
          subtitle={t(`ns:frontendProject.nugget.description`)}
          tags={["#CE", "#LitJS", "FFmpeg", "Electron"]}
          imageUrl="/public/images/nugget-01.jpg"
        >
          <ProjectBody>
            <div>
              <Title>프로젝트 소개</Title>
              <Description>
                영상편집 프로그램 입니다. 기본적인 컷편집, 애니메이션 시스템,
                익스텐션을 통한 외부 API 불러오기를 제공하고 ffmpeg를 통해
                랜더링이 가능하도록 구성했습니다. 클라우드플레어 R2를 이용해
                ffmpeg바이너리를 다운로드받도록 설계했으며 코드사인 인증서를
                통한 파일의 위 변조를 방지하기도 했습니다.
              </Description>
              <Description>
                제가 만든 소프트웨어 중에서 복잡도가 가장 높은 소프트웨어 중
                하나입니다. 2번의 전체 리팩토링을 거쳤으며, litjs와 Custom
                Element를 적절하게 배치하여 컴포넌트간 의존도를 줄이는 작업을
                수행했습니다. TypeScript를 제 개인프로젝트에 적용하기 전이라
                프론트엔드 코드는 JS로 백엔드(랜더링) 코드는 TypeScript로
                개발되었습니다.
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
                  url={"/public/images/nugget-01.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/nugget-02.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/nugget-03.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/nugget-04.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/nugget-05.jpg"}
                ></ImageBox>
              </ImageGallery>
            </div>

            <div>
              <Title>기술스택</Title>
              <Description>
                <b css={css({ color: "#000000" })}>CustomElement & LitJS</b>{" "}
                DOM을 수정하는데 있어 React보다 좋은 성능을 보여주기 때문에
                사용했습니다. 미디어 편집의 특성상 60fps로 재생되고 동작해야
                하기 때문에 DOM성능이 절대적입니다.{" "}
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>FFmpeg</b> 영상을 랜더링하기
                위해 사용했습니다. Electron에서 클라우드플레어 R2로 호스팅한
                FFmpeg를 받아온 다음 특정 디렉토리에 저장하고 후에 커맨트 라인을
                호출하는 방식으로 사용됩니다.
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
              <Title>깃허브 링크</Title>
              <Button
                onClick={() =>
                  (location.href =
                    "https://github.com/Team-DeVent/nugget-release")
                }
              >
                https://github.com/Team-DeVent/nugget-release
              </Button>
            </div>
          </ProjectBody>
        </ProjectItem>

        <ProjectItem
          title="Inlander"
          subtitle="UX와 디자인을 고려해 개발한 영어 학습 앱 입니다."
          tags={["#TypeScript", "#Emotion", "#TypeORM"]}
          imageUrl="/public/images/inlander-01.jpg"
          isShow={isShowMore}
        >
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
                  url={"/public/images/inlander-01.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/inlander-02.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/inlander-03.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/inlander-04.jpg"}
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
                <b css={css({ color: "#000000" })}>React & TypeScript</b> 제가
                가장 애용하는 스택입니다. 이 조합을 대체할 다른 기술을 발견하지
                못했습니다.
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>Emotion</b> Emotion, CSS in
                JS, Object Style을 주로 사용합니다. 확장성이 좋고 가장 CSS
                Native에 가까운 기술입니다.
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>TypeORM</b> 최근에
                PrismaORM으로 전환했지만, 이전까지는 TypeORM을 사용했습니다.
                가장 처음 배운 ORM이고 SQL구문을 설계하지 않고 추상적인
                오브젝트로만 제어할 수 있어 개발 효율성이 높아집니다.
              </Description>
            </div>
          </ProjectBody>
        </ProjectItem>

        <ProjectItem
          title="VR LightSaber"
          subtitle="WebVR 기술을 활용해서 날아오는 광선총을 광선검으로 튕깁니다."
          tags={["#ThreeJS", "#WebVR"]}
          imageUrl="/public/images/saber-02.jpg"
          isShow={isShowMore}
        >
          <ProjectBody>
            <div>
              <Title>프로젝트 소개</Title>
              <Description>
                ThreeJS WebXR 기술을 활용해 광선검을 휘두르는 게임입니다.
                60fps를 유지하기 위해 OBB 충돌과 오브젝트 최적화를 진행했으며
                오픈소스로 공개했습니다.
              </Description>
            </div>

            <div>
              <Title>관련 블로그</Title>
              <ProjectPost
                title="WebXR로 웹 VR 게임 만들기"
                description="Velog 게시글"
                url="https://velog.io/@dipokalhhj/WebXR-VR"
                date="2023-10-31"
              ></ProjectPost>
            </div>

            <div>
              <Title>스크린샷</Title>
              <ImageGallery>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/saber-01.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/saber-02.jpg"}
                ></ImageBox>
              </ImageGallery>
            </div>

            <div>
              <Title>기술스택</Title>
              <Description>
                <b css={css({ color: "#000000" })}>ThreeJS & WebXR</b> 어렵지
                않은 거의 필수적인 스택입니다. 이걸 사용하지 않고 WebGL과 Native
                WebXR API만을 가지고 개발하면 어렵습니다.
              </Description>
            </div>

            <div>
              <Title>기타 정보</Title>
              <Description>
                <b css={css({ color: "#000000" })}>개발 일자 : 2023년 11월</b>
              </Description>
            </div>

            <div>
              <Title>깃허브 링크</Title>
              <Button
                onClick={() =>
                  (location.href =
                    "https://github.com/Public-Game-Entity/vr-lightsaber")
                }
              >
                https://github.com/Public-Game-Entity/vr-lightsaber
              </Button>
            </div>

            <div>
              <Title>동작 링크</Title>
              <Button
                onClick={() => (location.href = "https://saber.devent.kr/")}
              >
                https://saber.devent.kr/
              </Button>
            </div>
          </ProjectBody>
        </ProjectItem>

        <ProjectItem
          title="세기의 지성인"
          subtitle="d3.js와 React를 통해 역사속 지성인을 탐구해봅니다."
          tags={["#d3.js", "#React"]}
          imageUrl="/public/images/intelli-01.jpg"
          isShow={isShowMore}
        >
          <ProjectBody>
            <div>
              <Title>프로젝트 소개</Title>
              <Description>
                하루만에 배운 d3js 라이브러리를 바탕으로 개발한 "세기의 지성인"
                사이트 입니다. 역사속 지성인들을 탐구해보고 각각의 사람들이 다른
                사람들에게 어떠한 영향을 미쳤는지 과학사/음악사/미술사/철학사등
                여러 역사적 사료에 기반하여 개발되었습니다. 사실상 개발은 3일
                안에 끝났지만, 자료수집이 오래걸리는 프로젝트 입니다.
              </Description>
            </div>

            <div>
              <Title>스크린샷</Title>
              <ImageGallery>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/intelli-01.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/intelli-02.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/intelli-03.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/intelli-04.jpg"}
                ></ImageBox>
              </ImageGallery>
            </div>

            <div>
              <Title>기타 정보</Title>
              <Description>
                <b css={css({ color: "#000000" })}>
                  개발 일자 : 2024년 1월 3일간
                </b>
              </Description>
            </div>

            <div>
              <Title>기술스택</Title>
              <Description>
                <b css={css({ color: "#000000" })}>d3.js</b> Canvas API로 구현할
                수도 있으나 단기간내에 개발하고자 했기 때문에 상용 라이브러리를
                사용했습니다. 저수준 API로 확장이 용이하고 레퍼런스도 다양하게
                존재하기 때문에 개발하는데 큰 어려움은 없었습니다. 공식문서에
                적혀있는 메소드를 보고 개발을 진행했습니다.
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>React CRA</b> CRA로 배포한 첫
                번쨰 앱 입니다. 그동안 자체적으로 보일러프로젝트를 구성해
                배포했으나 사실 별 차이가 없다는 걸 깨닫고는 바로 CRA로
                넘어갔습니다.
              </Description>
            </div>

            <div>
              <Title>동작 링크</Title>
              <Button
                onClick={() =>
                  (location.href = "https://intelligence-list.devent.kr/")
                }
              >
                https://intelligence-list.devent.kr/
              </Button>
            </div>
          </ProjectBody>
        </ProjectItem>

        <ProjectItem
          title="Maskers"
          subtitle="모두가 버튜버가 된다. 웹에서 동작하는 버튜버 플랫폼."
          tags={["#mediapipe", "#On Device AI", "#threejs"]}
          imageUrl="/public/images/maskers-10.jpg"
          isShow={isShowMore}
        >
          <ProjectBody>
            <div>
              <Title>프로젝트 소개</Title>
              <Description>
                모두가 버튜버가 된다. 웹 브라우저에서 빠르고 안정적으로 동작하는
                버튜버 플랫폼 입니다. 기존 버튜버 앱이 가진 고질적인 접근성
                문제와 보편성 문제를 해결했으며 누구나 웹브라우저만 있으면
                스마트폰이든 PC든 버튜버를 체험해볼 수 있습니다. WebRTC,
                ThreeJS, 최적화, On Device AI등 현재 최신 기술을 사용해서 웹
                환경에서도 끊김없이 페이셜 트래킹을 수행할 수 있습니다.
                <br />총 2가지 버전이 있으며 flat 3d Face Mode와 버튜버 스타일
                2D 모드가 존재합니다. 사용자의 기호에 따라 선택할 수 있으며
                버튜버에 거부감이 드는 분들은 기존 Face Mode를 사용하면 되도록
                설계했습니다.
              </Description>
            </div>

            <div>
              <Title>스크린샷</Title>
              <ImageGallery>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-01.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-02.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-03.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-04.jpg"}
                ></ImageBox>
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-05.jpg"}
                ></ImageBox>{" "}
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-06.jpg"}
                ></ImageBox>{" "}
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-07.jpg"}
                ></ImageBox>{" "}
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-08.jpg"}
                ></ImageBox>{" "}
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-09.jpg"}
                ></ImageBox>{" "}
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-10.jpg"}
                ></ImageBox>{" "}
                <ImageBox
                  isAvailableZoom={true}
                  url={"/public/images/maskers-11.jpg"}
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
                <b css={css({ color: "#000000" })}>ThreeJS</b>
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>React</b>
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>WebRTC</b>
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>Mediapipe</b>
              </Description>
              <Description>
                <b css={css({ color: "#000000" })}>Socket.io</b>
              </Description>
            </div>

            <div>
              <Title>동작 링크</Title>
              <Button onClick={() => (location.href = "https://maskers.app")}>
                https://maskers.app
              </Button>
            </div>
          </ProjectBody>
        </ProjectItem>
      </div>

      {!isShowMore && (
        <Button onClick={handleClickMore}>{t(`ns:common.more`)}</Button>
      )}
    </div>
  );
}

export { FrondendPage };
