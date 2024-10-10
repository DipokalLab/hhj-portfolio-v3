import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function ThirdHackathonPage() {
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
            <Title>KAIST 스팍스 해커톤</Title>
            <Description>
              구름톤과 마찬가지로 4일동안 진행되었습니다.
            </Description>
          </div>
          <div>
            <Title>태도에 대해 다시 생각해본 해커톤</Title>
            <Description>
              지금까지 해커톤은 성장과 재미를 위해, 또 그랬기에 우승할 수
              있었다고 생각했습니다. 그러나 이 해커톤을 기점으로 생각이
              바뀌었는데, 재미는 몰입에서 나온다는 사실을 망각하고 있었습니다.
            </Description>
            <Description>
              지금 생각해보면 팀원들에게 미안합니다. 운 좋게 8팀인 본선까지
              올라갔지만, 중간에 상당히 피곤해 있었기에 마무리 작업을 할 기운이
              없었습니다. 일단 집에 가서 좀 자고 싶기도 했고요. 구름톤때도 팀원
              덕분에 수상할 수 있었고 이번 해커톤에서도 팀원 덕분에 본선까지
              올라가게 되었습니다.{" "}
            </Description>
          </div>
          <div>
            <Title>깃허브 링크</Title>
            <Button
              onClick={() => (location.href = "https://github.com/SPARCSPARCS")}
            >
              https://github.com/SPARCSPARCS
            </Button>
          </div>
        </ProjectBody>
      </div>
    </Container>
  );
}
