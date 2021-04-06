import {useState, useEffect} from 'react';

const Counter = ({counter}) => (
    
    counter.map(({number,label, duration}) => {
        const [count, setCount] = useState('0');
    
        useEffect(() => {
        
            const helper = window.scrollY + document.querySelector('#offer').getBoundingClientRect().top 
            


            

             console.log(helper)
            let start = 0;
        // first three numbers from props
        const end = parseInt(number.substring(0,3))
        // if zero, return
        if (start === end) return;
    
        // find duration per increment
        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;
    
        // timer increments start counter 
        // then updates count
        // ends if start reaches end
        
        
            

              window.addEventListener('scroll', () => {
                let LazyStarter = window.scrollY + 100;
                if(LazyStarter >= helper) {
                     timer = setInterval(() => {
                        start += 1;
                        setCount(String(start) + number.substring(3))
                        if (start === end) clearInterval(timer)       
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