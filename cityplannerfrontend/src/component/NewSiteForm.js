import React from 'react'

class NewSiteForm extends React.Component{

    state={
        name: "",
        type: "",
        location: "",
        image: "",
        description: ""
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        let siteObj = this.state
        this.props.createNewSite(siteObj)
        this.setState({
                name: "Name",
                type: "Type",
                location: "Location",
                image: "Image",
                description: "Description"
        })
    }

    render(){
        return(
            <div>
                <h3>Add a New Site</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder = "Name"        name="name"        value={this.state.name}        onChange={this.changeHandler}></input>
                    <input type="text" placeholder = "Type"        name="type"        value={this.state.type}        onChange={this.changeHandler}></input>
                    <input type="text" placeholder = "Location"    name="location"    value={this.state.location}    onChange={this.changeHandler}></input>
                    <input type="text" placeholder = "Image"       name="image"       value={this.state.image}       onChange={this.changeHandler}></input>
                    <input type="text" placeholder = "Description" name="description" value={this.state.description} onChange={this.changeHandler}></input>
                    <input type="submit"></input>
                </form>
           </div>
        )
    }

}



export default NewSiteForm 