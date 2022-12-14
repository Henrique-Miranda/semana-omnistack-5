import React from "react";
import twitterLogo from '../twitter.svg'
import "./Login.css"

export default class Login extends React.Component {
    state = {
        username: ""
    }

    handleInputChange = e => {
        this.setState({ username: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username } = this.state
        if (!username.length) return
        localStorage.setItem('@GoTwitter:username', username)
        window.location.href = '/timeline'
        
     }

    render(){
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="Twitter Logo" />
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.username} onChange={this.handleInputChange} placeholder="Nome de usuário"/>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        )
    } 
    
}