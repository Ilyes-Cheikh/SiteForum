import logo from './logo.svg';
import './Assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {useEffect } from 'react';
import Home from './Pages/Home'

import Auditorium from './Components/Auditorium';
import Articles from "./Pages/Articles"
import Article from "./Pages/ArticlePage"


import Programmepage from './Pages/Programmepage';

import Navbar from './Components/Navbar';
import { Nav } from 'react-bootstrap';
import Inscription from './Pages/Inscription'

import BlogEditor from './Pages/BlogEditor';
import BlogDelete from './Pages/BlogDelete';
const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader");
const addClass = () => loader.classList.add("loader-hide");

function App() {
  
  useEffect(() => {
     showLoader();
    addClass();
  }, []);
  
  return (
  <div>
  
   <Router>
   <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>

          <Route exact path="/programme"><Programmepage/></Route>

          <Route exact path="/articles"><Articles/></Route>
          <Route exact path="/articles/:articleId"><Article/></Route>



          <Route exact path="/inscription"><Inscription/></Route>

       

          <Route exact path="/ejeBLog"><BlogEditor/></Route>
          <Route exact path="/ejeDelete"><BlogDelete/></Route>
  
          <Route exact path="/auditorium"><Auditorium/></Route>

        </Switch>
      </Router> 
  </div>
  );
}

export default App;
