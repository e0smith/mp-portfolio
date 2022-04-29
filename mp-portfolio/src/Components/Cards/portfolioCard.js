import React from "react";
import { GPTitleBox, GPTitle, PortfolioBox, Hover} from "../Container.style";
import { MiniPhotoCard } from "./miniPhotoCard";
import { useSelector } from "react-redux";
import PhotoCard from "./photoCard";
export function PortfolioCard(photos){

    // const photoArray = useSelector(state => state.photos);

    // console.log(photoArray)
    // let photos = photo.map(photo => {
    //     (photo.portfolio_id == id ?  MiniPhotoCard(photo) : x = photo)})

    // let photos = photo.photo.find(p => p.portfolio_id === port.params.id)

    // let portList = port.map((p) => {return(
    //     <PortfolioBox>
    //         <Hover>
    //             <GPTitleBox>
    //                 <GPTitle>
    //                     {p.title}
    //                     {/* <MiniPhotoCard photo={photos}/> */}
    //                 </GPTitle>
    //             </GPTitleBox>
    //         </Hover>
    //     </PortfolioBox>
    // )})

    console.log(photos.photos)
    const portfolioArray = useSelector(state => state.portfolios.portfolios);
    let listOfPortfolios = portfolioArray.map((port) => {return(
        <PortfolioBox>
            <Hover>
                <GPTitleBox>
                    <GPTitle>
                        {port.title}
                    </GPTitle>
                </GPTitleBox>
                {photos.photos.map((p) => {if(p.portfolio_id === port.id){
                    return(<MiniPhotoCard photo={p} />)
                }})}
            </Hover>
        </PortfolioBox>
    )})

    return(
        <div>
            {listOfPortfolios}
        </div>
    )
}
