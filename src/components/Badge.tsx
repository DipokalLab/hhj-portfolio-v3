
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'


type BadgeType = {
    children: string
}

function Badge({ children }: BadgeType) {
    return (
        <div css={css({
            borderRadius: "1rem",
            backgroundColor: "#F0F0F4",
            padding: "0.4rem 0.8rem",
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: "500",
            fontSize: "0.8rem",
            color: "#7F8BAA"
        })}>
            {children}
        </div>
    )
}

export { Badge }