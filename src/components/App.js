import '../styles/App.scss';

// import quotes from '../data/quotes.json';
import getDataApi from '../services/Api';

import {useState, useEffect} from 'react';

function App() {

  const [quote, setQuote] =useState([]);
  const [newQuote, setNewQuote] = useState({
    quote:"",
    character:"",
  })
  const [filteredQuote, setFilteredQuote] = useState("");
  const [filteredCharacter, setFilteredCharacter] = useState("all");
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(()=>{
    getDataApi().then(data=>{
      setQuote(data);
    });
  },[]);
 

  const handleFilterQuote = (event) => {
    event.preventDefault();
    setFilteredQuote(event.target.value);
  };

  const handleFilterCharacter = (event) => {
    event.preventDefault();
    setFilteredCharacter(event.target.value);
  };

  const renderQuotesFriends = quote
  .filter((oneQuote)  => {
    return oneQuote.quote.toLowerCase().includes(filteredQuote.toLowerCase());
  })

  .filter((oneCharacter)  => {
    if (filteredCharacter === 'all'){
      return true;
    }
    return oneCharacter.character === filteredCharacter;
    
  })

  .map((oneQuote, index) => {
    return (
    <li key={index}>
      <p>{oneQuote.quote} <span>-{oneQuote.character}</span></p>
      
    </li>)
  });

  const noQuote= ()=>{
    if(renderQuotesFriends.length ===0){
      return <p>{`Lo siento no existe la frase: ${filteredQuote}`}</p>
    }
  }



  const handleNewQuote = (event) => {
    setNewQuote({
      ...newQuote,
      [event.target.id]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newQuote.quote !== '' && newQuote.character !== '') {
      setQuote([...quote, newQuote]);
      setNewQuote({
        quote:"",
        character:"",
      })
      setErrorMsg('');
  }
  else{
    setErrorMsg(
      <p>Debes de rellenar ambos campos para poder añadir una frase </p>
    )
  }
}



  return (
    <div>
      <header>
      <h1>Frases de Friends</h1>
      </header>
      
      <main>
        <section>
          <form>
            <label htmlFor='filteredQuote'>
                  Filtrar por frase
                  <input
                    type="text"
                    onChange={handleFilterQuote}
                    id="filteredQuote"
                    value={filteredQuote}
                  ></input>
              </label>
          </form>
          <form>
            <label htmlFor='filteredCharacter'>
              Filtrar por personaje
              <select
                name="filteredCharacter"
                onChange={handleFilterCharacter}
                id="filteredCharacter"
                value={filteredCharacter}
              >
                <option value="all">Todos</option>
                <option value="Ross">Ross</option>
                <option value="Monica">Monica</option>
                <option value="Joey">Joey</option>
                <option value="Phoebe">Phoebe</option>
                <option value="Chandler">Chandler</option>
                <option value="Rachel">Rachel</option>
              </select>
            </label>
          </form>
        </section>
        <section>
          <ul>{renderQuotesFriends} {noQuote()}</ul>
        </section>
        <section>
          <h2>Añadir una nueva Frase</h2>
          {errorMsg}
          <form>
          <label htmlFor='quote'>
              Frase
              <input
                type="text"
                onChange={handleNewQuote}
                id="quote"
                value={newQuote.quote}
              ></input>
            </label>
            <label htmlFor='character'>
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

