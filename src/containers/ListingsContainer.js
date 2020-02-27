import React from 'react';
import ListingCard from '../components/ListingCard ';
class ListingsContainer extends React.Component {

    renderListings = () => {
        
        return (
        this.props.listings.map((listing) => {
            let flag = false
        
            // if(this.props.portfolios.find(port => port.listings.find(list =>  list.id === listing.id) !== -1) !== -1){
            //     flag = true
            // }
            return <ListingCard inPort={flag} key={listing.id} listing={listing} user_id={this.props.user_id} routerprops={this.props.routerprops} portfolios={this.props.portfolios}/>
        })
        )

    }


    render() {
        return (  
            <div class="ui stackable grid">  
                <div class="four wide column">       
                <div class="ui cards">
                {this.renderListings ()}
                </div>
                </div>
            </div>
        
       
        )
    }
  }


  export default ListingsContainer;
