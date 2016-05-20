/**
 * Created by Akshay on 5/11/2016.
 */
import React from "react";

import TodoComp from "../components/TodoComp"

import TodoStore from "../stores/TodoStore";

import * as todoaction from "../actions/todoaction";

import Tabs from "../components/Tabs";

import Loading from "react-loading";

export default class TodosPage extends React.Component{
  constructor(){
    super();
    this.getTodos = this.getTodos.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
    this.gotTodos = this.gotTodos.bind(this);
    this.state = {
      todos : TodoStore.getAll(),
      text:"Initial text",
      loading:false,
      data : TodoStore.getData(),
      ActiveIndex: 0,
    }
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    TodoStore.on("Loading",this.loadTodos);
    TodoStore.on("change4reload",this.gotTodos);
  };

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
    TodoStore.removeListener("Loading",this.loadTodos);
    TodoStore.removeListener("change4reload",this.gotTodos);
  };

  getTodos(){
    this.setState({todos : TodoStore.getAll()});
  };

  loadTodos(){
    this.setState({loading : true,todos : TodoStore.getAll()});
  };

  gotTodos(){
    this.setState({loading : false,todos : TodoStore.getAll()});
  };


  createTodo(){

    const {text } = this.state;
    console.log(text);
    if (text !== "" && text !== undefined) {
      todoaction.createTodo(text);
      this.setState({text:""});
    }
  }

  reloadTodos(){
     todoaction.reloadTodos();
  }

  changeHandler(){
        this.setState({text: this.refs.myInput.value});
  }

  handleTab (ActiveIndex){
    console.log(ActiveIndex);
  this.setState({ActiveIndex});
  }

  render() {
    const { todos, data} = this.state;
    let TodoComponents,DataComponent;


    if(this.state.loading === false){
    TodoComponents = todos.map((todo) => {return <TodoComp key={todo.id} {...todo} />
    });
    }
    else{
          TodoComponents = <Loading type='cubes' class="loaded" color='#e3e3e3'></Loading>
    }

    DataComponent = <Tabs onActivate={this.handleTab.bind(this)} ActiveIndex={this.state.ActiveIndex} value={ data } />;


    return(
      <div>
        <div class="row">
          <div class="col-md-6">
            <input class="ip" value={this.state.text}  ref="myInput" onChange={this.changeHandler.bind(this)} placeholder="Enter your todo here"  />
            <button class="btn btn-primary" onClick={this.createTodo.bind(this)}>Create</button>
            <button class="btn btn-primary" onClick={this.reloadTodos.bind(this)}>reload Todo</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h1>TO DOs</h1>
            { TodoComponents }
          </div>
        </div>
        <div class="row demo">
          <div class="col-md-12">
            <h1>Props v. State</h1>
                { DataComponent }
          </div>
        </div>
      </div>
    );

  }
}


