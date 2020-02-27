
import React from 'react';

class Login extends React.Component {

    state = { 
        username: "", 
        password: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    
    }

    // on submit fetch and find/set the id of the current user 

    submitHandler=(e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: this.state.username, 
                    password: this.state.password
                })
        })
            .then(resp => resp.json())
            .then(data => {

                if(data.errors) {
                    alert("Incorrect Username/password")
                } else {
                    alert ("worked!")
                    this.props.setUserId(data.id)
                }
               
            })
         
    }

    render() {
        return (
            <div class ="search_container">
            <div className="two">
              <iframe frameborder="0" className="video-background"src="https://player.vimeo.com/video/121450839?byline=0&portrait=0&autoplay=1&title=0&background=1" ></iframe>
            </div>
           <div className="welcome-text">
               <div className="form-div">
                <form onSubmit={this.submitHandler} class="ui medium form">
                                <div class="ui stacked segment">
                                        <div class="field">
                                            <label>Username</label>
                                            <input type="text" onChange={this.changeHandler} placeholder="Username" name="username"></input>
                                        </div>
                                        <div class="field">
                                            <label>Password</label>
                                            <input type="password" onChange={this.changeHandler} placeholder="password" name="password"></input>
                                        </div>
                                        <button class="ui fluid large grey submit button" type="submit"> Login</button>
                            
                                </div>
                    </form>
                    </div>
             </div> 
        </div>
          
       
        )
    }
}

export default Login

