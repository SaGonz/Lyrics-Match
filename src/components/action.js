import React from 'react';
import Lyrics from './lyrics.js';
import Title from './title';

class Action extends React.Component{

    constructor(props){
        super(props);
        this.getSong = this.getSong.bind(this);
    }

    state = {
        lyrics : "iioo",
        title : " Song - Artist "
    }

    async getSong(){
        let songs = await '../songs.json';
        
        alert(songs);
        //let song = songs[0];
        console.log('called getsong');
        //return song;
    }
    
    changeState(){
        this.setState({lyrics: this.getSong()});
    }

    render(){

        return( 
            <div>
                <Title titlep={this.state.title}/>
                {/*The functions need to be passed to onClick, not set directly there ( e.g. , onClick={getSong()} is wrong)*/}
                <button onClick={() => { this.setState( () => {this.getSong()})}}>Yay</button>
                <Lyrics lyricsp={this.state.lyrics}/>
            </div>
        );
    }
}

export default Action;