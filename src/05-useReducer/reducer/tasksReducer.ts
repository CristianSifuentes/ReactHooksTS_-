// a reducer is a function that receives a state and an action
// and returns a new state based on the action type and payload 
// we will implement the reducer for the tasks app here
// export const tasksReducer = (state, action) => {
//      return {};
// }; 
// state is an object with a todos property that is an array of todo objects
// action is an object with a type property and a payload property
// the type property is a string that indicates the type of action to perform}


import { z } from 'zod';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});



export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem('tasks-state');

  if (!localStorageState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

// Validate using Zod
  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

  // ! Caution, because the object may have been tampered with
  return result.data;
};



export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
    // when create reducer use switch case to handle different action types
    // but you can use if else statements as well
    // always return a new state object
    switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }; 
      
      // ! They shouldn't do it
      // always return a new state object
      // never mutate the state directly
      // state.todos.push(newTodo)
        return {
            ...state,

            todos: [...state.todos, newTodo],
            length: state.todos.length + 1,
            pending: state.pending + 1, 
            completed: state.completed,
        };
    case 'TOGGLE_TODO':
        return {
            ...state,
            todos: state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            ),
            completed: state.todos.filter(todo => todo.completed).length,
            pending: state.todos.filter(todo => !todo.completed).length,
        };  
    case 'DELETE_TODO':
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload),  

            length: state.todos.length - 1,
            completed: state.todos.filter(todo => todo.completed).length,
            pending: state.todos.filter(todo => !todo.completed).length,
        };
    default:
        return state;
    }
};  