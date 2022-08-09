import "./Intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const elmentRef = useRef();
  useEffect(() => {
    init(elmentRef.current, {
      showCursor: false,
      strings: ["Front end Developer", "Back end Developer"],
    });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hey There ,I'm</h2>
          <h1>Mostafa Shaaban</h1>
          <h3>
            Freelancer <span ref={elmentRef}></span>
          </h3>
          <a href='#portfolio'>
            <img src='assets/down.png' alt='#dk' />
          </a>
        </div>
      </div>
    </div>
  );
}
