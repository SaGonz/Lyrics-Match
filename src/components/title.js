import React from 'react';

class Title extends React.Component{

    state = {
        title : this.props.titlep,
    }
    
    render(){
        return( 
            
            <div className="title">
                {this.props.titlep} - {this.props.artistp}
            </div>
        );
    }
}

export default Title;