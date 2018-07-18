import React, { Component } from 'react';
import './App.css';
import Header from './component/header' ; 
import Footer from './component/footer' ; 
import Content from './component/content' ;
function Hello(props) {
  return <h1>Ahoy! {props.name}</h1>
}

const MyStatelessComponent = ({title, message}) => (
  <div>
    <h1>{title}</h1>
    <p>{message}</p>
    <p>-------------------------------------------</p>
  </div>
)


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <Content message="This is message from app to Content"/>
        
        <Hello name = " Stateless is real!"/>
        
        <MyStatelessComponent title = "Stateless ES6" message="The Stateless ES6 is Goodgame real play god game !!"/>
        
        <Footer />
      </div>
    );
  }
}


export default App;