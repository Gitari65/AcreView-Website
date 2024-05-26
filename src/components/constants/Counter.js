import React, { useState, useEffect, useRef } from 'react';

function Counter({ endNumber }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setInterval(() => {
              setCount((prevCount) => {
                if (prevCount < endNumber) {
                  return prevCount + 1;
                } else {
                  clearInterval(timer);
                  return prevCount;
                }
              });
            }, 5);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [endNumber]);

  return <div id='counter-number' ref={counterRef}>{count}</div>;
}

export default Counter;
