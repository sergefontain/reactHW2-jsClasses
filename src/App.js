import React from "react"
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

// export default class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             counter: 0,
//             text: "some text",
//             loginForm: {
//                 email: "",
//                 password: "",
//             },
//         }
//         this.handleIncrease = this.handleIncrease.bind(this)
//         this.handleChangeLogin = this.handleChangeLogin.bind(this)
//         this.handleChangePassword = this.handleChangePassword.bind(this)
//         // this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleIncrease() {
//         this.setState(
//             {
//                 counter: this.state.counter + 1,
//                 text: `Previous: ${this.state.counter}`,
//             },
//             () =>
//                 this.setState({
//                     text: `Current: ${this.state.counter}`,
//                 })
//         )
//     }
//     // handleIncrease() {
//     //     this.setState((state) => ({
//     //         counter: state.counter + 1,
//     //         text: `Previous: ${state.counter}`,
//     //     }))
//     //     this.setState((state) => ({
//     //         counter: state.counter + 2,
//     //         text: `Current: ${state.counter}`,
//     //     }))
//     // }

//     handleChangeLogin(e) {
//         this.setState({
//             loginForm: {
//                 ...this.state.loginForm,
//                 email: e.target.value,
//             },
//         })
//     }
//     handleChangePassword(e) {
//         this.setState({
//             loginForm: {
//                 ...this.state.loginForm,
//                 password: e.target.value,
//             },
//         })
//     }
//     handleSubmit = () => {
//         console.log(this.state.loginForm)
//     }

//     render() {
//         console.log(this.state)
//         return (
//             <div className="App">
//                 {/* <Header />
//                 <Main />
//                 <Footer /> */}
//                 <button onClick={this.handleIncrease}>Increase</button>
//                 <input
//                     placeholder="email"
//                     value={this.state.loginForm.email}
//                     onChange={this.handleChangeLogin}
//                 />
//                 <input
//                     placeholder="passw"
//                     value={this.state.loginForm.password}
//                     onChange={this.handleChangePassword}
//                 />
//                 <button onClick={this.handleSubmit}>Submit</button>
//             </div>
//         )
//     }
// }
