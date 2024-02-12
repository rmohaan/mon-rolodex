const CardList = ({users}) => {
    return (
        <div className="row col-12 ml-4">
           { 
            users.map( (user) => {
                return (
                    <div className="card card-style" key={user.id}>
                        <img className="card-img-top" src={user.image} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">{user.firstName} {user.lastName}</p>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>
                )}
            
            )
            }
        </div>
    )
}

export default CardList;