import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from  'react-router-dom';
import Our_Products from './components/products/Our_Products';
import News from './components/newsletter/News.js';
import Best_Selling from './components/products/Best_Selling.js';
import Contact from './components/newsletter/Contact.js';
// import Slickk from './components/slick/Slickk.js';
function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      
      <Header/>
      <Body/>
      
      <Our_Products/>
      <Best_Selling/>
      {/* <Slickk/> */}
      <News/>
      <Contact/>
      <Footer/>
      {/* <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/our products' element={<ProductCategory category='our products'/>}/>
        <Route path='/best selling products' element={<ProductCategory category='best selling products'/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/manufacturing' element={<Manufacturing/>}/>
        <Route path='/packazine' element={<Packazine/>}/>
        <Route path='/without plastic' element={<PackazineCategory category='without plastic'/>}/>
        <Route path='/environment friendly' element={<PackazineCategory category='environment friendly'/>}/>
      </Routes> */}

      
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App;
