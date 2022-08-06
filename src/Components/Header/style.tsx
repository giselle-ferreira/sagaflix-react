import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 3%;
    height: 4.2em;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;        
        gap: 1.5em;
        margin-left: 2.2em;        
    }

    ul li a {
        font-size: .9em;

        &:hover {
            color: #bbbbbb;
            transition: .5s ease-in-out;
        }
    }
`;

export const UserSection = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

    ul {
        display: flex;
        gap: 1.8em;
    }
`;