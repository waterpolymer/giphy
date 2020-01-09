import React, { Component } from 'react';
import axios from 'axios';

class SearchField extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: ""
        }
    }

    handleChange = (event) =>{
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) =>{
        let searchTerm = this.state.input.replace(/ /g, "+");
        let httpsReq = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + this.props.api_key;
        console.log(httpsReq);
        //console.log(this.props.api_key);
        axios.get(httpsReq)
            .then(response => {
                this.props.childHandler(response);
                })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange}></input>
               <button  onClick={this.handleSubmit}> Search </button>
            </div>
            
        )
    }
}

export default SearchField;