/**
 * Created by Akshay on 5/11/2016.
 */
import React from "react";
import Header from "./Header";
import Footer from "./layout/Footer";

export default class Layout extends React.Component{
      constructor(){
        super();
       this.state = {
         title : "Welcome Biyaaatch",
       }
      }

      changeTitle(title) {
      this.setState({title});
      }
       render() {
       return (
       <div>
        <Header changeTitle = {this.changeTitle.bind(this)}  title ={this.state.title}/>
        <Footer/>
      </div>
   );
  }
}


