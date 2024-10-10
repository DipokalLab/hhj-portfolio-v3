import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function FifthHackathonPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Nav enableBack={true} />

      <div
        css={css({
          padding: "1rem",
          width: "100%",
        })}
      >
        <ProjectBody>
          <div>
            <Title>이번에도 카이스트에서 진행된</Title>
            <Description>
              2일 동안, 첫 번째 해커톤과 마찬가지로 짧은 시간 내에 마무리 해야
              했습니다. 2등했습니다.
            </Description>
          </div>
          <div>
            <Title>깃허브 링크</Title>
            <Button
              onClick={() => (location.href = "https://github.com/4teamgdsc")}
            >
              https://github.com/4teamgdsc
            </Button>
          </div>
        </ProjectBody>
      </div>
    </Container>
  );
}
