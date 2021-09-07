import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './component/Navbar';
import { Route, Switch } from 'react-router-dom';
import  Home  from './component/Home';
import { AddContact } from './component/AddContact';
import { EditContact } from './component/EditContact';


const App = () => {
  return (
    <div className = 'App'>
    <ToastContainer/>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component = { ()=><Home/>}/>
      <Route path ="/add">
        <AddContact/>
      </Route>
      <Route exact path ="/edit/:id">
        <EditContact/>
      </Route>
    </Switch>
    </div>
  )
}

export default App;
