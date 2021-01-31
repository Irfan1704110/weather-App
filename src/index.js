import React from "react";
import reactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay.js"

import Spinner from "./Spinner.js"



class App extends React.Component{
   state={lat: null,errorMessage: ""};

   componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
        position=>this.setState({lat: position.coords.latitude}),
        err=>this.setState({errorMessage:err.message})
        );


   }

    render(){ 
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat){
            
             return <SeasonDisplay lat= {this.state.lat} />;
    }

    return <Spinner message="please Accept location required"/>;
}
}


reactDom.render(<App/>,document.getElementById("root"));