import React from "react"
import "./LeftSide.css"
// const LeftSide = () => {
//     return (
//         <div className="leftSide">
//             <div id="info"><span>365 Freebies.</span><span>007/365</span></div>
//             <div id="footerPic"></div>
//         </div>
//     )
// }

// export default LeftSide

export default class LeftSide extends React.Component {
    render() {
        return (
            <div className="leftSide">
                <div id="info">
                    <span>365 Freebies.</span>
                    <span>007/365</span>
                </div>
                <div id="footerPic"></div>
            </div>
        )
    }
}
