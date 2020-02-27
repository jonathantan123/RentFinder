import React from 'react';


class PortfolioForm extends React.Component {

    state = { 
        name: "", 
        kind: ""
    }

    changeHandler = (e) => {
        console.log("working")
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        console.log("working")
        e.preventDefault()
        fetch("http://localhost:3000/portfolios", {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    user_id: this.props.user_id,
                    name: this.state.name, 
                    kind: this.state.kind,
                    listings: []
                })
        })
            .then(resp => resp.json())
            .then((data) => {
                debugger
                this.props.addPortfolio(data.data)
                
                console.log(data.data.attributes)
            })
            this.props.routerprops.history.push(`/portfolios`)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} class="ui form">
                <div class="field">
                    <label>Portfolio Name </label>
                    <input  onChange={this.changeHandler}  type="text" name="name" placeholder="Name"></input>
                </div>
                <div class="field">
                    <label>Type</label>
                    <input onChange={this.changeHandler} type="text" name="kind" placeholder="Type"></input>
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
        )
    }

}
export default PortfolioForm