import { createSelector } from '@reduxjs/toolkit'

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

//  selector depend on data of searchTextSelector and todoList

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    searchTextSelector,
    (todoList, filterStatus, filterPriorities, searchText) => {
        return todoList.filter((todo) => {
            if (filterStatus === 'All') {
                if (filterPriorities.length > 0) {
                    return todo.name.includes(searchText) && filterPriorities.includes(todo.priority);
                }
                else {
                    return todo.name.includes(searchText);
                }
            }

            else if (filterStatus === 'Completed') {
                if (filterPriorities.length > 0) {
                    return todo.name.includes(searchText) && filterPriorities.includes(todo.priority) && todo.completed;
                } else {
                    return todo.name.includes(searchText) && todo.completed;
                }
            }

            else {
                if (filterPriorities.length > 0) {
                    return todo.name.includes(searchText) && filterPriorities.includes(todo.priority) && !todo.completed;
                } else {
                    return todo.name.includes(searchText) && !todo.completed;
                }
            }
        })
    }
)