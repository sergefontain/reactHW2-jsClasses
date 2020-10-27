import React from "react"
import StatsCounter from "../StatsCounter"
import "./Stats.css"

// const Stats = () => {
//     return (
//         <ul id="stats">
//             <li>
//                 <div class="container"><p>4356</p><p>Followers</p></div>
//             </li>
//             <li>
//                 <div class="container"><p>532</p><p>Following</p></div>
//             </li>
//         </ul>
//     )
// }

// export default Stats

export default class Stats extends React.Component {
    render() {
        return (
            <ul id="stats">
                <li>
                    <StatsCounter value={4356} id="Followers" />
                </li>
                <li>
                    <StatsCounter value={532} id="Following" />
                </li>
            </ul>
        )
    }
}
