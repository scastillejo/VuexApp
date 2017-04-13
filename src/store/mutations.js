export default {
    savetodo(state, todo) {
        state.todos.push(todo);
    },
    deletetodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    }
};