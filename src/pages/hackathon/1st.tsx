import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function FirstHackathonPage() {
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
            <Title>인생 첫 번째 해커톤</Title>
            <Description>
              임팩트 단체에서 개최한 첫 번째 해커톤이자, 저의 첫 번째 해커톤
              참가입니다. 그동안 CTF만 나가봤던 저에게는 신선한 충격이었습니다.
              지금까지 개발한 프로젝트가 그렇게 디테일한 제품이 아니라는 생각과
              더불어 디자이너, 기획자, 동료 개발자들과 처음으로 협업한
              기회이기도 했습니다.
            </Description>
          </div>
          <div>
            <Title>엄청난 성장</Title>
            <Description>
              그야말로 저의 시야를 바꿔준 해커톤이었습니다. 지금까지 해온
              소프트웨어 개발이라는 분야에서 객관적인 실력을 가늠해볼 수
              있었습니다. 내가 헛되이 배우지 않았다는 생각과 더 배워야겠다는
              도전적인 마음가짐을 얻었습니다.
            </Description>
          </div>
          <div>
            <Title>깃허브 링크</Title>
            <Button
              onClick={() => (location.href = "https://github.com/goormorg")}
            >
              https://github.com/goormorg
            </Button>
          </div>
        </ProjectBody>
      </div>
    </Container>
  );
}
