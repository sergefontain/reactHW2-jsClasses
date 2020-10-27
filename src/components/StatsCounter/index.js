import React from "react"

export default class StatsCounter extends React.Component {
    constructor() {
        super()
    }
    handleFollowers = ({ value, id }) => {
        if (id === "Followers") {
            return [value, id]
        }
    }
    handleFollowing = ({ value, id }) => {
        if (id === "Following") {
            return [value, id]
        }
    }
    render() {
        let ArrFlwrs = this.handleFollowers(this.props)
        let ArrFlwng = this.handleFollowing(this.props)
        return (
            <div className="container">
                <p>
                    {this.props.id === "Followers" ? ArrFlwrs[0] : ArrFlwng[0]}
                </p>
                <p>
                    {this.props.id === "Followers" ? ArrFlwrs[1] : ArrFlwng[1]}
                </p>
            </div>
        )
    }
}
