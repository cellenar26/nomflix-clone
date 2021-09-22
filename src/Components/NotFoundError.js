import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin-top: 20px;

`

const ErrorMessage = styled.h1`
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 20px;
`

const NotFoundError = () => {
    return (
        <Container>
            <ErrorMessage>😔 Oops~ 서버에 해당 데이터가 없습니다 ㅜㅜ 😔</ErrorMessage>
        </Container>
    )
}

export default NotFoundError;