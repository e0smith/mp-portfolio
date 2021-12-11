import styled from "styled-components";
import img from "../Components/Photos/Home2.jpeg"
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #2d2d2d;
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

export const FormBox = styled.article`
    width:200px;
    padding:20rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
`
export const SubBodyForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InputText = styled.input`
    width: 40rem;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`
export const TextArea = styled.textarea`
    width: 40rem;
    height: 300px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
`

export const SubmitButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    text-align: center;
    position: relative;
`
export const InfoBox = styled.article`
    background-color: #ffff;
    border: 1px solid;
    margin: 10px 0px;
    padding: 10rem 1rem;
    text-align: center;
    position: relative;
    text-color: black;
`