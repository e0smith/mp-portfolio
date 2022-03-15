import React from "react";
import { GPTitleBox, GPTitle, PortfolioBox, Hover} from "../Container.style";
export const PortfolioCard = (port) =>{
    console.log(port.title)
    return(
        <PortfolioBox>
            <Hover>
                <GPTitleBox>
                    <GPTitle>
                        {port.title}
                    </GPTitle>
                </GPTitleBox>
            </Hover>
        </PortfolioBox>
    )
}
