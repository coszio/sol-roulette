import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';

const Roulette = dynamic(() => import('../components/Roulette'), {
  ssr: false,
});

const Home: NextPage = (props) => {
  let [startSpinning, setStartSpinning] = useState(false);
  let [prize, setPrize] = useState(0);

  let spin = () => {
    setStartSpinning(true)
  }

  const randomprize = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber= randomprize(1,5)
  // setPrize(randomNumber)
  return (
    <>
      <div className="game">
        <Roulette
          prizeNumber={prize}
          mustStartSpinning={startSpinning} 
        />
        <button onClick={spin}>Spin</button>
      </div>     
    </>
  )
}

export default Home
