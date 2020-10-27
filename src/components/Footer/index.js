import React from "react"
import LeftSide from "../LeftSide"
import RightSide from "../RightSide"
import "./Footer.css"

// const Footer = () => {
//     return (
//         <footer id="footer">
//             <LeftSide />
//             <RightSide />
//         </footer>
//     )
// }

// export default Footer

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <LeftSide />
                <RightSide />
            </footer>
        )
    }
}
