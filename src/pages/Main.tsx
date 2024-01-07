/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'
import { Modal } from '../components/Modal';
import { IconButton } from '../components/IconButton';
import { FrondendPage } from './subs/Frontend';


function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClose = () => {
        setIsModalOpen(false)
    }

    const handleClickOpenModal = () => {
        setIsModalOpen(true)
    }

    return (
        <div>
            <Header></Header>
            <Modal onClose={handleClose} isOpen={isModalOpen}>ss</Modal>
            <IconButton onClick={handleClickOpenModal} isDisplay={!isModalOpen}>person</IconButton>

            <Container>

                <FrondendPage></FrondendPage>




                
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
                <h1>허형준_</h1>
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
                padding: "1rem 1rem",
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