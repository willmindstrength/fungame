import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React, { useState } from 'react';

const sectors = [ "Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5", "Lose" ];
  

export default function Home() {
  
  const [rotation, setRotation] = useState(0);
  const [prize, setPrize] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    setIsSpinning(true);
    setRotation(rotation + 360 + Math.floor(Math.random() * 360));

    setTimeout(() => {
      setIsSpinning(false);
      setPrize(sectors[Math.floor(Math.random() * sectors.length)]);
    }, 1000);
  };
  
  return (
    <div className="container">
      <Head>
        <title>FunFunFun!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    
        <div>
          <div id="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
            <div id="inner-wheel">
              <p id="prize-text">{prize}</p>
            </div>
          </div>
          <button id="spin-button" onClick={spinWheel} disabled={isSpinning}>
            {isSpinning ? 'Spinning...' : 'Spin'}
          </button>
        </div>
   

    
        
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
