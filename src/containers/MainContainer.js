import React from 'react';
import SearchContainer from './SearchContainer';
import ListingsContainer from './ListingsContainer';
import PortfolioContainer from './PortfolioContainer';
import { Route, Switch } from 'react-router-dom'
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import PortfolioForm from '../components/Portfolio_form';

class MainContainer extends React.Component {

    state = { 
        allListings: [],
        portfolios:[],
        isLoading: true,
        search: "",
        listings: [], 
        newProfileId: 0
    }

    componentDidMount() {
        fetch("http://localhost:3000/listings")
            .then(resp => resp.json())
            .then(data => {
             
                this.setState({
                    allListings: data,
                    isLoading: !this.state.isLoading    
                })
            
            })  

            fetch(`http://localhost:3000/users/${this.props.user_id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    portfolios: data.data.attributes.portfolios
                    // portfolioListings: data.data.attributes.portfolioListings,
                })      
            }) 
    }
 
    /// search functionality 

    setSearch = (input) => {
        this.setState({
            search: input
        })
    }

    /// set listings display 

   setDisplay = () => {
        let listingsDisplay

        if(this.state.search === "") {
            listingsDisplay= this.state.allListings
        } else { 
            listingsDisplay = 
            this.state.allListings.filter((listing) => {
               return  listing.neighborhood.includes(this.state.search)
            })
        }
        return listingsDisplay
   }

   /// set portfolio display
    addPortfolio = (input) => {
        debugger
        console.log(input)
        this.setState({
            portfolios: [...this.state.portfolios, input.attributes], 
            newProfileId: input.id 
        })  
    }

    deletePortfolio =(portfolio) => {
       
        fetch(`http://localhost:3000/portfolios/${this.state.newProfileId}`, {method: "DELETE"})

        this.setState({
            ...this.state,
            portfolios: this.state.portfolios.filter(p => p.id !== portfolio.id)
        })

        debugger 

    }

   //// Render functions to set what to show according to route 

   renderLogin = () => {
       return <Login setUserId={this.props.setUserId} user_id={this.props.user_id}/>
   }

   renderMain = (routerProps) => {
       return  (
       <React.Fragment>
         <SearchContainer setSearch={this.setSearch}/>
         <ListingsContainer user_id={this.props.user_id} listings={this.setDisplay()} routerprops={routerProps} portfolios={this.state.portfolios}/>
       </React.Fragment>
       )
   }
   renderSignup = (routerProps) => {
       return  <SignUp routerprops={routerProps}/>
   }

   renderPortfolios =(routerProps) => {
    return <PortfolioContainer user_id={this.props.user_id} routerprops={routerProps} portfolios={this.state.portfolios} deletePortfolio={this.deletePortfolio}/>
   }

   renderNewPortfolio= (routerProps) => {
       return <PortfolioForm user_id={this.props.user_id} addPortfolio={this.addPortfolio} routerprops={routerProps}/>
   }

//-------------------------------------------------------------//
    render() {
        return ( 
            this.state.isLoading? 
            <div> Website is loading......</div>
            : 
            <div class="main-container">
                <Switch>
                 <Route  path="/login" render={this.renderLogin}/>
                 <Route  path="/signup" render={this.renderSignup}/>
                 <Route  path="/portfolios" render={this.renderPortfolios}/>
                 <Route  path="/portfolio/new" render={this.renderNewPortfolio}/>
                 <Route  exact path="/" render={this.renderMain}/>
                </Switch>
            </div>
        )
    }
  }

  export default MainContainer