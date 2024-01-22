
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'


type IconButtonType = {
    onClick?: any
    children: string
    isDisplay?: boolean
}

type ButtonType = {
    onClick?: any
    children: any
}

function IconButton({ onClick, children, isDisplay = false }: IconButtonType) {
    return (
        <div onClick={onClick} css={css({
            position: "fixed",
            zIndex: "1000",
            top: "0.6rem",
            right: "0.6rem",
            borderRadius: "100px",
            display: isDisplay ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            width: "3rem",
            height: "3rem",
            backgroundColor: '#f2f3f5',
            cursor: "pointer"
        })}>
            <span className="material-symbols-outlined">
            {children}
            </span>
        </div>
    )
}

function Button({ onClick, children }: ButtonType) {
    return (
        <div onClick={onClick} css={css({
            border: "0.1rem solid #F0F0F4",
            borderRadius: "0.6rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0.6rem 1.4rem",
            backgroundColor: '#ffffff',
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: "500",
            fontSize: "0.8rem",
            cursor: "pointer",
            transition: "0.1s",
            ":hover": {
                backgroundColor: '#f2f3f5',
            }
        })}>
            {children}
        </div>
    )
}


export { Button, IconButton }