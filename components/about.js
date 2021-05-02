import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.section`
scroll-margin-top: 80px;

    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        div {
            width: 90%;
            margin: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        p {
            margin: 0 15px 20px 15px;
            text-align: center;
        }
    
`;


const ImageStyled = styled(Image)`
width: 100%;
height: 100vh;
object-fit: cover;
object-position: 0;

`;

const SubjectStyled = styled.h2`

position: relative;

&::before {
    content: '';
    position: absolute;
    right: 120%;
    top: 50%;
    height: 3px;
    width: 40px;
    background: #000;

}


&::after {
    content: '';
    position: absolute;
    left: 120%;
    top: 50%;
    height: 3px;
    width: 40px;
    background: #000;
}

`;

const MottoStyle = styled.div`
    margin: 20px;
    padding: 1em;
    border: 0.25em solid #000;
    position: relative;


&::before {
    content: '';
    display: block;
    position: absolute;
    background: #fff;
    top: -0.3em; // let it overlap a bit to prevent thin line which could appear during scaling in some browsers etc.
    bottom: -0.3em;
    left: 1em;
    right: 1em;

}


&::after {
    content: '';
    display: block;
    position: absolute;
    background: #fff;
    left: -0.3em;
    right: -0.3em;
    top: 1em;
    bottom: 1em;
}
`;

const Paragraph = styled.p`
    position: relative;
    font-style: italic;
    z-index: 1;

`;

const About = () => {
    return (
        <Container id='about'>
            <div>
                <MottoStyle>
                    <Paragraph>
                        "Wykończenia wnętrz są sztuką ciągle dążącą do perfekcji, której celem jest tworzenie przestrzeni idealnych dla klienta."
                    </Paragraph>
                </MottoStyle>
                <SubjectStyled>
                    O NAS
                </SubjectStyled>
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