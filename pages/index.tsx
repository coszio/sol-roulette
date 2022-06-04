import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react';

const Roulette = dynamic(() => import('../components/Roulette'), {
  ssr: false,
});

const Home: NextPage = (props) => {
  let [startSpinning, setStartSpinning] = useState(false);
  let [prize, setPrize] = useState(0);
  return (
    <>
      <div className="game">
        <Roulette
          prizeNumber={prize}
          mustStartSpinning={startSpinning} 
        />
      </div>     
    </>
  )
}

export default Home
