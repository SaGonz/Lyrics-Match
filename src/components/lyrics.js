import React from 'react';

//Lyrics will: 
//Make a request to RestAPI
//save the response
//show the response

class Lyrics extends React.Component{

    render(){
        return( 
            <p>
                Lyrics: 
                <br/>
                {this.props.lyricsp}
                <br/>
            </p>
        );
    }
}

export default Lyrics;