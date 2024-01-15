/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';
import { Modal } from '../../components/Modal';
import { ProjectItem, ProjectPost } from '../../components/Project';



function BackendPage() {
    return (
        <div css={css({
        })}>
            <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>백엔드 개발자</b> 입니다.</p>
            <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>NodeJS Express를 주력으로 사용합니다. 확장 가능하고 견고한 서버를 설계하는데 중심을 두고 있습니다.</p>

            <div css={css({ 
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                paddingTop: "2rem"
            })}>

                <ProjectItem title='OCR API' subtitle="FastAPI를 사용해서 이미지 입력을 받고 이미지에 포함된 텍스트 정보를 반환하는 API를 설계했습니다." tags={["#FastAPI", "#Python", "#Docker"]} >
                    <div css={css({
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        padding: "1rem 0"
                    })}> 
                        <div>
                            <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0, marginBottom: "1rem" })}> <b css={css({ fontWeight: 500})}>프로젝트 소개</b></p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}>Scrap 글귀 공유 플랫폼에 포함된 API 입니다. 테서렉트py로 진행했으며 파일 업로드 파트는 FastAPI로 빠르게 구현했습니다.</p>
                        </div>

                    </div>

                </ProjectItem>  
     
            </div>

        </div>
    )
}


export { BackendPage }