// import React, { Component } from "react";


const SearchBox = ({className, placeholderText, onChangeHandler}) => {
    return (
        <div className={`search-box ${className}`}>
          <input 
            className="input-group-text w-100 text-start"
            type="search" 
            placeholder={placeholderText} 
            onChange={onChangeHandler} />
        </div>
    )
}

// class SearchBox extends Component {

//     render() {
//         return (
//             <div className={`search-box ${this.props.className}`}>
//               <input 
//                 className="input-group-text w-100 text-start"
//                 type="search" 
//                 placeholder={this.props.placeholderText} 
//                 onChange={this.props.onChangeHandler} />
//             </div>
//         )
//     }
// }

export default SearchBox