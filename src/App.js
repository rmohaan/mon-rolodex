import { Component } from 'react';
import './App.css';
import CardList from './components/card-list';
import SearchBox from './components/search-box';
import Header from './components/header';

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchText: "",
      search: "",
      masters: [],
      filtered: []
    }
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        masters: res.users,
        filtered: res.users
      })
    })
  }

  changeName = () => {
    this.setState({
      name: 'Raja'
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {

    const { searchText } = this.state

    const filteredMasters = this.state.masters.filter((master) => {
      return master.firstName.includes(searchText) || master.lastName.includes(searchText) || master.email.includes(searchText)
    })

    return (
      <div className="App container">
        <Header />
        <SearchBox  className="input-group mt-3"
                    searchText={searchText} 
                    onChangeHandler={this.onChangeHandler} 
                    placeholderText={'Search'} 
                    />
        <CardList users={filteredMasters} />
      </div>
    );
  }
}

export default App;
