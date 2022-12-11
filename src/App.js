import card from './Card.js';
import './App.css';

const flipCard = ({ img, flip, winpair }) => {
  console.log(flip);
  console.log(winpair);

  if (flip === false && winpair === false) {
    console.log('OK carte retourner');
  } else {
    console.log('carte jouer ou déjà gagner');
  }
};

function App() {
  return (
    <div className='card'>
      <span className='memory'>Memory</span>
      <div className='cardContent'>
        {card.map((event) => {
          return (
            <img
              src={event.img}
              alt='card'
              onClick={() => {
                flipCard({
                  img: event.img,
                  flip: event.flip,
                  winpair: event.winpair,
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
