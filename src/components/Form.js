import { Component } from "react"

import Result from './Result'

class Form extends Component{
    constructor(){
        super()
        this.state = {firstPerson: "", secondPerson:"", result:{}}
        this.formSubmit = this.formSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    formSubmit(event) {
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.firstPerson}&sname=${this.state.secondPerson}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4a6a62fd82msha81718d72bd9741p15c630jsn02024f4b11a5",
                "x-rapidapi-host": "love-calculator.p.rapidapi.com"
            }
        })
        .then(response => response.json()
        ).then(result => {
            this.setState({firstPerson: "", secondPerson:"", result:result})
        })
        .catch(err => {
            console.error(err);
        });
        
        event.preventDefault()
    }

    handleInput(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-content">
                            <form onSubmit={this.formSubmit}>
                                <div className="input-field col s6">
                                    <input type="text" name="firstPerson" value={this.state.firstPerson} onChange={this.handleInput} placeholder="First Person Name" />
                                </div>
                                <div className="input-field col s6">                        
                                    <input type="text" name="secondPerson" value={this.state.secondPerson} onChange={this.handleInput} placeholder="Second Person Name" />
                                </div>
                                <button className="btn waves-effect waves-light">Submit<i className="material-icons right">send</i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
            { Object.keys(this.state.result).length > 0 && < Result data={this.state.result} />} 
        </div>
        )
    }
}

export default Form