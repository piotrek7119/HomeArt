import {useState, useEffect} from 'react';

const Counter = ({counter}) => (
    
    counter.map(({number,label, duration}) => {
        const [count, setCount] = useState('0');
    
        useEffect(() => {
        
            const helper = window.scrollY + document.querySelector('#offer').getBoundingClientRect().top 

            let start = 0;
        // first three numbers from props
        const end = parseInt(number.substring(0,3))
        // if zero, return
        if (start === end) return;
    
        // find duration per increment
        const totalMilSecDur = parseInt(duration);
            const incrementTime = (totalMilSecDur / end) * 1000;
        let timer;
        // timer increments start counter 
        // then updates count
        // ends if start reaches end




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
          
          
        // dependency array
      }, [number, duration]);

        return (
            <h2>
                {count} {label}
            </h2>
        )
    })
)

export default Counter;