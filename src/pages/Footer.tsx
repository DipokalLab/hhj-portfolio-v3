/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import { Container } from '../components/Container';



function Footer() {
    const [expend, setExpend] = useState(false)

    return (
        <div css={css({
            backgroundColor: "#f2f3f5",
            marginTop: "2rem"
        })}>
            <Container>
                <div css={css({
                    display: "flex",
                    flexDirection: "column",
                })}>
                    <p css={css({ fontWeight: "300", fontSize: "0.8rem", margin: 0 })}>@dipokal</p>
                    <p css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })}>소프트웨어 개발자 허형준의 개인 포트폴리오 입니다. 취업을 위한 용도가 아닌 기록을 남기기 위함이 목적이며, 구체적인 인적 사항이 명시되지 않습니다. 해당 사이트의 코드는 <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })}  href="https://github.com/DipokalLab/hhj-portfolio-v3" target="_blank" rel="noopener noreferrer">https://github.com/DipokalLab/hhj-portfolio-v3</a>에 있습니다.</p>
                    <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })} href="https://www.facebook.com/dipokalhhj" target="_blank" rel="noopener noreferrer">페이스북</a>
                    <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })} href="https://github.com/DipokalLab" target="_blank" rel="noopener noreferrer">깃허브</a>
                    <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })} href="https://www.instagram.com/hyeongjun.dev/" target="_blank" rel="noopener noreferrer">인스타그램</a>

                    {expend ? (
                        <>
                            <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })} href="https://velog.io/@dipokalhhj" target="_blank" rel="noopener noreferrer">Velog {">"}</a>
                            <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })} href="https://disquiet.io/@hhj" target="_blank" rel="noopener noreferrer">디스콰이엇 {">"}</a>
                            <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })} href="https://www.linkedin.com/in/huhhyeongjun/" target="_blank" rel="noopener noreferrer">링크드인 {">"}</a>
                            <a css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85" })} href="https://medium.com/@hyeongjun" target="_blank" rel="noopener noreferrer">미디엄 {">"}</a>

                        </>
                    ) : (
                        <p css={css({ fontWeight: "500", fontSize: "0.8rem", color: "#797a85", textDecoration: "underline", margin: 0, cursor: "pointer" })} onClick={() => setExpend(true)}>...</p>

                    )}

                </div>
            </Container>

        </div>
    )
}


export { Footer }