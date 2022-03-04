// redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/filtersSlice'
import todosSlice from '../components/TodoList/todosSlice'

const store = configureStore({
    reducer: {
        filters: filtersSlice,
        todoList: todosSlice
    }
})

export default store
