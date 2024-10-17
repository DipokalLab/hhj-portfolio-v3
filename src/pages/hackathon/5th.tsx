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
              했습니다. 2등했습니다. N1 에서 진행되었고 한 번 갔다와서인지
              굉장히 익숙했습니다.
            </Description>
          </div>
          <div>
            <Title>후기</Title>
            <Button
              onClick={() =>
                (location.href =
                  "https://www.linkedin.com/posts/huhhyeongjun_%ED%95%9C-%EB%8B%AC-%EB%8F%99%EC%95%88-3%EA%B0%9C%EC%9D%98-%ED%95%B4%EC%BB%A4%ED%86%A4%EC%9D%84-%EB%A7%88%EC%B9%9C-%ED%9B%84%EA%B8%B0-%EA%B7%B8%EB%8F%99%EC%95%88-%EA%BD%A4-%EB%B0%94%EC%81%9C-%EB%82%A0%EC%9D%84-%EB%B3%B4%EB%83%88%EC%8A%B5%EB%8B%88%EB%8B%A4-activity-7234140773401686016-Ded6?utm_source=share&utm_medium=member_ios")
              }
            >
              linkedin post
            </Button>
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
