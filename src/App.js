import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Review from './components/Review/Review'
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard'
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
// import { createContext, useState } from 'react';

// const CountContext = createContext();
function App() {
  // const [count, setCount] = useState(0);
  return (
    // <CountContext.Provider value={'em'}>
      
    // </CountContext.Provider> 
      <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/review' element={ <Review />} /> 
        <Route path='/dashBoard' element={<DashBoard />} />
        <Route path='/blogs' element={<Blog />} /> 
        <Route path='*' element={<NotFound />} /> 
        
      </Routes>
    </div>

  );
}

export default App;
