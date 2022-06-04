
import { FC, useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';

const data: Array<WheelData> = [
  { option: '2', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '0.5', style: { backgroundColor: 'red' } },
  { option: '0.5', style: { backgroundColor: 'red' } },
]

const Roulette: FC<{ prizeNumber: number, mustStartSpinning: boolean }> = ({ prizeNumber, mustStartSpinning } ) => {

  return (
    <div>
      <Wheel
        mustStartSpinning={mustStartSpinning}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
      />
    </div>
  )
}

export default Roulette;
