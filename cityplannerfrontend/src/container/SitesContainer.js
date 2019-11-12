import React from 'react';
import SiteList from '../component/SiteList'
import TripList from '../component/TripList'
import HeroImage from '../component/HeroImage'

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