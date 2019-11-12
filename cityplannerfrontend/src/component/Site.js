import React from 'react'

const Site = (props) => {
    return (
        <div className = "site" onClick={() => props.clickHandler(props.siteObj)}>
            <h4>{props.siteObj.name}</h4>
            <h4>{props.siteObj.type}</h4>
            <h4>{props.siteObj.location}</h4>
            <img alt="" src={props.siteObj.image}></img>
            <h4>{props.siteObj.description}</h4>
        </div>
    )
}
export default Site 