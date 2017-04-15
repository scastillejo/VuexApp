<template>
  <div id="app">
    <app-datainput></app-datainput>
    <app-todolist></app-todolist>
    <app-weatherdata></app-weatherdata>
  </div>
</template>

<script>
  import DataInput from './components/DataInput.vue';
  import TodoList from './components/TodoList.vue';
  import WeatherData from './components/WeatherData.vue';

  export default {
      components: {
          appDatainput: DataInput,
          appTodolist: TodoList,
          appWeatherdata: WeatherData
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
