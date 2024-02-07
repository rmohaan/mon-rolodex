import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      search: "",
      masters: [],
      filtered: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.org/users/")
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        masters: res,
        filtered: res
      })
    })
  }

  changeName = () => {
    this.setState({
      name: 'Raja'
    })
  }

  handleChange = (e) => {
    e.preventDefault()

    const newSearchKey = e.target.value.toLowerCase()

    const filtered = this.state.masters.filter((master) => {
      return master.firstname.toLowerCase().includes(newSearchKey) || master.lastname.toLowerCase().includes(newSearchKey) || master.email.toLowerCase().includes(newSearchKey)
    })

    console.log(filtered)

    this.setState({
      search: e.target.value,
      filtered: filtered
    })
  }

  render() {
    return (
      <div className="App">
      <div>
        <input 
          type="text" 
          value={this.state.search} 
          placeholder='Search' 
          onChange={this.handleChange} />
          
      </div>
       {
        this.state.filtered.map((master, i) => {
          return (<div key={i}> {master.firstname} {master.lastname} </div>)
        })
      }
      </div>
    );
  }
}

export default App;
