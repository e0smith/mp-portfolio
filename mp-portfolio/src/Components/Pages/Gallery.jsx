import { Container, NameMark, GSection, GTitleBox, Gtitle, GPortfolio, Hover, PortfolioBox } from "../Container.style"
import { PortfolioCard } from "../Cards/portfolioCard";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { MiniPhotoCard } from "../Cards/miniPhotoCard";

export default function Gallery(){
    const portfolioArray = useSelector(state => state.portfolios.portfolios);
    let listOfPortfolios = portfolioArray.map(port => PortfolioCard(port))

    let photoArray = useSelector(state => state.photos.photos)
    let listOfPhotos = photoArray.map(photo => photo)
    

    return(
        <Container>
            <NameMark>Megan Proctor</NameMark>
            <GSection>
                <GTitleBox>
                    <Gtitle>GALLERY</Gtitle>
                </GTitleBox>
                <GPortfolio>
                    {listOfPortfolios}
                        <PortfolioCard photos={listOfPhotos} />
                </GPortfolio>
            </GSection>
        </Container>
    )
}
