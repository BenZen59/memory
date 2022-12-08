import card from './Card.js';
import './App.css';

function App() {
  return (
    <div className='card'>
      <span className='memory'>Memory</span>
      <div className='cardContent'>
        {card.map((event) => {
          return <img src={event} alt='card' />;
        })}
      </div>
    </div>
  );
}

export default App;
