import React from "react"
import "./RightSide.css"
// const RightSide = () => {
//     return (
//         <div className="rightSide">
//             <div id="contacts"><span>@anakarenart</span></div>
//             <div id="emptySlot"></div>
//         </div>
//     )
// }

// export default RightSide

export default class RightSide extends React.Component {
    render() {
        return (
            <div className="rightSide">
                <div id="contacts">
                    <span>@anakarenart</span>
                </div>
                <div id="emptySlot"></div>
            </div>
        )
    }
}
