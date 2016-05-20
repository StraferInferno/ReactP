/**
 * Created by Akshay on 5/11/2016.
 */
import React from "react";
import Footer  from  "../components/layout/Footer";
import Nav from  "../components/layout/Nav";

export default class MyLayout extends React.Component{
  /* constructor(){
   super();

   this.state = {
   val: ''
   };
   }
   navigate(){
   this.context.router.push("/");
   }*/

  render() {
    const { location } = this.props;
    const { containerStyle } = {
      marginTop: "60px",
    }
    return (
      <div>
        <Nav location ={ location } />

        <div  class="container" style= { containerStyle }>
          <div class="row">
            <div class="col-md-12">
              { this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}

MyLayout.contextTypes = {
  router: React.PropTypes.object.isRequired
};


