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
        this.showTheList = this.showTheList.bind(this);
        this.hideTheList = this.hideTheList.bind(this);
    }

    state = {
        song: {},
        likedSongs: [],
        dislikedSongs: [],
        viewedSongs: [-1],
        showList : false
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
        //
        let request = 'https://api.genius.com/search?q=Paranoid&access_token=ge3Sn2PUsoSJJ_1nMbItCwn3TS6RS7HnC4D9ozWxJSj0Df3Bx2ylV3iyb55pGxtc';

        this.setState(
            {
                song: song,
            }
        )

        this.setState(
            state => { 
                viewedSongList: state.viewedSongs.push(randomSongIndex);
            }
        );
        
        return song;
    }
    
    likedSong(){
        //Pushing liked songs to state
        this.setState(
            state => { 
                likedSongsList: state.likedSongs.push(this.getSong());
            }
        );
        
        console.log('first liked song', this.state.likedSongs[0])
        console.log('all the liked songs', this.state.likedSongs)
    }

    dislikedSong(){
        this.setState(
            state => {
                const dislikedSongsList = state.dislikedSongs.push(this.getSong());
            }
        );

        console.log('first disliked song', this.state.dislikedSongs[0])
        console.log('all the disliked songs', this.state.dislikedSongs)
    }

    getXY(element){
        console.log(element.target.getBoundingClientRect())
    }

    showTheList(){
        this.setState({showList : true})
    }

    hideTheList(){
        this.setState({showList : false},
            () => {
                document.removeEventListener('click', this.hideTheList);
            }
        )
    }

    render(){

        return( 
            <div>
                <div>
                    <p>Who's this from?</p>
                    <p className="titleParent">
                        <Title titlep={this.state.song.title} artistp={this.state.song.artist}/>
                    </p>
                    <div className="lyrics-section">
                        <img id="no" src={no} className="icons" onClick={this.dislikedSong} onMouseOver={this.getXY}/>
                        <Lyrics lyricsp={this.state.song.lyrics}/>
                        <img id="yes" src={yes} className="icons" onClick={this.likedSong}/>
                    </div>
                </div>
                <div className="likedTab">
                    <p></p>
                    <p onMouseOver={this.showTheList}>Liked songs</p>
                    { 
                        this.state.showList
                        ?
                        (
                            <ul>
                                {this.state.likedSongs.map((item, key) => <li key={item.id}> {item.title} by {item.artist}</li>)}
                            </ul>
                        )
                        :
                        (null)
                    }
                    
                </div>
            </div>
            
        );
    }
}

export default Action;