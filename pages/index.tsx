import 'bootstrap/dist/css/bootstrap.min.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Button from 'react-bootstrap/Button'
import { InputGroup, FormControl } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import ModalOk from '../components/ModalOk';
import { airdropSolToPubKey } from '../src/solana';

const Roulette = dynamic(() => import('../components/Roulette'), {
  ssr: false,
});

const Home: NextPage = (props) => {
  let [startSpinning, setStartSpinning] = useState(false);
  let [prize, setPrize] = useState(0);
  let [account, setAccount] = useState("");
  let [showModal, setShowModal] = useState(false);
  let [modalHeader, setModalHeader] = useState("");
  let [modalBody, setModalBody] = useState("");

  let spin = () => {
    setStartSpinning(true);
    setPrize(randomPrize);
  }

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomPrize = randomNumber(1, 5)
  const prizes = [
    0.25,
    0.5,
    0.75,
    1,
    2,
  ]

  const rouletteFinished = async () => {
    setStartSpinning(false);
    let sol = prizes[prize];

    try{
      await airdropSolToPubKey(account, sol) 
      setModalHeader("You won!")
      setModalBody(`${prizes[prize]} SOL have been transferred to your account`)
    } catch(err) {
      setModalHeader("There was an error")
      setModalBody(`${err}`)
    }

    setShowModal(true);
  }

  return (
    <>
      <div className={styles.main}>
        <InputGroup>
          <InputGroup.Text>Public key</InputGroup.Text>
          <FormControl placeholder='f3efw45t434wg455...' onChange={e => {
            console.log(e.target.value);
            setAccount(e.target.value);
          }
          }/>
        </InputGroup>
        <Roulette
          prizes={prizes}
          prizeNumber={prize}
          mustStartSpinning={startSpinning}
          onStopSpinning={rouletteFinished}
        />
        <Button onClick={spin}>Spin</Button>
        <ModalOk
          show={showModal}
          onHide={() => setShowModal(false)}
          heading={modalHeader}
          body={modalBody}
        />
      </div>     
    </>
  )
}

export default Home
