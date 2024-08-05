import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";

export function FrontendArchery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <div
        css={css({
          padding: "1rem",
        })}
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
                url={"/images/archery-01.jpg"}
              ></ImageBox>
              <ImageBox
                isAvailableZoom={true}
                url={"/images/archery-02.jpg"}
              ></ImageBox>
              <ImageBox
                isAvailableZoom={true}
                url={"/images/archery-03.jpg"}
              ></ImageBox>
              <ImageBox
                isAvailableZoom={true}
                url={"/images/archery-04.jpg"}
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
              입니다. 웹상에서 3차원 물체를 표현하는데 있어 ThreeJS를 사용하는게
              가장 효율적입니다. 다른 대안으로는 WebGL이 있으나 NativeAPI라
              문법이 추상적이고 개발 기간이 오래 걸린다는 단점이 있습니다. 또
              다른 대안인 React-three fiber의 경우 지원 하지 않는 문법도
              존재하고 확장성 문제가 존재합니다.
            </Description>
            <Description>
              <b css={css({ color: "#000000" })}>React</b> UI를 구성하기 위해
              사용했습니다.
            </Description>
            <Description>
              <b css={css({ color: "#000000" })}>Redux</b> ThreeJS Class와 React
              Components간 상태 관리를 위해 사용했습니다.{" "}
            </Description>
            <Description>
              <b css={css({ color: "#000000" })}>i18n</b> 프로덕트 헌트 출시를
              위해 영어 번역을 추가했습니다. 랜딩페이지에서 영어 한국어를 선택할
              수 있는 옵션 버튼으로 언어를 전환할 수 있습니다.
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
      </div>
    </Container>
  );
}
