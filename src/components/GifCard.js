import React, { Component } from 'react';

class GifCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {
                this.props.gifs.map(result => <img className="App-gif" src={result.images.fixed_width.url}></img>)
                }
            </div>
        )
    }
}

export default GifCard;