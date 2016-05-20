/**
 * Created by Akshay on 5/16/2016.
 */

import React from "react";

export default class Article extends React.Component{
  render() {
    console.log( this.props);
       const { title } = this.props;
    return (
      <div class="col-md-4">
        <h2>{ title }</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}


