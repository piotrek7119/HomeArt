import React from "react";
import styled from "styled-components";
import Image from "next/image";


const Container = styled.section`

    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    div {

        width: 100%;
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
            
        p {
            margin: 0 15px 20px 15px;
        }
    }
    
`;

const Offer = () => {
    return (
        <Container id='offer'>
            <div>
                <h2>
                    OFERTA
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra diam at lectus pellentesque congue. Nam vel odio quis odio eleifend mollis. Maecenas condimentum, nibh sed consectetur tempus, justo nunc aliquam sapien, ut suscipit mauris nisl at mi. In ultrices cursus fermentum. 
                </p>
            </div>
            <div>
                <Image
                    src='/Mariacka 1.jpg'
                    layout='intrinsic'
                    width={4032}
                    height={2268}
                />
            </div>
            
        </Container>
    )
}

export default Offer;