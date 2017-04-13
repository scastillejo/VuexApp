<template>
  <div id="app">
    <app-todoinput></app-todoinput>
    <app-todolist></app-todolist>
  </div>
</template>

<script>
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';

  export default {
      components: {
          appTodoinput: TodoInput,
          appTodolist: TodoList
      }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
