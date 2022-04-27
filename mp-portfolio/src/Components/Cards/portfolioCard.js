import React from "react";
import { GPTitleBox, GPTitle, PortfolioBox, Hover} from "../Container.style";
import { MiniPhotoCard } from "./miniPhotoCard";
import { useSelector } from "react-redux";
import PhotoCard from "./photoCard";
export function PortfolioCard(port, photo){

    const { title, id } = port

    // const photoArray = useSelector(state => state.photos);

    // console.log(photoArray)
    // let photos = photo.map(photo => {
    //     (photo.portfolio_id == id ?  MiniPhotoCard(photo) : x = photo)})

    console.log("photo = ", photo)
    return(
        <PortfolioBox>
            <Hover>
                <GPTitleBox>
                    <GPTitle>
                        {title}
                    </GPTitle>
                </GPTitleBox>
            </Hover>
        </PortfolioBox>
    )
}
