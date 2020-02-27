import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import ListingCard from '../components/ListingCard ';

class PortfolioContainer extends React.Component {

    state = {
        listings: [], 
        clickedViewed: false
    }

    setType = (e) => {
        debugger

        fetch(`http://localhost:3000/portfolios/${e.target.value}`)
            .then(resp => resp.json())
            .then(data => { 
                this.setState({
                    listings: data.data.attributes !== undefined ? data.data.attributes.listings : [],
                    clickedViewed : true
                })
            })
    }

    toggleClicked = () => {
        console.log("working")
        this.setState({
            clickedViewed: !this.state.clickedViewed
        })
    }

    redirectNewProfile=() => {
        this.props.routerprops.history.push(`/portfolio/new`);
    }

 //// Render either portfolio cards or the corresponding listings 

    renderPortfolios= ()=> {
        
       return  this.props.portfolios.map((portfolio) => {
            return <PortfolioCard key={portfolio.id} portfolio={portfolio} setType={this.setType} deletePortfolio={this.props.deletePortfolio} />
        })
    }

    renderListings = () => {  

        return (
        this.state.listings.map((listing) => {
            return <ListingCard inPort={true} key={listing.id} listing={listing} user_id={this.props.user_id} clicked={this.state.clickedViewed} />
        })
        )
    }

    render() {
        
        return (  
            <React.Fragment>
            {this.state.clickedViewed? ( 
                <div className="listing-container">           
                    <div class="ui link cards">
                        {this.renderListings ()}
                    </div>
                    <br></br>
                    <button class="ui button" onClick={this.toggleClicked}>Back</button>
                </div>
            )
            :(
                <div className="portfolio-container">
                    <div class="ui cards">
                    {this.renderPortfolios()}
                    </div>
                    <br></br>
                    <br></br>
                    <button class="ui button" onClick={this.redirectNewProfile}>Create New</button>
                </div>)
        }
         </React.Fragment>)
    }
  }

  export default PortfolioContainer;