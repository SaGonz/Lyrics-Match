import React from 'react';
//Components
import Lyrics from './lyrics.js';
import Title from './title';
//Local json in ES6
import songs from '../songs.json';
//Images
import yes from '../yes.svg';
import no from '../no.svg';


class Action extends React.Component{

    constructor(props){
        super(props);
        //These functions are binded so everytime they're invoked they're told the component is the caller
        this.getSong = this.getSong.bind(this);
        this.likedSong = this.likedSong.bind(this);
        this.dislikedSong = this.dislikedSong.bind(this);
    }

    state = {
        song: {},
        likedSongs: [],
        dislikedSongs: [],
        viewedSongs: [-1]
    }

    getRandomNumber( min, max){ return Math.floor( Math.random() * (max - min) + min);}

    
    //When this method is called it pulls the song from a list with a random index,
    //and sets 'song' 's state to the response, re-rendering its children 
    //and updating their content.
    getSong () {

        let r = -1;

        while(this.state.viewedSongs.includes(r)){
           r = this.getRandomNumber(0,4);
        }
        
        let randomSongIndex = r.toString();
        const song = songs[randomSongIndex];

        this.setState(
            {
                song: song,
            }
        )

        this.setState(
            state => { 
                const viewedSongList = state.viewedSongs.push(randomSongIndex);
            }
        );
        
        return song;
    }
    
    likedSong(){
        //Pushing liked songs to state
        this.setState(
            state => { 
                const likedSongsList = state.likedSongs.push(this.getSong());
            }
        );
        
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
                <p className="titleParent">
                    <Title titlep={this.state.song.title} artistp={this.state.song.artist}/>
                </p>
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