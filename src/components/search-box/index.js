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

export default SearchBox