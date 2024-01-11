
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'


type BoxType = {
    onClick?: any
    children: any
    isDisplay?: boolean
}

function Box({ onClick, children, isDisplay = true }: BoxType) {
    return (
        <div onClick={onClick} css={css({
            border: "0.1rem solid #F0F0F4",
            borderRadius: "1rem",
            width: "100%",
            display: isDisplay ? "" : "none"
        })}>
            {children}
        </div>
    )
}

export { Box }