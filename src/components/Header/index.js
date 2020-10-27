import React from "react"
import "./Header.css"
// const Header = () => {
//     return (
//         <header id="header">
//             <div class="container">Joannah Dou</div>
//         </header>
//     )
// }

// export default Header

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="container">Joannah Dou</div>
            </header>
        )
    }
}
