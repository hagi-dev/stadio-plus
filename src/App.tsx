import React from 'react';

import Header from './components/Header/index';
import Banner from './components/Banner';
import Launch from './components/Launch/index';
import Collection from './components/Collection';
import MarketBanner from './components/MarketBanner';
import Banner3 from './components/Banner3';
import Partners from './components/Partners';
import BlogSection from './components/BlogSection';
import Artist from './components/Artist';
import TokenBanner from  './components/TokenBanner';
import Footer from './components/Footer';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.scss';

function App() {
  const [light,setLight]= useLocalStorage('light','');
  return (
    <div className={`App ${light ? 'true':""}`}>
      <Header/>
      <Banner/>
      <Launch/>
      <Collection/>
      <MarketBanner/>
      <Partners/>
      <Banner3/>
      <BlogSection/>
      <Artist/>
      <TokenBanner/>
      <Footer/>
    </div>
  );
}

export default App;
