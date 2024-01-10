/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'
import { Modal } from '../components/Modal';
import { Button, IconButton } from '../components/Button';
import { FrondendPage } from './subs/Frontend';
import { BackendPage } from './subs/Backend';
import { PostPage } from './subs/Post';
import { SecurityPage } from './subs/Security';


function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClose = () => {
        setIsModalOpen(false)
    }

    const handleClickOpenModal = () => {
        setIsModalOpen(true)
    }
    
    const handleClickOldPage = () => {
        location.href = 'https://hhj.devent.kr'
    }

    return (
        <div>
            <Header></Header>
            <Modal onClose={handleClose} isOpen={isModalOpen}>
                <Button onClick={handleClickOldPage}>이전 포트폴리오로</Button>
            </Modal>

            <IconButton onClick={handleClickOpenModal} isDisplay={!isModalOpen}>person</IconButton>

            <Container>
                <div css={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "30vh"
                })}>
                    <FrondendPage></FrondendPage>
                    <BackendPage></BackendPage>
                    <PostPage></PostPage>
                    <SecurityPage></SecurityPage>
                </div>





                
            </Container>
        </div>
    );
};

function Header() {
    return (
        <div css={css({
            backgroundColor: "#f2f3f5",
            width: "100%",
            height: "100%",
            overflow: "hidden"
        })}>
            <div css={css({
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                width: "100%",
                height: "100%",
                overflow: "hidden"
            })}>
                <h1 css={css({ fontSize: "2rem" })}>허형준_</h1>
            </div>
        </div>
    )
}


function Container({ children }: any) {
    return (
        <div css={css({
            display: "flex",
            justifyContent: "center",
            width: "100%"
        })}>
            <div css={css({
                display: "flex",
                width: "100%", 
                padding: "2rem 2rem",
                '@media(min-width: 1200px)': {
                    maxWidth: "1200px",
                }
            })}>
                {children}
            </div>
        </div>
    )
}

export default MainPage;