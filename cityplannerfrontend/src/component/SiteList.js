import React from 'react'
import Site from './Site'
import NewSiteForm from './NewSiteForm'
import SiteSearch from './SiteSearch'

class SiteList extends React.Component{
    state = {
        sites: [],
        searchTerm: ""
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/sites/")
        .then(response => response.json())
        .then(data => this.setState({
            sites: data
        }))
    }

    createNewSite = (siteObj) => {
        this.persistSite(siteObj)
    }

    persistSite = (siteObj) =>  {
        fetch("http://localhost:3000/api/v1/sites/", {
            method:"POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(
                siteObj
            )
        })
        .then(response => response.json())
        .then(siteObj => {
            let newArray = [...this.state.sites, siteObj]
            this.setState({
                sites: newArray
            })
        })
    }

    searchChangeHandler = (event) => {
        let newString = event.target.value
        this.setState({
            searchTerm: newString
        })
    }

    render(){
        let filteredSites = this.state.sites.filter(site => site.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
        let sitesArray = filteredSites.map(siteObj => <Site siteObj={siteObj} clickHandler={this.props.clickHandler}/>)
        return(
            <div className = "site-list">
                <NewSiteForm createNewSite={this.createNewSite}/>
                <SiteSearch searchterm = {this.state.searchTerm} searchChangeHandler = {this.searchChangeHandler}/>
                <h3>New York City Site List</h3>
                {sitesArray}
            </div>
        ) 
    }
}

export default SiteList