import styled from "styled-components";

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 1rem;
    background-color: #fff;
    border-left: 0.25rem solid transparent;

    transition:
        border-left-color 0.2s ease,
        background-color 0.2s ease;
    :hover{
        background-color: ${(props)=>props.theme.colors.background};
        border-left-color: ${(props)=>props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .35rem
`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 0.75rem;
`;

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
`;

export const RestaurantPhoto = styled.img`
    display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: .5rem;

`;

