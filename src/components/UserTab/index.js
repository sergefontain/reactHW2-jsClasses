import React from "react"
import UserName from "../UserName"
import UserPic from "../UserPic"
import Separator from "../Separator"
import Stats from "../Stats"
import "./UserTab.css"

// const UserTab = () => {
//     return (
//         <div id="userProfileTab">
//             <div class="container">
//                 <UserName />
//                 <Separator />
//                 <UserPic />
//             </div>
//             <Stats />
//         </div>
//     )
// }

// export default UserTab

export default class UserTab extends React.Component {
    render() {
        return (
            <div id="userProfileTab">
                <div className="container">
                    <UserName />
                    <Separator />
                    <UserPic />
                </div>
                <Stats />
            </div>
        )
    }
}
