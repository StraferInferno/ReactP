/**
 * Created by Akshay on 5/11/2016.
 */
import React from "react";
import Article from "../components/Article";
export default class Archives extends React.Component{
        render() {
          console.log(this.props);
          const { query } = this.props.location;
          const { params } = this.props;
          const {article} = params;
          const { date , filter } = query;

          const Articles =[
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Bring it On"
          ].map((title,i) => <Article key ={i} title = { title }/>);

       return (
       <div>
        <h1>Archives</h1>
        <div> article : { article }, Date : {date}, Filter : { filter }</div>
         <div class="row">{ Articles }</div>
      </div>
   );
  }
}


