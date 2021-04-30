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
            text-align: center;
        }
    }
`;

const ImageStyled = styled(Image)`
width: 100%;
height: 100vh;
object-fit: cover;
object-position: 0;

`;

const About = () => {
    return (
        <Container id='about'>
            <div>
                <h2>
                    O NAS
                </h2>
                <p>
                Jesteśmy rodzinna firmą, z wieloletnim doświadczeniem.
                Dzięki temu obsługa naszych klientów jest w pełni kompleksowa. Poczynając od projektu i aranżacji przez dobór odpowiednich  materiałów do finalnej realizacji.               
                W naszej pracy stawaimy na rozwój oraz nowoczesne technologie, które pozwalają na precyzyjne wykończenia, zgodne z wymaganiami naszych klientów.
                Współpracujemy również z pracownia architektoniczna oraz biurem projektowym, co umożliwia nam wykonanie i realizację nawet najbardziej skomplikowanych projektow. 
                </p>
            </div>
            <div>
                <ImageStyled
                    src='/O nas.jpeg'
                    layout='responsive'
                    width={300}
                    height={250}
                />
            </div>
            
        </Container>
    )
}

export default About;