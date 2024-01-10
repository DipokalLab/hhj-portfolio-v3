/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { ProjectItem, ProjectPost } from '../../components/Project';
import { ImageBox } from '../../components/Image';




// NOTE: add more Nugget, Inlander
// 
function FrondendPage() {
    return (
        <div css={css({
        })}>
            <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>프론트엔드 개발자</b> 입니다.</p>
            <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>눈에 보이는 소프트웨어를 만듭니다. ThreeJS를 활용한 3D 미니게임, WebRTC 실시간 통신, JS 기반 ML등 프론트엔드에서 쓰이는 새로운 기술을 탐구합니다. 무엇보다 저의 주력 기술 분야 입니다.</p>

            <div css={css({ 
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "2rem",
                '@media(min-width: 600px)': {
                    flexDirection: "row",

                }
            })}> 

                <ProjectItem title='Archery' subtitle="ThreeJS 기반 양궁게임 입니다. UI 파트는 React와 TypeScript를 통해 개발했습니다." tags={["#ThreeJS", "#React"]} imageUrl="/public/images/archery-01.png">
                    <div css={css({
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        padding: "1rem 0"
                    })}> 
                        <div>
                            <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0, marginBottom: "1rem" })}> <b css={css({ fontWeight: 500})}>프로젝트 소개</b></p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}>심심할때 플레이 하기 좋은 웹 게임을 개발하기 위해 만들었습니다. ThreeJS와 React로 개발했으며 실제 DAU수치를 파악하면서 마케팅 효율을 측정해보기도 했습니다.</p>
                        </div>

                        <div>
                            <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0, marginBottom: "1rem" })}> <b css={css({ fontWeight: 500})}>관련 블로그</b></p>
                            <ProjectPost title="게임엔진 없이 게임을 만들었다" description="Velog 게시글" url="https://velog.io/@dipokalhhj/%EB%82%98%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B2%8C%EC%9E%84%EC%97%94%EC%A7%84-%EC%97%86%EC%9D%B4-%EA%B2%8C%EC%9E%84%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%82%98" date='2023-09-21'></ProjectPost>
                        </div>

                        <div>
                            <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0, marginBottom: "1rem", })}> <b css={css({ fontWeight: 500})}>스크린샷</b></p>
                            <div css={css({
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem"
                            })}>
                                <div css={css({
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem",
                                    justifyContent: "space-between",
  
                                })}>
                                    <ImageBox url={"/public/images/archery-01.png"}></ImageBox>
                                    <ImageBox url={"/public/images/archery-02.png"}></ImageBox>
                                </div>

                                <div css={css({
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem",
                                    justifyContent: "space-between"
                                })}>
                                    <ImageBox url={"/public/images/archery-03.png"}></ImageBox>
                                    <ImageBox url={"/public/images/archery-04.png"}></ImageBox>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0, marginBottom: "1rem" })}> <b css={css({ fontWeight: 500})}>기술스택</b></p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}><b css={css({ color: "#000000" })}>ThreeJS</b> 3D 라이브러리 입니다. 웹상에서 3차원 물체를 표현하는데 있어 ThreeJS를 사용하는게 가장 효율적입니다. 다른 대안으로는 WebGL이 있으나 NativeAPI라 문법이 추상적이고 개발 기간이 오래 걸린다는 단점이 있습니다. 또 다른 대안인 React-three fiber의 경우 지원 하지 않는 문법도 존재하고 확장성 문제가 존재합니다.</p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}><b css={css({ color: "#000000" })}>React</b> UI를 구성하기 위해 사용했습니다.</p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}><b css={css({ color: "#000000" })}>Redux</b> ThreeJS Class와 React Components간 상태 관리를 위해 사용했습니다. </p>

                        </div>

                        
                    </div>
                </ProjectItem>

                <ProjectItem title='VR LightSaber' subtitle="WebVR 기술을 활용해서 날아오는 광선총을 광선검으로 튕깁니다." tags={["#ThreeJS", "#WebVR"]} imageUrl="/public/images/saber-02.png">
                    <div css={css({
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        padding: "1rem 0"
                    })}> 
                        <div>
                            <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0, marginBottom: "1rem" })}> <b css={css({ fontWeight: 500})}>프로젝트 소개</b></p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}>심심할때 플레이 하기 좋은 웹 게임을 개발하기 위해 만들었습니다. ThreeJS와 React로 개발했으며 실제 DAU수치를 파악하면서 마케팅 효율을 측정해보기도 했습니다.</p>
                        </div>

                        <div>
                            <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0, marginBottom: "1rem" })}> <b css={css({ fontWeight: 500})}>관련 블로그</b></p>
                            <ProjectPost title="WebXR로 웹 VR 게임 만들기" description="Velog 게시글" url="https://velog.io/@dipokalhhj/WebXR-VR" date='2023-10-31'></ProjectPost>
                        </div>
                    </div>

                </ProjectItem>        
            </div>

        </div>
    )
}


export { FrondendPage }