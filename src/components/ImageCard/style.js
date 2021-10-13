import styled from "styled-components";

export const IMG = styled.div`
    display: flex;
    width: calc(90px - 0.5rem);
    height: calc(90px - 0.5rem);
    background-image:
        linear-gradient(
            hsla(0, 0%, 0%, 0.7) 0%,
            hsla(0, 0%, 0%, 0.691) 8.1%,
            hsla(0, 0%, 0%, 0.666) 15.5%,
            hsla(0, 0%, 0%, 0.627) 22.5%,
            hsla(0, 0%, 0%, 0.577) 29%,
            hsla(0, 0%, 0%, 0.519) 35.3%,
            hsla(0, 0%, 0%, 0.454) 41.2%,
            hsla(0, 0%, 0%, 0.385) 47.1%,
            hsla(0, 0%, 0%, 0.315) 52.9%,
            hsla(0, 0%, 0%, 0.246) 58.8%,
            hsla(0, 0%, 0%, 0.181) 64.7%,
            hsla(0, 0%, 0%, 0.123) 71%,
            hsla(0, 0%, 0%, 0.073) 77.5%,
            hsla(0, 0%, 0%, 0.034) 84.5%,
            hsla(0, 0%, 0%, 0.009) 91.9%,
            hsla(0, 0%, 0%, 0) 100%),
        url(${(props) => props.photo});
    border-radius: .35rem;
    background-size: cover;    
    padding: .25rem;
`;

export const Title = styled.p`
    color: #fff;
    font-family: ${(props) => props.theme.fonts.fontFamily};
    font-size: 0.85rem;
`;