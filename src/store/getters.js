export default {
    todolist(state) {
        return state.todos;
    },
    totalTodos(state) {
        return state.todos.length;
    },
    weatherdata(state) {
        return state.weatherdata;
    }
};