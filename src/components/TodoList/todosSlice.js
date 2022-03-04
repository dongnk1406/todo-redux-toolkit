// Redux toolkit
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 0,
            name: 'Learn Yoga',
            completed: false,
            priority: 'Medium'
        },
        {
            id: 1,
            name: 'Learn Redux',
            completed: false,
            priority: 'High'
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },

        editTodo: (state, action) => {
            const todoEdit = state.find((todo) => todo.id === action.payload.id);
            if (todoEdit === undefined) return;

            todoEdit.name = action.payload.name;
            todoEdit.priority = action.payload.priority;
        },

        deleteTodo: (state, action) => {
            const indexTodo = state.findIndex(todo => todo.id === action.payload);
            if (indexTodo < 0) return;
            state.splice(indexTodo, 1);
        },

        toggleTodoStatus: (state, action) => {
            const todoToggle = state.find(todo => todo.id === action.payload);
            todoToggle.completed = !todoToggle.completed;
        }
    }
})

export const { addTodo, editTodo, deleteTodo, toggleTodoStatus } = todosSlice.actions;
export default todosSlice.reducer;
