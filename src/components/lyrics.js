import React from 'react';

//Lyrics will: 
//Make a request to RestAPI
//save the response
//show the response

class Lyrics extends React.Component{

    render(){
        return( 
            <div className="lyrics">
                <p>
                    {this.props.lyricsp}
                </p>
            </div>
            
        );
    }
}

export default Lyrics;