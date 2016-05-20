/**
 * Created by Akshay on 5/17/2016.
 */
import { EventEmitter } from "events";
import dispatcher from  "../../dispatcher";

class TodoStore extends EventEmitter {
  constructor(){
    super();
    this.todos =[
      {
        id: 113464613,
        text: "Go Shopping & Dancing",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
      {
        id: 235684674,
        text: "Pay Power Bill",
        complete: true
      },
    ]
    this.data = [
      { name: 'Step 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { name: 'Step 2', description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui id est.' },
      { name: 'Step 3', description: 'Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.' },
    ];
  }

  createTodo(text){
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete:false,
    })

    this.emit("change");
  }

   reloadTodos(action) {
     this.todos = action.todos;
     this.emit("change4reload");
   }

   loadingTodo(){
     this.emit("Loading");
   }


  handleActions(action){
    switch(action.type){
      case("CREATE_TODO"):{
        this.createTodo(action.text);
        break;
      }
      case("RECEIVE_TODO"):{
        this.reloadTodos(action);
        break;
      }
      case("FETCH_TODOS"):{
        this.loadingTodo(action.loading);
        break;
      }
    }
  }

  getAll() {
    return this.todos;
  }

  getData() {
    return this.data;
  }
}




const todostore = new TodoStore;
dispatcher.register(todostore.handleActions.bind(todostore));
export default todostore;
