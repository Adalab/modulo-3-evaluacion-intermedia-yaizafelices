import '../styles/App.scss';

import quotes from '../data/quotes.json';

import {useState} from 'react';

function App() {

  const [quote, setQuote] =useState(quotes);

  const [newQuote, setNewQuote] = useState({
    quote:"",
    character:"",
  })

  const [filteredQuote, setFilteredQuote] = useState("");

  const [filteredCharacter, setFilteredCharacter] = useState("Todos");
 

  const handleFilterQuote = (event) => {
    event.preventDefault();
    setFilteredQuote(event.target.value);
  };

  const handleFilterCharacter = (event) => {
    setFilteredCharacter(event.target.value);
  };

  const renderQuotesFriends = quote
  .filter((oneQuote)  => {
    return oneQuote.quote.toLowerCase().includes(filteredQuote.toLowerCase());
  })

  // .filter((oneQuote)  => {
  //   return oneQuote.character.toLowerCase().includes(filteredCharacter.toLowerCase());
  // })

  .map((oneQuote, index) => {
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
        <label>
              Filtrar por frase
              <input
                type="text"
                onChange={handleFilterQuote}
                id="filteredQuote"
                value={filteredQuote}
              ></input>
            </label>
            <label>
              Filtrar por personaje
              <select
                name="filteredCharacter"
                onChange={handleFilterCharacter}
                id="filteredCharacter"
                value={filteredCharacter}
              >
                <option value="">Todos</option>
                <option value="Ross">Ross</option>
                <option value="Monica">Monica</option>
                <option value="Joey">Joey</option>
                <option value="Phoebe">Phoebe</option>
                <option value="Chandler">Chandler</option>
                <option value="Rachel">Rachel</option>
              </select>
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

