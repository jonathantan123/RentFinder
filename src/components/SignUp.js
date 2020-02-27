
import React from 'react';

class SignUp extends React.Component {

    state = { 
        username: "", 
        password: "", 
        image: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }

    submitHandler=(e) => {
        e.preventDefault()
        
        fetch(`http://localhost:3000/users`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    name: this.state.username, 
                    password: this.state.password, 
                    image:  this.state.image
                })
        })
        this.props.routerprops.history.push(`/login`);


          
    }


    render() {
        return (
        <div className="signup-container">
            <div class="stackable center aligned page grid">
                <div class="column eight wide">
                    <form onSubmit={this.submitHandler} class="ui large form">
                            <div class="ui stacked segment">
                                    <div class="field">
                                        <label>Username</label>
                                        <input type="text" onChange={this.changeHandler} placeholder="Username" name="username"></input>
                                    </div>
                                    <div class="field">
                                        <label>Password</label>
                                        <input type="password" onChange={this.changeHandler} placeholder="password" name="password"></input>
                                    </div>
                                    <button class="ui fluid large grey submit button" type="submit"> Sign Up</button>
                        
                            </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default SignUp

