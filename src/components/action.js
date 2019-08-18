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
        this.likedSong = this.likedSong.bind(this);
        this.dislikedSong = this.dislikedSong.bind(this);
    }

    state = {
        song: {},
        likedSongs: [],
        dislikedSongs: []
    }

    getRandomNumber( min, max){ return Math.floor( Math.random() * (max - min) + min);}

    addLineBreak(){ return <br/>}

    //When this method is called it pulls the song from a list with a random index,
    //and sets 'song' 's state to the response, re-rendering its children 
    //and updating their content.
    getSong () {

        let r = this.getRandomNumber(0,4);
        let randomSongIndex = r.toString();

        const song = songs[randomSongIndex];

        console.log('called getsong')
        console.log(this.state.song)

        this.setState({song: song})
        console.log('after set state',this.state.song)

        return song;
    }
    
    likedSong(){
        //push liked song to state
        this.setState(
            state => { 
                const likedSongsList = state.likedSongs.push(this.getSong());
            });
        
        console.log('first liked song', this.state.likedSongs[0])
    }

    dislikedSong(){
        this.setState(
            state => {
                const dislikedSongsList = state.dislikedSongs.push(this.getSong());
            }
        );

        console.log('first disliked song', this.state.dislikedSongs[0])
    }
    render(){

        return( 
            <div>
                <p className="titleParent"><Title titlep={this.state.song.title} artistp={this.state.song.artist}/></p>
                <div className="lyrics-section">
                    <img id="no" src={no} className="icons" onClick={this.dislikedSong}/>
                    <Lyrics lyricsp={this.state.song.lyrics}/>
                    <img id="yes" src={yes} className="icons" onClick={this.likedSong}/>
                </div>
                
            </div>
        );
    }
}

export default Action;