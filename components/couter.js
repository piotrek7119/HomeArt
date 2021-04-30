import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';



const Container = styled.section`

    width: 100%;

    margin:0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

 h2 {
     margin: 0;
 }

`;



const Counter = ({counter}) => (

    counter.map(({number,label, duration, id}) => {
        const [count, setCount] = useState('0');

        useEffect(() => {

            const helper = window.scrollY + document.querySelector('#offer').getBoundingClientRect().top 

            let start = 0;
        const end = parseInt(number.substring(0,3))
        if (start === end) return;

        const totalMilSecDur = parseInt(duration);
            const incrementTime = (totalMilSecDur / end) * 1500;
        let timer;




              window.addEventListener('scroll', () => {
                let LazyStarter = window.scrollY;
                if(LazyStarter >= helper) {
                     timer = setInterval(() => {
                        if (start !== end) {
                            start += 1;
                            setCount(String(start) + number.substring(3))
                        } else {
                            clearInterval(timer)
                        }


                     }, incrementTime)
                }
            })

        }, [number, duration]);

        return (
            <Container>
                {id == 0 || id == 1 ? (
                    <h2>
                    {count} m2
                     </h2>
                ) : (
                <h2>
                    {count}
                </h2>
                )}
                <p>
                    {label}
                </p>
            </Container>
        )
    })
)

export default Counter;