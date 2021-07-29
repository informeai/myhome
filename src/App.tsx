import React from 'react';
import './App.css'
import Home from './views/Home'
import Movie from './views/Movie'
import Music from './views/Music'
import Photo from './views/Photo'
import Setting from './views/Setting'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

const App = ()=> {
  return (
  	<BrowserRouter>
  		<Switch>
  			<Route exact path="/">
  				<Home/>
  			</Route>
  			<Route exact path="/movie">
				<Movie/>
  			</Route>
  			<Route exact path="/music">
				<Music/>
  			</Route>
  			<Route exact path="/photo">
  				<Photo/>
  			</Route>
  			<Route exact path="/setting">
  				<Setting/>
  			</Route>
  		</Switch>
  		
	</BrowserRouter>
  );
}

export default App;
