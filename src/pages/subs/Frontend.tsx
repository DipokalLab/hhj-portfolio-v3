/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';
import { Modal } from '../../components/Modal';

type ItemType = {
    title?: string    
    subtitle?: string
    tags?: string[]
    children?: any

}

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

                <Item title='Archery' subtitle="ThreeJS 기반 양궁게임 입니다. UI 파트는 React와 TypeScript를 통해 개발했습니다." tags={["#ThreeJS", "#React"]}>
                    <div css={css({
                    })}>
                        <p css={css({ fontWeight: "300", fontSize: "1.3rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>Arc</b></p>
                        <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>눈에 보이는 소프트웨어를 만듭니다. ThreeJS를 활용한 3D 미니게임, WebRTC 실시간 통신, JS 기반 ML등 프론트엔드에서 쓰이는 새로운 기술을 탐구합니다. 무엇보다 저의 주력 기술 분야 입니다.</p>

                
                    </div>
                </Item>

            <Box>
                dd
            </Box>        
            </div>

        </div>
    )
}


function Item({ title, subtitle, tags, children }: ItemType) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClose = () => {
        setIsModalOpen(false)
    }

    const handleClick = () => {
        setIsModalOpen(true)
    }
    
    return (
        <Box>
            <Modal onClose={handleClose} isOpen={isModalOpen}>
                {children}
            </Modal>

            <div onClick={handleClick} css={css({
                position: "relative",
                width: "100%",
                cursor: "pointer"
            })}>
                <div css={css({ 
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "0",
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ffffff00",
                    zIndex: "1000",
                    borderRadius: "1rem",
                    transition: "0.1s",
                    opacity: "0%",
                    ":hover": {
                        backgroundColor: "#ffffff66",
                        backdropFilter: "blur(4px)",
                        opacity: "100%"
                    }
                })}>
                    <p>더보기</p>
                </div>

                <div css={css({ 
                    position: "relative",
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "0.6rem", 
                    padding: "1rem"
                })}>
                    <p css={css({ fontSize: "1.3rem", fontWeight: "500", margin: 0 })}>{title}</p>
                    <p css={css({ fontSize: "1rem", fontWeight: "300", color: "#797a85", margin: 0 })}>{subtitle}</p>
                    <div css={css({ display: "flex", gap: "0.5rem", marginTop: "0.5rem" })}>
                        {tags.map(tag => (
                            <Badge>{tag}</Badge>
                        ))}
                    </div>
                </div>

            </div>

        </Box>
    )
}

export { FrondendPage }