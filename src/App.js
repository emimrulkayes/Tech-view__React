import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Review from './components/Review/Review'
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard'
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/review' element={ <Review></Review> }></Route>
        <Route path='/dashBoard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
