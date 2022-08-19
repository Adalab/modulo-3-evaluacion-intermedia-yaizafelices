import '../styles/App.scss';

import quotes from '../data/quotes.json';

import {useState} from 'react';

function App() {

  const [quote, setQuote] =useState(quotes);

  const [newQuote, setNewQuote] = useState({
    quote:"",
    character:"",
  })

  const [filteredQuotes, setFilteredQuotes] = useState ({
    filterQuote: "",
    filterCharacter: "",
  })

  const renderQuotesFriends = quote
  .filter((oneQuote)  => {
    return oneQuote.quote.toLowerCase().includes(filteredQuotes.filterQuote.toLowerCase());
  })

  .map((oneQuote, index) => {
    return (
    <li key={index}>
      <p>{oneQuote.quote} <span>-{oneQuote.character}</span></p>
      
    </li>)
  });

  const handleFilter = (ev) => {
    setFilteredQuotes({ ...filteredQuotes, [ev.target.id]: ev.target.value });
  };

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
        <label>
              Filtrar por frase
              <input
                type="text"
                onChange={handleFilter}
                id="filterquote"
                value={filteredQuotes.quote}
              ></input>
            </label>
            <label>
              Filtrar por personaje
              <input
                type="text"
                onChange={handleFilter}
                id="filtercharacter"
                value={filteredQuotes.character}
              ></input>
            </label>
        </section>
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

