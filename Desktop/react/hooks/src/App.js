import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/Classcounter';
import Hookcounter from './components/Hookcouter';
import Hookcountertwo from './components/Hookcountertwi';
import Hookcounterthree from './components/Hookcounterthree';
import Hookcounterfour from './components/Hookcounterfour';
import Hookcounterone from './components/Hookcounterone';
import Hooktodos from './components/Hooktodos';
import DataFetching from './components/DataFetching';
import Reduces from './components/Readucer';
import Countertwo from './components/Countertwo';
import DataFetchingTwo from './components/Hookwithaxios';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Ref from './components/Ref';
import Countercus from './components/Countercus';
import CusInput from './components/CusInput';
import PersonList from './components/demo';

function App() {
  return (
    <div className="App">
     {/* <Hooktodos /> */}
     {/* <DataFetching /> */}
    {/* <Countertwo /> */}
    {/* <DataFetching/> */}
    {/* <Todos /> */}
    {/* <Counter /> */}
     {/* <Ref />  */}
     {/* <Countercus /> */}
    {/* <CusInput /> */}
    <PersonList />
    </div>
  );
}

export default App;