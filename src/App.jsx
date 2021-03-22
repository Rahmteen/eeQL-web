import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing/Landing.jsx';
import NavBar from './Components/NavBar/NavBar.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
      return (
        <Switch>
            <Route path='/' component={Landing}/>
        </Switch>
)}

export default App;