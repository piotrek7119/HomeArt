import {useState, useEffect} from 'react';

const Counter = ({counter}) => (
    
    counter.map(({number,label, duration}) => {
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
            <h2>
                {count} {label}
            </h2>
        )
    })
)

export default Counter;