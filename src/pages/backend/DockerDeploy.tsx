import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function BackendDockerDeploy() {
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
              도커 기반으로 자동배포 시스템을 구축했습니다. 이전 대비 약 10배의
              개발 생산성을 보여주었으며, GoCD 배포를 통해 깃 커밋으로
              배포하도록 구성했습니다. 또한 각각의 프로젝트마다 독립된 환경으로
              배포가 가능하고 인증서 연장과 설정이 따로 필요하지 않아 번거로운
              과정도 없습니다.
            </Description>
            <Description>
              이 세팅으로 1년이 넘는 기간동안 별 문제없이 배포할 수 있었습니다.
            </Description>
          </div>

          <div>
            <Title>깃허브 링크</Title>
            <Button
              onClick={() =>
                (location.href =
                  "https://github.com/DipokalLab/nginx-docker-deploy")
              }
            >
              https://github.com/DipokalLab/nginx-docker-deploy
            </Button>
          </div>
        </ProjectBody>
      </div>
    </Container>
  );
}
