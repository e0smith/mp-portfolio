import React from "react";
import { PhotoCardStyle } from "../Container.style";

export const MiniPhotoCard = (photo) => {
    const {image, id} = photo
    return(
        <PhotoCardStyle>
            <img src={image} alt="..."/>
        </PhotoCardStyle>
    )
} 