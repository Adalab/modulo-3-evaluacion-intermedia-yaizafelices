import '../styles/App.scss';

import quotes from '../data/quotes.json';

import {useState} from 'react';

function App() {

  const [quote, setQuote] =useState(quotes);

  const [newQuote, setNewQuote] = useState({
    quote:"",
    character:"",
  })

  const renderQuotesFriends = quote.map((oneQuote, index) =>{
    return (
    <li key={index}>
      <p>{oneQuote.quote} <span>-{oneQuote.character}</span></p>
      
    </li>)
  });

  const handleNewQuote = (event) => {
    setNewQuote({
      ...newQuote,
      
    })
  };


//   const[quoteFriends, setQuoteFriends] = useState("");

//   useEffect(() => {
//     fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
//     .then((response) => response.json())
//     .then((responseData) => {
//       setQuoteFriends(responseData.quoteFriends);
//     });
// }, []);


  return (
    <div>
      <header>
      <h1>Frases de Friends</h1>
      </header>
      
      <main>
        <ul>{renderQuotesFriends}</ul>
      </main>
  

    </div>
  );
}
export default App;

