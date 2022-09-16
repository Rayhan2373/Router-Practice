import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact.js/Contact';
import Details from './Components/FdDetails/Details';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/friends' element={<Friends/>}></Route>
          <Route path='/posts' element={<Posts></Posts>}>
              <Route path='post/:id' element={<Post></Post>}></Route>
          </Route>
        <Route path='/friends/friend/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
