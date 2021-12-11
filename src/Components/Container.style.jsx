import styled from "styled-components";
import img from "../Components/Photos/Home2.jpeg"
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`

export const HomeBackground = styled.div`
    border: none;
    background: url(${img}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const NameMark = styled.mark`
    font-family: 'Roboto', "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-weight: 400;
    color: rgb(155, 155, 155);
    background: none;
    letter-spacing: 0;
    margin-left: .5rem;
    margin-top: .5rem;
    position: sticky;
    z-index: 9999;
    display: inline-block;
`