import { css } from "@emotion/react";
import { ImageGallery, ImageBox } from "../../components/Image";
import { ProjectBody, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import { Title, Description } from "../../components/common/Text";
import { Container } from "../../components/Container";
import { useEffect } from "react";
import { Nav } from "../../components/common/Nav";

export function SecondHackathonPage() {
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
            <Title>제주도에서 진행한 구름톤 10기</Title>
            <Description>
              너무 좋았습니다. 2일날 진행된 비어파티는 신선한 경험이었고
              기획부터 개발까지 이전 해커톤과는 다른 성숙한 분위기였습니다. 첫
              번째로 나갔던 해커톤이 처음이자 마지막 고등학생 대상 해커톤이었던
              만큼, 첫 성인 대상 해커톤에서 다양한 사람들을 만나게 되었습니다.
            </Description>
            <Description>
              3등했습니다. 두번째 나간 해커톤까지 연속 우승이라니. 자신감이
              하늘을 찌를 정도였습니다. 그리고 다음 해커톤에서 그게 운이였다는
              사실을 꺠달았습니다.
            </Description>
          </div>
          <div>
            <Title>후기</Title>
            <Button
              onClick={() =>
                (location.href =
                  "https://www.linkedin.com/posts/huhhyeongjun_qvordqtse-activity-7200797892419231747-Ro3g?utm_source=share")
              }
            >
              linkedin post
            </Button>
          </div>
          <div>
            <Title>깃허브 링크</Title>
            <Button
              onClick={() => (location.href = "https://github.com/goo-rm-dari")}
            >
              https://github.com/goo-rm-dari
            </Button>
          </div>
        </ProjectBody>
      </div>
    </Container>
  );
}
