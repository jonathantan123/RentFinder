import React from 'react';
import BackCard from './BackCard';

class ListingCard extends React.Component {

  state= {
    addClicked : false, 
    portfolio_id: 0, 
    showDetails: false 
  }

  toggleClick=() => {
    this.setState({
      addClicked: !this.state.addClicked
    })
  }

  clickHandler= (e) => {


    this.setState({
      portfolio_id: e.target.value
    })
   
  }

  showDetails=(e) => {
    console.log("working")
    this.setState({
      showDetails: !this.state.showDetails
    })
  }
  

  submitHandler= ()=> {
  
    fetch(`http://localhost:3000/portfolio_listings`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                portfolio_id: parseInt(this.state.portfolio_id, 10),
                listing_id: this.props.listing.id
              }     
                )   
        })
        this.props.routerprops.history.push("/portfolios")
  }
  
  renderDropDown=  () => {

    return this.props.portfolios.map((portfolio) => {
      return (
    <option class="ui simple dropdown item" value={portfolio.id}>{portfolio.name} </option>
      )
    })  
  }

    render() {

      return (
        <React.Fragment>
        {
          this.state.showDetails? 
          <BackCard listing={this.props.listing} showDetails={this.showDetails}/>
          :
          
          <div class="ui card">
              <div class="card_image">
                <img onClick={this.showDetails} src={this.props.listing.image} ></img>
              </div>
        
              <div class="content">
                <a class="header">${this.props.listing.price}/month</a>
                  <div class="meta">
                  <span>
                      <a>
                      <i class="bed icon"></i>
                        {this.props.listing.bedrooms}
                    </a>
                  </span>
                  <span>
                      <a>
                      <i class="bath icon" ></i>
                        {this.props.listing.bedrooms}
                    </a>
                  </span>
                  <span>
                      <a>
                      <i class="building outline icon"></i>
                        {this.props.listing.neighborhood}
                    </a>
                  </span>
                </div>
                <div class="description">
                    Address: {this.props.listing.address}
                </div>
              </div>
              <div class="extra content">
                {this.props.user_id && this.state.addClicked === false && !this.props.inPort ? <button onClick={this.toggleClick}class="ui button">Add to Portfolio</button> : <div>delete button</div>}
                {this.state.addClicked === true? 
                  <form onSubmit={this.submitHandler}> 
                        <select onChange={this.clickHandler} class="ui compact menu">
                        <option value="value" selected>Please Choose Your Profile</option>
                          {this.renderDropDown()}
                        </select>
                        <button type="submit" class="ui button small"> Add! </button>
                  </form>
                : 
                null}
   
              </div>
              <div/>
        </div>
        }
        </React.Fragment>
      )
  }
}
  export default ListingCard;
