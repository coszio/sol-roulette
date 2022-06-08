
import { FC } from 'react';
import { Wheel } from 'react-custom-roulette'
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

interface Props {
  prizes: Array<number>,
  prizeNumber: number,
  mustStartSpinning: boolean,
  onStopSpinning: (() => any)
}
const Roulette: FC<Props> = ({ prizes, prizeNumber, mustStartSpinning, onStopSpinning }) => {
  const data = prizes.map((prize) => {
    return {
      option: prize.toString(),
    };
  });

  return (
    <div>
      <Wheel
        mustStartSpinning={mustStartSpinning}
        prizeNumber={prizeNumber}
        onStopSpinning={onStopSpinning}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428', '#ac812b', '#931f6c', '#dba050']}
        textColors={['#ffffff']}
      />
    </div>
  )
}

export default Roulette;
