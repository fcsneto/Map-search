import styled from "styled-components"
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 1rem;
    gap: 1rem
`;

export const Logo = styled.img`
    width: 150px;
    margin: 0 auto;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
    line-height: 2rem;
`;

export const CarouselSlider = styled(Slider)`
    .slick-track{
        width: 100%;
        display: flex;
        gap: 1rem;
    }
`;

export const ModalTitle = styled.p`
    margin-bottom: .75rem;
    letter-spacing: .1rem;
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    text-transform: none;
    line-height: 1.8rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const ModalContent = styled.p`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    line-height: 1.25rem;
    font-size: 1rem;
    font-weight: normal;
`;

export const ModalOpenHours = styled.p`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    line-height: 1.25rem;
    font-size: 1.15rem;
    font-weight: bold;
`;
