/**
 * Created by Akshay on 5/17/2016.
 */
import React from "react";

export default class TodoComp extends React.Component {
  /*constructor(props) {
    super();
  }*/

  render() {
    
    const { complete, edit, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>  {text} &nbsp;</span>
        <span>{icon}</span>
      </li>
    );
  }
}
