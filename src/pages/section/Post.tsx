import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Box } from "../../components/common/Box";
import { Badge } from "../../components/common/Badge";
import { Modal } from "../../components/common/Modal";
import { ProjectItem, ProjectPost } from "../../components/Project";
import { Button } from "../../components/common/Button";
import postsData from "../../data/posts";
import { t } from "i18next";

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
        <b css={css({ fontWeight: 500 })}>{t(`ns:writer.title`)}</b>
        {t(`ns:writer.titleNext`)}
      </p>
      <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>
        {t(`ns:writer.description`)}
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

        <Button onClick={appendMorePosts}>{t(`ns:common.more`)}</Button>
      </div>
    </div>
  );
}

export { PostPage };
