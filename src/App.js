import { Component, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list';
import SearchBox from './components/search-box';
import Header from './components/header';


const App = () => {
  const [searchText, setSearchText] = useState('')
  const [masters, setMasters] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((res) => { setMasters(res.users) })
  }, [])

  const onChangeHandler = (event) => {
    setSearchText(event.target.value)
  }

  const filteredMasters = () => {
    return masters.filter((master) => {
      return master.firstName.includes(searchText) || master.lastName.includes(searchText) || master.email.includes(searchText)
    })
  }

  return (
    <div className="App container">
        <Header />
        <SearchBox  className="input-group mt-3"
                    searchText={searchText}
                    onChangeHandler={onChangeHandler} 
                    placeholderText={'Search'} 
                    />
        <CardList users={filteredMasters()} />
      </div>
  )
}


// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       searchText: "",
//       search: "",
//       masters: [],
//       filtered: []
//     }
//   }

//   componentDidMount() {
//     fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     .then((res) => {
//       this.setState({
//         masters: res.users,
//         filtered: res.users
//       })
//     })
//   }

//   onChangeHandler = (e) => {
//     this.setState({
//       searchText: e.target.value
//     })
//   }

//   render() {

//     const { searchText } = this.state

//     const filteredMasters = this.state.masters.filter((master) => {
//       return master.firstName.includes(searchText) || master.lastName.includes(searchText) || master.email.includes(searchText)
//     })

//     return (
//       <div className="App container">
//         <Header />
//         <SearchBox  className="input-group mt-3"
//                     searchText={searchText} 
//                     onChangeHandler={this.onChangeHandler} 
//                     placeholderText={'Search'} 
//                     />
//         <CardList users={filteredMasters} />
//       </div>
//     );
//   }
// }

export default App;
