import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";

export function FrontendDesignsystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ProjectBody>
        <div>
          <Title>프로젝트 소개</Title>
          <Description>
            디자인 시스템 입니다. 기존 디자인 시스템 버전 1을 만들면서 배운
            시행착오를 기반으로 새롭게 개발했습니다. 의존성을 적게 사용하고
            최대한 가볍게 코드를 유지하면서도 개성을 살렸습니다. 누가 봐도 made
            by hhj라고 인식하도록요.
          </Description>
          <Description>
            사실상 여러 프로젝트를 하면서 수 많은 컴포넌트를 개발했습니다.
            그때마다 새로 개발하는게 귀찮기도 하고 앞으로 토이 프로젝트 하면서
            디자인 시스템이 필요할텐데, 시간 절약을 위해서라도 꼭 필요했습니다.{" "}
            <b>Q: 근데 새로 기존에 있는거 쓰면 안되나요?</b> A: 안됩니다.
            누가봐도 개성이 없잖아요.
          </Description>
          <Description>
            사실 개발하는데 큰 이유를 두지는 않았고 심지어 오픈소스로 공개되어
            있어 누구나 자유롭게 사용할 수 있습니다. 추후에는 컴포넌트 여러개를
            더 추가해서 완벽한 디자인 시스템을 구성하려고 계획중입니다.
          </Description>
        </div>

        <div>
          <Title>스크린샷</Title>
          <ImageGallery>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/dds-01.jpg"}
            ></ImageBox>
          </ImageGallery>
        </div>

        <div>
          <Title>기타 정보</Title>
          <Description>
            <b css={css({ color: "#000000" })}>개발 일자 : 2024년 3월 ~</b>
          </Description>
        </div>

        <div>
          <Title>주요 기술스택</Title>
          <Description>
            <b css={css({ color: "#000000" })}>React</b> 필수 스택
          </Description>
          <Description>
            <b css={css({ color: "#000000" })}>Emotion</b> 필수 스택. 이 외에
            별다른 의존성은 없습니다.
          </Description>
        </div>

        <div>
          <Title>깃허브 링크</Title>
          <Button
            onClick={() =>
              (location.href =
                "https://github.com/DipokalLab/devent-design-system-v2")
            }
          >
            https://github.com/DipokalLab/devent-design-system-v2
          </Button>
        </div>

        <div>
          <Title>동작 링크</Title>
          <Button onClick={() => (location.href = "https://design.devent.kr/")}>
            https://design.devent.kr
          </Button>
        </div>
      </ProjectBody>
    </Container>
  );
}
