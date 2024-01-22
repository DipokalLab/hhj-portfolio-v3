/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';
import { Modal } from '../../components/Modal';
import { ProjectBody, ProjectItem, ProjectPost } from '../../components/Project';
import { Button } from '../../components/Button';
import { Description, Title } from '../../components/Text';



function BackendPage() {
    return (
        <div css={css({
        })}>
            <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>백엔드 개발자</b> 입니다.</p>
            <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>NodeJS Express를 주력으로 사용합니다. 확장 가능하고 견고한 서버를 설계하는데 중심을 두고 있습니다.</p>

            <div css={css({ 
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "2rem"
            })}>

                <ProjectItem title='OCR API' subtitle="FastAPI를 사용해서 이미지 입력을 받고 이미지에 포함된 텍스트 정보를 반환하는 API를 설계했습니다." tags={["#FastAPI", "#Python", "#Docker"]} isImage={false}>
                    <ProjectBody>
                        <div>
                            <Title>프로젝트 소개</Title>
                            <Description>Scrap 글귀 공유 플랫폼에 포함된 API 입니다. 테서렉트py로 진행했으며 파일 업로드 파트는 FastAPI로 빠르게 구현했습니다.</Description>
                        </div>
                    </ProjectBody>
                </ProjectItem>  


                <ProjectItem title='Docker 배포 시스템' subtitle="nginx & docker & GoCD를 기반으로 구성된 자동 배포 시스템(CD)입니다. 실제 홈서버에서 가동되고 있습니다." tags={["#Docker", "#Nginx", "#GoCD"]} isImage={false}>
                    <ProjectBody>
                        <div>
                            <Title>프로젝트 소개</Title>
                            <Description>도커 기반으로 자동배포 시스템을 구축했습니다. 이전 대비 약 10배의 개발 생산성을 보여주었으며, GoCD 배포를 통해 깃 커밋으로 배포하도록 구성했습니다. 또한 각각의 프로젝트마다 독립된 환경으로 배포가 가능하고 인증서 연장과 설정이 따로 필요하지 않아 번거로운 과정도 없습니다.</Description>
                            <Description>이 세팅으로 1년이 넘는 기간동안 별 문제없이 배포할 수 있었습니다.</Description>
                        </div>

                        <div>
                            <Title>깃허브 링크</Title>
                            <Button onClick={() => location.href = 'https://github.com/DipokalLab/nginx-docker-deploy'}>https://github.com/DipokalLab/nginx-docker-deploy</Button>
                        </div>
                    </ProjectBody>
                </ProjectItem>  
     
            </div>

        </div>
    )
}


export { BackendPage }