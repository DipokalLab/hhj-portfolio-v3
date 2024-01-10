
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react'


type ImageType = {
    url: string
}


function ImageBox({ url }: ImageType) {
    return (
        <div css={css({
            width: "100%",
            height: "300px",
            backgroundImage: `url(${url})`,
            borderRadius: "0.6rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        })}>
        </div>
    )
}

export { ImageBox }