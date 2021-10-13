import React, {useEffect, useState} from "react";

import { IMG, Title } from "./style";

import Skeleton from "../Skeleton";

const ImageCard = ({photo, title}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo]);

    return (
        <>
            {imageLoaded ? (            
                <IMG photo={photo}>
                    <Title>
                        {title}
                    </Title>
                </IMG>
            ) : (
                <Skeleton width="90px" height="90px"/>
            )}
        </>
    );
};

export default ImageCard;