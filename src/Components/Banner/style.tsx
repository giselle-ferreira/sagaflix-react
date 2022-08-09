import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    top: -100px;
    left: 0;
    z-index: -1;
    width: 100vw;
`;

export const ImgWrapper = styled.img`
    position: absolute;
    width: 100%;
    left: 0;
`;

export const Info = styled.section`
    position: absolute;
    top: 250px;
    left: 5%;

    h1 {
        width: 70%;
        font-size: 48px;
        text-shadow: 1px 1px 2px #222;
        line-height: 55px;
        color: #fff;
    }
`;

export const ButtonWrapper = styled.span`
    margin-top: 2em;
    display: flex;
    gap: 1em;
    cursor: pointer;    
`;

export const ButtonPlay = styled.a`
    padding: .8em 1.8em;
    background-color: #fff;
    color: #000;
    border-radius: 4px;    
    cursor: pointer;

    &:hover {
        filter: brightness(.7);
    }
`;

export const ButtonInfo = styled.a`
    padding: .8em 1.8em;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    border-radius: 4px;     
    cursor: pointer;

    &:hover {
        filter: brightness(.7);
    }
`;