import { useState } from 'react'; // tips: Importer fra react og andre bibliotek først

import Alert from './components/Alert'; // tips: Importer så dine egen filer
import Food from './components/Food'; // tips: Sorter gjerne alle imports alfabetisk i større prosjekt
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';

function App() {
  const [inputValue, setInputValue] = useState(''); // tips: Ha alle state i toppen
  const [onClick, setOnClick] = useState(false);

  const updateInputValue = (event) => {
    event.preventDefault();
    console.log('Teksten endres til:', event.target.value);
    setInputValue(event.target.value);
  };

  const updateOnClick = () => {
    console.log('Clicked');
    setOnClick(!onClick);
  };

  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <>
      <Wrapper>
        <MyComponent title="Works good" />
        <Food food={food} />
      </Wrapper>
      <Alert
        inputValue={inputValue}
        placeholder="Skriv noe her.."
        updateInputValue={updateInputValue}
        updateOnClick={updateOnClick}
      />
      {onClick && <h1>{inputValue}</h1>}
    </>
  );
}

export default App;
