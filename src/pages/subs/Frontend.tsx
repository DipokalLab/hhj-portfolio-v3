/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { ProjectBody, ProjectItem, ProjectPost } from '../../components/Project';
import { ImageBox, ImageGallery } from '../../components/Image';
import { Button } from '../../components/Button';
import { Description, Title } from '../../components/Text';




// NOTE: add more Nugget, Inlander
// 
function FrondendPage() {
    const [isShowMore, setIsShowMore] = useState(false)

    const handleClickMore = () => {
        setIsShowMore(true)
    }
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
                paddingBottom: "1rem",
                flexWrap: "wrap",
                '@media(min-width: 600px)': {
                    flexDirection: "row",

                }
            })}> 

                <ProjectItem title='Archery' subtitle="ThreeJS 기반 양궁게임 입니다. UI 파트는 React와 TypeScript를 통해 개발했습니다." tags={["#ThreeJS", "#React"]} imageUrl="/public/images/archery-01.jpg">
                    <ProjectBody>
                        <div>
                            <Title>프로젝트 소개</Title>
                            <Description>심심할때 플레이 하기 좋은 웹 게임을 개발하기 위해 만들었습니다. ThreeJS와 React로 개발했으며 실제 DAU수치를 파악하면서 마케팅 효율을 측정해보기도 했습니다.</Description>
                        </div>

                        <div>
                            <Title>관련 블로그</Title>
                            <ProjectPost title="게임엔진 없이 게임을 만들었다" description="Velog 게시글" url="https://velog.io/@dipokalhhj/%EB%82%98%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B2%8C%EC%9E%84%EC%97%94%EC%A7%84-%EC%97%86%EC%9D%B4-%EA%B2%8C%EC%9E%84%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%82%98" date='2023-09-21'></ProjectPost>
                        </div>

                        <div>
                            <Title>스크린샷</Title>
                            <ImageGallery>
                                <ImageBox url={"/public/images/archery-01.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/archery-02.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/archery-03.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/archery-04.jpg"}></ImageBox>
                            </ImageGallery>

                        </div>

                        <div>
                            <Title>기술스택</Title>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}><b css={css({ color: "#000000" })}>ThreeJS</b> 3D 라이브러리 입니다. 웹상에서 3차원 물체를 표현하는데 있어 ThreeJS를 사용하는게 가장 효율적입니다. 다른 대안으로는 WebGL이 있으나 NativeAPI라 문법이 추상적이고 개발 기간이 오래 걸린다는 단점이 있습니다. 또 다른 대안인 React-three fiber의 경우 지원 하지 않는 문법도 존재하고 확장성 문제가 존재합니다.</p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}><b css={css({ color: "#000000" })}>React</b> UI를 구성하기 위해 사용했습니다.</p>
                            <p css={css({ fontWeight: "500", fontSize: "1rem", margin: 0, color: "#797a85" })}><b css={css({ color: "#000000" })}>Redux</b> ThreeJS Class와 React Components간 상태 관리를 위해 사용했습니다. </p>

                        </div>

                        
                    </ProjectBody>
                </ProjectItem>

                <ProjectItem title='Nugget' subtitle="Custom Elements와 Electron, FFmpeg를 이용한 영상편집 소프트웨어 입니다." tags={["#CE", "#LitJS", "FFmpeg", "Electron"]} imageUrl="/public/images/nugget-01.jpg">
                    <ProjectBody>
                        <div>
                            <Title>프로젝트 소개</Title>
                            <Description>영상편집 프로그램 입니다. 기본적인 컷편집, 애니메이션 시스템, 익스텐션을 통한 외부 API 불러오기를 제공하고 ffmpeg를 통해 랜더링이 가능하도록 구성했습니다. 클라우드플레어 R2를 이용해 ffmpeg바이너리를 다운로드받도록 설계했으며 코드사인 인증서를 통한 파일의 위 변조를 방지하기도 했습니다.</Description>
                            <Description>제가 만든 소프트웨어 중에서 복잡도가 가장 높은 소프트웨어 중 하나입니다. 2번의 전체 리팩토링을 거쳤으며, litjs와 Custom Element를 적절하게 배치하여 컴포넌트간 의존도를 줄이는 작업을 수행했습니다. TypeScript를 제 개인프로젝트에 적용하기 전이라 프론트엔드 코드는 JS로 백엔드(랜더링) 코드는 TypeScript로 개발되었습니다.</Description>
                            <Description>사실상 코드사인 인증서가 1년동안 유지되기 때문에, 서비스는 종료되었습니다. </Description>

                        </div>

                        <div>
                            <Title>스크린샷</Title>
                            <ImageGallery>
                                <ImageBox url={"/public/images/nugget-01.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/nugget-02.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/nugget-03.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/nugget-04.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/nugget-05.jpg"}></ImageBox>
                            </ImageGallery>  
                        </div>

                    </ProjectBody>
                </ProjectItem>    


                <ProjectItem title='Inlander' subtitle="UX와 디자인을 고려해 개발한 영어 학습 앱 입니다." tags={["#TypeScript", "#Emotion", "#TypeORM"]} imageUrl="/public/images/inlander-01.jpg" isShow={isShowMore}>
                    <ProjectBody>
                        <div>
                            <Title>프로젝트 소개</Title>
                            <Description>디자인을 중심에 둔 영어 학습 앱 입니다.</Description>
                        </div>


                        <div css={css({
                            width: "100%"
                        })}>
                            <Title>스크린샷</Title>
                            <ImageGallery>
                                <ImageBox url={"/public/images/inlander-01.jpg"}></ImageBox>
                                    <ImageBox url={"/public/images/inlander-02.jpg"}></ImageBox>
                                    <ImageBox url={"/public/images/inlander-03.jpg"}></ImageBox>
                                    <ImageBox url={"/public/images/inlander-04.jpg"}></ImageBox>
                            </ImageGallery>
                        </div>

                    </ProjectBody>
                </ProjectItem>       


                <ProjectItem title='VR LightSaber' subtitle="WebVR 기술을 활용해서 날아오는 광선총을 광선검으로 튕깁니다." tags={["#ThreeJS", "#WebVR"]} imageUrl="/public/images/saber-02.jpg" isShow={isShowMore}>
                    <ProjectBody>
                        <div>
                            <Title>프로젝트 소개</Title>
                            <Description>ThreeJS WebXR 기술을 활용해 광선검을 휘두르는 게임입니다. 60fps를 유지하기 위해 OBB 충돌과 오브젝트 최적화를 진행했으며 오픈소스로 공개했습니다.</Description>
                        </div>

                        <div>
                            <Title>관련 블로그</Title>
                            <ProjectPost title="WebXR로 웹 VR 게임 만들기" description="Velog 게시글" url="https://velog.io/@dipokalhhj/WebXR-VR" date='2023-10-31'></ProjectPost>
                        </div>

                        <div>
                            <Title>스크린샷</Title>
                            <ImageGallery>
                                <ImageBox url={"/public/images/saber-01.jpg"}></ImageBox>
                                <ImageBox url={"/public/images/saber-02.jpg"}></ImageBox>
                            </ImageGallery>  
                        </div>


                        <div>
                            <Title>깃허브 링크</Title>
                            <Button onClick={() => location.href = 'https://github.com/Public-Game-Entity/vr-lightsaber'}>https://github.com/Public-Game-Entity/vr-lightsaber</Button>
                        </div>
                    </ProjectBody>
                </ProjectItem>    

 
            </div>

            {!isShowMore && (
                <Button onClick={handleClickMore}>더보기</Button>

            )}

        </div>
    )
}


export { FrondendPage }