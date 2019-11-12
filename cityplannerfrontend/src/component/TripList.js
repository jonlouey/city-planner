import React from 'react'
import Site from './Site'

class TripList extends React.Component{

    render(props){
        let tripArray = this.props.myList.map(siteObj => <Site siteObj={siteObj} clickHandler={this.props.clickHandler} />)
        return (
            <div className = "trip-list">
                <h3>My Trip</h3>
                {tripArray}
            </div>
        )
    }

}

export default TripList