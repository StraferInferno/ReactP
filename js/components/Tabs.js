/**
 * Created by Akshay on 5/19/2016.
 */
import React from "react";

export default class Tabs extends React.Component{
  constructor(){
    super();
    this.state={
      ActiveIndex: 0,
      isActiveTab:false,
    }

  }

  handleTabClick(index){
    //this.props.onActivate(index);
    this.setState({ActiveIndex : index});
  }

  renderTabs(){
    return this.props.value.map((tab,index)=> {
      var style= this.state.ActiveIndex === index ? "activeTab tab" : " tab";
      var clickHandler =this.handleTabClick.bind(this,index);
      return(
        <div key={tab.name} class={style} onClick={clickHandler}>{tab.name}</div>
      );
    })
  };

  renderPanel(){
    return this.props.value.map((val,index ) => {
      if (this.state.ActiveIndex === index )
              return (
        <div key={val.name} class="tabPanels">{val.description}</div>
      );
    })

  }

  render()
   {
    return (
      <div>
        <div>
          {this.renderTabs()}
        </div>
        <div>
          { this.renderPanel()}
        </div>
      </div>
    );
  }

}

Tabs.propTypes = {
  value: React.PropTypes.array.isRequired
};
