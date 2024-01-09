/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { ProjectItem } from '../../components/Project';


function FrondendPage() {
    return (
        <div css={css({
        })}>
            <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>프론트엔드 개발자</b> 입니다.</p>
            <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>눈에 보이는 소프트웨어를 만듭니다. ThreeJS를 활용한 3D 미니게임, WebRTC 실시간 통신, JS 기반 ML등 프론트엔드에서 쓰이는 새로운 기술을 탐구합니다. 무엇보다 저의 주력 기술 분야 입니다.</p>

            <div css={css({ 
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                paddingTop: "2rem"
            })}>

                <ProjectItem title='Archery' subtitle="ThreeJS 기반 양궁게임 입니다. UI 파트는 React와 TypeScript를 통해 개발했습니다." tags={["#ThreeJS", "#React"]}>
                    <div css={css({
                    })}>
                        <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>Arc</b></p>
                        <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>눈에 보이는 소프트웨어를 만듭니다. ThreeJS를 활용한 3D 미니게임, WebRTC 실시간 통신, JS 기반 ML등 프론트엔드에서 쓰이는 새로운 기술을 탐구합니다. 무엇보다 저의 주력 기술 분야 입니다.</p>

                
                    </div>
                </ProjectItem>

                <ProjectItem title='Archery' subtitle="ThreeJS 기반 양궁게임 입니다. UI 파트는 React와 TypeScript를 통해 개발했습니다." tags={["#ThreeJS", "#React"]}>
                    dd
                </ProjectItem>        
            </div>

        </div>
    )
}


export { FrondendPage }