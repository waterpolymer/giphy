import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import SearchField from './components/SearchField'
import GifCard from './components/GifCard'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      arr: [],
      api_key: "bLipTYqqehC39oeX6QZcFZoha0ccQuEH"
    }
  }

  componentDidMount(){
    axios.get("http://api.giphy.com/v1/gifs/trending?api_key=" + this.state.api_key)
      .then(response => {
        this.setState({
          arr: response.data.data
        })
        console.log(response.data.data);
      })
      .catch(err => console.log(err))
  }

  updateArr = (axiosGet) =>{
    this.setState({
      arr: axiosGet.data.data
    })
    console.log(axiosGet.data.data);
  }

  render(){
    return(
    <div className="App">

      <div className="App-searchbar-container">
        <SearchField arr={this.state.arr} api_key={this.state.api_key} childHandler={this.updateArr}></SearchField>
      </div>
      
      <header className="App-header">
        
        <GifCard gifs={this.state.arr}></GifCard>

      </header>
    </div>
    )
  }
}

export default App;
