/**
 * Created by Akshay on 5/17/2016.
 */
import  dispatcher  from "../../dispatcher";

export function createTodo(text) {
 dispatcher.dispatch({
  type: "CREATE_TODO",
  text,
  });
  }

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS" ,todos:[{loading : true}]});

  setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_TODO", todos:[
          {
            id: 7236678236,
            text: "Go Shopping WIFEY",
            complete: false
          },
          {
            id: 78364823764,
            text: "Awesome React",
            complete: false
          }
        ]});
  },5000);




}
