type Todo = {
    id:number;
    text: string;
}

type State = {
    todos: Todo[];
}

type Action = 
   | {type: "ADD_TODO"; payload: string}
   | {type: "REMOVE_TODO"; payload: number};

   const initialState:State = {
    todos: [],
   };

const todoReducer = (state: State, action:Action) => {
    switch(action.type){
        case "ADD_TODO":
            const newTodo: Todo = {id:state.todos.length + 1,text:action.payload}
            return {todos:[...state.todos,newTodo]
    }
    case "REMOVE_TODO":
        return {todos: state.todos.filter(todo => todo.id!== action.payload)}
    default:
        return state;
    }
}
const mapa: { [key:string]: string} = {
    eat: "8=====D",
    sleep: "zzz",
    happy: ":)"
}
