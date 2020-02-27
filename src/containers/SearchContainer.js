import React from 'react';
class SearchContainer extends React.Component {



    searchHandler= (e) => {
        this.props.setSearch(e.target.value)
    }

    render() {

      return (

          <div class ="search_container">
              <div className="one">
                <iframe frameborder="0" className="video-background"src="https://player.vimeo.com/video/107694556?byline=0&portrait=0&autoplay=1&title=0&background=1" ></iframe>
              </div>
             <div className="welcome-text">
                 <h1>Appartment hunting made easy.</h1>
                 <h1>Welcome to RentFinder</h1>
                  <div class="ui search" > 
                    <input class="prompt" onChange={this.searchHandler} type="text" placeholder="Search by location"></input>
                  </div>
               </div> 
          </div>

      )
    }
  }



  export default SearchContainer;
