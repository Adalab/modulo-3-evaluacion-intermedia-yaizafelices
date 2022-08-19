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
      [event.target.id]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      setQuote([...quote, newQuote]);
      setNewQuote({
        quote:"",
        character:"",
      })
  }



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
        <section>
          <ul>{renderQuotesFriends}</ul>
        </section>
        <section>
          <h2>Añadir una nueva Frase</h2>
          <form>
          <label>
              Frase
              <input
                type="text"
                onChange={handleNewQuote}
                id="quote"
                value={newQuote.quote}
              ></input>
            </label>
            <label>
              Personaje
              <input
                type="text"
                onChange={handleNewQuote}
                id="character"
                value={newQuote.character}
              ></input>
            </label>
            <button onClick={handleSubmit} >Añadir una nueva frase</button>
          </form>
        </section>
      </main>
  

    </div>
  );
}
export default App;

