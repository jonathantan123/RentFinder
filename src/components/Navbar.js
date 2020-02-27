import React from 'react';

class Navbar extends React.Component {

    logout= ()=> {
        this.props.setUserId(0)
    }

    redirectSignup = () => {
            this.props.routerprops.push(`/signup`);
        }
    redirectLogin = () => {
            this.props.routerprops.push(`/login`);
        }
    redirecthome = () => {
            this.props.routerprops.push(`/`);
        }

    redirectPortfolios = () => {
            this.props.routerprops.push(`/portfolios`);
        }



    render() {

      return (
          <div className="NavBar">
            <div class="ui menu">
                <a class="item" onClick={this.redirecthome}>RentFinder</a>
                <div class="right menu">
                    {this.props.user_id !== 0 ? (
                    <React.Fragment>
                        <a class="item" onClick={this.logout}>Sign Out</a>
                        <a class="item"onClick={this.redirectPortfolios}>My Portfolios</a>
                    </React.Fragment>
                    )
                    : (
                        <React.Fragment>
                            <a class="item" onClick={this.redirectSignup}>Sign Up</a>
                            <a class="item" onClick={this.redirectLogin}>Log In </a>
                        </React.Fragment>
                    )
                    }
                </div>
            </div>
       </div>
      )
    }
  }



  export default Navbar;
