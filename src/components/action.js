import React from 'react';
//Images
import yes from '../yes.svg';
import no from '../no.svg';
//Components
import Lyrics from './lyrics.js';
import Title from './title';
//Local json in ES6
import songs from '../songs.json';

class Action extends React.Component{

    constructor(props){
        super(props);
        this.getSong = this.getSong.bind(this);
    }

    state = {
        song: {},
        likedSongs: [],
        dislikedSongs: []
    }

    getRandomNumber( min, max){ return Math.floor( Math.random() * (max - min) + min);}

    //When this method is called it pulls the song from a list with a random index,
    //and sets 'song' 's state to the response, re-rendering its children 
    //and updating their content.
    getSong () {

        let r = this.getRandomNumber(0,3);
        let randomSongIndex = r.toString();

        const song = songs[randomSongIndex];

        console.log('called getsong')
        console.log(this.state.song)

        this.setState({song: song})
        console.log('after set state',this.state.song)
    }

    render(){

        return( 
            <div>
                <Title titlep={this.state.song.title} artistp={this.state.song.artist}/>
                {/*The functions need to be passed to onClick, not set directly there ( e.g. , onClick={getSong()} is wrong)*/}
                {/*<button onClick={() => { this.setState( () => { song : this.getSong()})}}>Yay</button>*/}
                <button onClick={this.getSong}>Change State</button>
                <div className="lyrics-section">
                    <img src={no} className="icons"/>
                    <Lyrics lyricsp={this.state.song.lyrics}/>
                    <img src={yes} className="icons" />
                </div>
                
            </div>
        );
    }
}

export default Action;