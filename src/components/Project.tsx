/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { Box } from '../components/Box';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';

type ItemType = {
    title?: string    
    subtitle?: string
    tags?: string[]
    children?: any

}

type PostType = {
    title?: string
    description?: string
    url: string
    date?: string
}

function ProjectItem({ title, subtitle, tags, children }: ItemType) {
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


function ProjectPost({ title, description, date, url }: PostType) {

    const handleClick = () => {
        location.href = url
    }

    return (
        <Box onClick={handleClick}>
            <div css={css({
                padding: "2rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                cursor: "pointer"
            })}>
                <p css={css({ fontSize: "1.3rem", fontWeight: "500", margin: 0 })}>{title}</p>
                <p css={css({ fontSize: "1rem", fontWeight: "500", color: "#797a85", margin: 0, marginBottom: "0.6rem" })}>{description}</p>
                <p css={css({ fontSize: "0.8rem", fontWeight: "300", color: "#797a85", margin: 0 })}>{date}</p>
            </div>

        </Box>
    );
};




export { ProjectItem, ProjectPost }