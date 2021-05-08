import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";

import Hero from "../../components/heroImage"
import Layout from "../../layout/layout";
import ListSec from "../../components/ListSec"
import {Mariacka, Ruda, Chorzow, Zaleze} from "../../data/data"
import { IdContext } from "../../context/idContext";
import {allItems} from "../../data/data"


const Container = styled.section`

    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin: 15px;
    }

  

`;
const realizationsMore = () => {

    const {isIdNumber} = useContext(IdContext);
    
    const [isValue, setIsValue] = useState([])
    const [isName, setIsName] = useState("")
    const [isImage, setIsImage] = useState("");


   useEffect(() => {
      if(isIdNumber === 0) {
        setIsValue(Zaleze)
        setIsName(allItems[0].name)
        setIsImage(allItems[0].image)
      }
      if(isIdNumber === 1) {
        setIsValue(Mariacka)   
        setIsName(allItems[1].name)
        setIsImage(allItems[1].image)
      }
      if(isIdNumber === 2) {
        setIsValue(Chorzow)   
        setIsName(allItems[2].name)
        setIsImage(allItems[2].image)
      }
      if(isIdNumber === 3) {
        setIsValue(Ruda)   
        setIsName(allItems[3].name)
        setIsImage(allItems[3].image)
      }
   })


    return (
        <Layout>
            <Container>
              <Hero image={isImage}>{isName}</Hero>
                <ListSec items={isValue}/>
            </Container>
        </Layout>
    )
}

export default realizationsMore;
