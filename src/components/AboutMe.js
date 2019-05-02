import React from 'react';
import About from './CV/About';
import Resume from './CV/Resume';
import {connect} from 'react-redux';




class AboutMe extends React.Component{

    render(){
        return(
            <div>
                <About data={this.props.resumeData.main}/>
                <Resume data={this.props.resumeData.resume}/>
            </div>
        );

    };

}

const mapStateToProps = state =>{

    return { resumeData: state.resumeData };
}


export default connect(mapStateToProps, null)(AboutMe);