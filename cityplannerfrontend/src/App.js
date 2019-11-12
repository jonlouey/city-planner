import React from 'react';
import './App.css';
import SitesContainer from './container/SitesContainer'

class App extends React.Component{

  state={
      currentUser: null
  }

  setCurrentUser = (response) => {
    localStorage.setItem("token", response.jwt)
    this.setState({
      currentUser: response.user
    })
  }

  render(){
    return (
      <div className="App">
        <SitesContainer/>
      </div>
    )
  }
}

export default App;