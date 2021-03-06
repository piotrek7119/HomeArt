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

const InnerDiv = styled.section`


            width: 100%;
            margin: 15px;
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        p {
            margin: 0 15px 20px 15px;
            text-align: center;
        }

        @media (min-width: 1024px) {
            flex-direction: row-reverse;
            justify-content: space-around;
        }
    

`

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

const MottoStyle = styled.section`
position: absolute;
bottom: 20px;
left: 0;
width: 100%;
height: auto;
z-index: 1;

@media (min-width: 1024px) {
bottom: 100px;

}

`;

const Paragraph = styled.p`
    position: relative;
    font-style: italic;
    z-index: 1;
    color: #fff;

    @media (min-width: 1024px) {
        font-size: 20px;

}

`;


const About = () => {
    return (
        <Container id='about'>
                <MottoStyle>
                    <Paragraph>
                        "Wyko??czenia wn??trz s?? sztuk?? ci??gle d??????c?? do perfekcji, kt??rej celem jest tworzenie przestrzeni idealnych dla klienta."
                    </Paragraph>
                </MottoStyle>
               
                <InnerDiv>
                <div>
                <SubjectStyled>
                    O NAS
                </SubjectStyled>
                <p>
                Jeste??my rodzinna firm??, z wieloletnim do??wiadczeniem.
                Dzi??ki temu obs??uga naszych klient??w jest w pe??ni kompleksowa. Poczynaj??c od projektu i aran??acji przez dob??r odpowiednich  materia????w do finalnej realizacji.               
                W naszej pracy stawaimy na rozw??j oraz nowoczesne technologie, kt??re pozwalaj?? na precyzyjne wyko??czenia, zgodne z wymaganiami naszych klient??w.
                Wsp????pracujemy r??wnie?? z pracownia architektoniczna oraz biurem projektowym, co umo??liwia nam wykonanie i realizacj?? nawet najbardziej skomplikowanych projektow. 
                </p>
            </div>
            <div>
                <ImageStyled
                    src='/O nas.jpeg'
                    layout='intrinsic'
                    width={600}
                    height={700}
                />
            </div>
            </InnerDiv>
        </Container>
    )
}

export default About;