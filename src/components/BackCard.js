import React from 'react';

let  BackCard = (props) => {

    return (

        <div onClick={props.showDetails} class="ui card">
                
                 <div class="ui slide masked reveal image">
                    <img src={`${props.listing.secondImage}`} class=" visible content " height="50"></img>
                    <img src={`${props.listing.thirdImage}`} class="hidden content"></img>
                </div>
                <div class="content">
                    <a class="header">Description</a>
                    <div class="meta">
                    <span>{props.listing.description}</span>
                    </div>
                </div>
            </div>
    )

}

export default BackCard