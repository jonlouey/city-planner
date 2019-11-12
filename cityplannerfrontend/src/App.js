import React from 'react';
import './App.css';
import SiteList from './container/SiteList'
import TripList from './container/TripList'
import HeroImage from './container/HeroImage'

class App extends React.Component{

  state={
      myList: [],
      currentUser: null
  }

  addTripSite = (siteObj) => {
    let newArray = this.state.myList.includes(siteObj) ? [...this.state.myList] : [...this.state.myList, siteObj] 
    this.setState({
      myList: newArray
    })
  }

  removeTripSite = (siteObj) => {
    let newArray = [...this.state.myList].filter(site => site.name !== siteObj.name)
    this.setState({
      myList: newArray
    })
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
        <HeroImage/>
        <SiteList clickHandler={this.addTripSite}/>
        <TripList myList = {this.state.myList} clickHandler={this.removeTripSite}/>
      </div>
    )
  }
}

export default App;