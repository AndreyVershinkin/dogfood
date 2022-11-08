import CardList from '../CardList/card-list';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Logo from '../Logo/logo';
import Search from '../Search/search';
import SearchInfo from '../SearchInfo/index';
import Sort from '../Sort/sort';
import './index.css';
import data from '../../assets/data.json';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');

  const hendleRequest = () => {
    const filterCards = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setCards(filterCards);
  }

  useEffect(() => {
    hendleRequest()
  }, [searchQuery])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    hendleRequest()
  }


  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  }

  return (
    <>
      <Header>
        <>
          <Logo className="logo logo_place_header" href="/" />
          <Search onSubmit={handleFormSubmit} onInput={handleInputChange} />
        </>
      </Header>
      <main className='content container'>
        <SearchInfo searchCount={cards.length} searchText={searchQuery} />
        <Sort />
        <div className='content__cards'>
          <CardList goods={cards} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;