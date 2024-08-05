import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";

export function FrontendLightsaber() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ProjectBody>
        <div>
          <Title>프로젝트 소개</Title>
          <Description>
            ThreeJS WebXR 기술을 활용해 광선검을 휘두르는 게임입니다. 60fps를
            유지하기 위해 OBB 충돌과 오브젝트 최적화를 진행했으며 오픈소스로
            공개했습니다.
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
              url={"/images/saber-01.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/saber-02.jpg"}
            ></ImageBox>
          </ImageGallery>
        </div>

        <div>
          <Title>기술스택</Title>
          <Description>
            <b css={css({ color: "#000000" })}>ThreeJS & WebXR</b> 어렵지 않은
            거의 필수적인 스택입니다. 이걸 사용하지 않고 WebGL과 Native WebXR
            API만을 가지고 개발하면 어렵습니다.
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
          <Button onClick={() => (location.href = "https://saber.devent.kr/")}>
            https://saber.devent.kr/
          </Button>
        </div>
      </ProjectBody>
    </Container>
  );
}
