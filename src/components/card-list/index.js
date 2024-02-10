import { Component } from "react";

class CardList extends Component {
    render() {
        return (
            <div className="row col-12 ml-4">
               { 
                this.props.users.map( (user) => {
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


}


// const CardList = (props) => {
//     return (
//         <div>
//             props.users.map((user) => {
//                 <div className="card" style="width: 18rem;">
//                     <img className="card-img-top" src={user.image} alt="Card image cap" />
//                     <div className="card-body">
//                         <p className="card-text">{user.firstName} {user.lastName}</p>
//                         <p className="card-text">{user.email} {user.lastName}</p>
//                     </div>
//                 </div>
//             })
//         </div>
//     )
// }

export default CardList;