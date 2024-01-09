/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';
import { Modal } from '../../components/Modal';
import { ProjectItem, ProjectPost } from '../../components/Project';
import postsData from '../../data/posts';



function PostPage() {
    const [posts, setPosts] = useState(postsData.list)

    return (
        <div css={css({
        })}>
            <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>글</b>을 통해 인사이트를 공유하고 있습니다.</p>
            <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>기술 칼럼부터, 개인적인 에세이까지 여러 블로그 플랫폼에서 글을 쓰고 있습니다. 제가 배웠던 지식을 다른 사람들과 공유하는 것에 희열을 느낍니다. </p>

            <div css={css({ 
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                paddingTop: "2rem"
            })}>
                {posts.map(item => (
                    <ProjectPost title={item.title} description={item.description} url={item.url} date={item.date}></ProjectPost>

                ))}

                
     
            </div>

        </div>
    )
}


export { PostPage }