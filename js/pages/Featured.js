/**
 * Created by Akshay on 5/11/2016.
 */
import React from "react";

import Article from "../components/Article"

export default class Featured extends React.Component{
      render() {

        const Articles =[
          "Some Article",
          "Some Other Article",
          "Yet Another Article",
          "Still More",
          "Bring it On"
        ].map((title,i) => <Article key ={i} title = { title }/>);

        const adText= [
          'Ad spot #1',
          'Ad Spot #2',
          'Ad Spot #3',
          'Ad Spot #4',
          'Ad Spot #5',
        ];
        const randomAd = adText[Math.round(Math.random *(adText.length -1))];

        return (
       <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              { randomAd }
            </div>
          </div>
        </div>

         <div class="row">{ Articles }</div>
      </div>


   );
  }
}


