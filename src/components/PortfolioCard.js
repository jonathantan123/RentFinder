import React from 'react';

class PortfolioCard extends React.Component {

    deleteHandler= (portfolio) => {
        this.props.deletePortfolio(this.props.portfolio)
    }

    setHandler= (e) => {
        this.props.setType(e)
          
    }

    render() {
    
        return(    
            <div class="ui card">
               
                        <div class="content">
                        <div 
                            class="center aligned header">{this.props.portfolio.name}
                        </div>
                            <div class="center aligned description">
                                <p>{this.props.portfolio.kind}</p>
                            </div>
                            <br></br><br></br><br></br><br></br><br></br>
                            <div class="center aligned extra content">
                                <button  onClick={this.setHandler}class="ui button" value={this.props.portfolio.id}>View</button>
                                <button onClick={this.deleteHandler}class="ui button">Delete</button>
                            </div>
                        </div>
                   
                </div>
            )}
       
        

}



  export default PortfolioCard