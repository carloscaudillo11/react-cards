import { Data } from '../constants';
import Card from './Card';

const Cards = () => {
  return (
    <>
      {Data.map((card, index) => (
        <Card
          key={index}
          lang={card.lang}
          img={card.url}
          fcolor={card.fcolor}
          scolor={card.fcolor}
        />
      ))}
    </>
  );
};

export default Cards;
