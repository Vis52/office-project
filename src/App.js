import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from  'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Header/>
      <Body/>
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

      
      </BrowserRouter>
    </div>
  )
}

export default App;
