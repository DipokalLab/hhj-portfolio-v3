import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function FourthHackathonPage() {
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
            <Title>경주에서 진행한 Junction Asia 2024</Title>
            <Description>
              연차 하루 내고 3일동안 진행했습니다. 시간이 얼마 없었을때 기술
              스택을 바꿔버려서 커밋 기록이 많이 없습니다만, 좋은 추억 쌓고 다른
              팀들 결과 보느라 좋았습니다.
            </Description>
          </div>
          <div>
            <Title>깃허브 링크</Title>
            <Button
              onClick={() =>
                (location.href = "https://github.com/junction-enigma")
              }
            >
              https://github.com/junction-enigma
            </Button>
          </div>
        </ProjectBody>
      </div>
    </Container>
  );
}
