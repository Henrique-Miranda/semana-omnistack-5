import React from "react";
import "./Timeline.css"
import twitterLogo from '../twitter.svg'
import api from '../services/api'

export default class Timeline extends React.Component{
    state = {
        tweets: [],
        newTweet: '',
    }

    async componentDidMount(){
        const response = api.get('tweets')
        this.setState({ tweets: await response.data })
        console.log(response.data)
    }

    handleNewTweet = async e => {
        if (e.charCode !== 13 ) return
        const content = this.state.newTweet
        const author = localStorage.getItem("@GoTwitter:username")
        await api.post('tweets', { content, author })
        this.setState({ newTweet: '' })
    }

    handleInputChange = e => {
        this.setState({ newTweet: e.target.value })
    }

    render(){
        return(
            <div className="timeline-wrapper">
                <img height={24} src={twitterLogo} alt="Twitter Logo" />

                <form>
                    <textarea value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleNewTweet}
                        placeholder="O que está acontecendo?"
                    />

                </form>
                
            </div>
        )
    } 
    
}