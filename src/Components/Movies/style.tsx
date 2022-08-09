import styled from 'styled-components';

export const Wrapper = styled.section`
    margin-top: 25em;
    
    Swipper {
        margin: 1em auto;
    }

    h3 {
        margin-left: 2.5em;
    }
`

export const Container = styled.div`
    margin: 1.5em 3em;
    display: flex;
    
    img {
        display: block;
        width: auto;
        height: 360px;
        object-fit: cover;
        border-radius: .6em;
        margin-bottom: 2em;
        box-shadow: 2px 2px 8px #222;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
            transition: all ease-in-out .5s;
        }
    }
`;