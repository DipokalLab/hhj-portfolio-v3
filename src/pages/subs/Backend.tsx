/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';
import { Modal } from '../../components/Modal';
import { ProjectItem } from '../../components/Project';



function BackendPage() {
    return (
        <div css={css({
        })}>
            <p css={css({ fontWeight: "300", fontSize: "1.6rem", margin: 0 })}> <b css={css({ fontWeight: 500})}>백엔드 개발자</b> 입니다.</p>
            <p css={css({ fontWeight: "500", fontSize: "1rem", color: "#797a85" })}>NodeJS Express를 주력으로 사용합니다. 확장 가능하고 견고한 서버를 설계하는데 중심을 두고 있습니다.</p>

            <div css={css({ 
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                paddingTop: "2rem"
            })}>

     
            </div>

        </div>
    )
}


export { BackendPage }