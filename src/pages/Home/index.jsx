import React, {useState} from "react";
import {useSelector} from 'react-redux';
import MaterialIcon from "@material/react-material-icon";

import TextField, { Input } from "@material/react-text-field";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { ImageCard, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components'


import { Wrapper, Container, Search, Logo, CarouselTitle, CarouselSlider, ModalTitle, ModalContent, ModalOpenHours } from "./style";

const Home = () => {
    const [input, setInput] = useState("");
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants);


    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptativeHeight: true,
        arrows: false
    };

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(input);
        }
    }

    function handleOpenModal(placeId){
        console.log(placeId);
        setModalOpened(true);
        setPlaceId(placeId);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Restaurant Finder" />
                    <TextField
                        label="Pesquisar"
                        outlined
                        onKeyPress={handleKeyPress}
                        trailingIcon={
                            <MaterialIcon
                                role="button"
                                icon="search"
                            />}
                    >
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        ></Input>

                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>Na sua área</CarouselTitle>
                            <CarouselSlider {...settings}>
                                {restaurants.map((restaurant) => (
                                    <ImageCard
                                        key={restaurant.place_id}
                                        photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                                        title={restaurant.name}
                                    />
                                ))}
                            </CarouselSlider>
                        </>
                    ) : (<Loader/>)}
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.place_id}
                        restaurant={restaurant}
                        onClick={() => {
                            setPlaceId(restaurant.place_id);
                            setModalOpened(true);
                        }}
                        
                    />
                ))}
            </Container>
            <Map query={query} placeId={placeId}/>
            <Modal
                open={modalOpened}
                onClose={() => setModalOpened(!modalOpened)}
            >
                {restaurantSelected ? (
                    <>                    
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address }</ModalContent>
                        <ModalOpenHours>{restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado no momento'}</ModalOpenHours>
                    </>
                ) : (
                    <>
                        <Skeleton width="10px" height="15px"/>
                        <Skeleton width="10px" height="10px"/>
                        <Skeleton width="10px" height="10px"/>
                        <Skeleton width="10px" height="10px"/>
                    </>
                )}
            </Modal>
        </Wrapper>
    );
};

export default Home;