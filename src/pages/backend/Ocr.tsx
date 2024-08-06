import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function BackendOcr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Nav enableBack={true} />

      <div
        css={css({
          padding: "1rem",
        })}
      >
        <ProjectBody>
          <div>
            <Title>프로젝트 소개</Title>
            <Description>
              Scrap 글귀 공유 플랫폼에 포함된 API 입니다. 테서렉트py로
              진행했으며 파일 업로드 파트는 FastAPI로 빠르게 구현했습니다.
            </Description>
          </div>
        </ProjectBody>
      </div>
    </Container>
  );
}
