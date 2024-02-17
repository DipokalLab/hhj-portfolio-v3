import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Box } from "../../components/common/Box";
import { Badge } from "../../components/common/Badge";
import { Modal } from "../../components/common/Modal";
import { ProjectItem, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import postsData from "../../data/posts";

function PostPage() {
  const [posts, setPosts] = useState(postsData.list);
  const [showPosts, setShowPosts] = useState([]);
  const [index, setIndex] = useState(3);

  const appendMorePosts = () => {
    const slicePosts = posts.slice(0, index);
    setShowPosts([...slicePosts]);
    setIndex(index + 3);
  };

  useEffect(() => {
    appendMorePosts();
  }, []);

  return (
    <div css={css({})}>
      <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}>
        {" "}
        <b css={css({ fontWeight: 500 })}>글</b>을 통해 인사이트를 공유하고
        있습니다.
      </p>
      <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>
        기술 칼럼부터, 개인적인 에세이까지 여러 블로그 플랫폼에서 글을 쓰고
        있습니다. 제가 배웠던 지식을 다른 사람들과 공유하는 것에 희열을
        느낍니다.{" "}
      </p>

      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "2rem",
        })}
      >
        {showPosts.map((item) => (
          <ProjectPost
            title={item.title}
            description={item.description}
            url={item.url}
            date={item.date}
          ></ProjectPost>
        ))}

        <Button onClick={appendMorePosts}>더 불러오기</Button>
      </div>
    </div>
  );
}

export { PostPage };
