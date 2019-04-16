import React from 'react';
import $ from 'jquery';
import About from './CV/About';
import Resume from './CV/Resume';



class AboutMe extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          resumeData: {}
        };
    
    }
    
      getResumeData(){
        $.ajax({
          url:'/resumeData.json',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({resumeData: data});
          }.bind(this),
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }
    
      componentDidMount(){
        this.getResumeData();
      }
    
    render(){

        return(
            <div>
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
            </div>
        );

    };

}

export default AboutMe;