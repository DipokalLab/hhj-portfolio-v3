import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";

export function FrontendIntelligence() {
  return (
    <Container>
      <ProjectBody>
        <div>
          <Title>프로젝트 소개</Title>
          <Description>
            하루만에 배운 d3js 라이브러리를 바탕으로 개발한 "세기의 지성인"
            사이트 입니다. 역사속 지성인들을 탐구해보고 각각의 사람들이 다른
            사람들에게 어떠한 영향을 미쳤는지 과학사/음악사/미술사/철학사등 여러
            역사적 사료에 기반하여 개발되었습니다. 사실상 개발은 3일 안에
            끝났지만, 자료수집이 오래걸리는 프로젝트 입니다.
          </Description>
        </div>

        <div>
          <Title>스크린샷</Title>
          <ImageGallery>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/intelli-01.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/intelli-02.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/intelli-03.jpg"}
            ></ImageBox>
            <ImageBox
              isAvailableZoom={true}
              url={"/images/intelli-04.jpg"}
            ></ImageBox>
          </ImageGallery>
        </div>

        <div>
          <Title>기타 정보</Title>
          <Description>
            <b css={css({ color: "#000000" })}>개발 일자 : 2024년 1월 3일간</b>
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
            번쨰 앱 입니다. 그동안 자체적으로 보일러프로젝트를 구성해 배포했으나
            사실 별 차이가 없다는 걸 깨닫고는 바로 CRA로 넘어갔습니다.
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
    </Container>
  );
}
