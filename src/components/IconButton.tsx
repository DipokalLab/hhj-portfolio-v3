
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'


type IconButtonType = {
    onClick?: any
    children: string
    isDisplay?: boolean
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
            backgroundColor: '#f2f3f5'
        })}>
            <span className="material-symbols-outlined">
            {children}
            </span>
        </div>
    )
}

export { IconButton }