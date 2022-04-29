import React from "react";
import { PhotoCardStyle } from "../Container.style";
// import { Card } from 'react-bootstrap';

export const MiniPhotoCard = (photo) => {
    const {image, id} = photo.photo
    // console.log("IMAGE :", image)
    // const parsed = image.split("/")
    // console.log("PARSED: ", parsed)

    let url = `http://localhost:8080/${image}`
    
    return(
        <PhotoCardStyle>
            <img src={url}/>            
        </PhotoCardStyle>
    )
} 