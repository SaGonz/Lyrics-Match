import React from 'react';

class Title extends React.Component{

    state = {
        title : "",
    }

    render(){
        return( 
            <p>
                {this.props.titlep}
            </p>
        );
    }
}

export default Title;