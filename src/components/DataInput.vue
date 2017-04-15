<template>
    <div id="DataInput">
      <div>
        <input id="todoinput" placeholder="Type a thing to do..." required />
        <button @click="handleTodos">Save</button>
      </div>
      <div>
        <input id="weatherinput" placeholder="Type a city..." required />
        <button @click="handleCityWeather">Find</button>
      </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleTodos() {
                this.$store.dispatch('savetodo', todoinput.value);
                todoinput.value = '';
            },
            handleCityWeather() {
                this.$store.dispatch('findweather', weatherinput.value);
                weatherinput.value = '';
            }
        }
    }
</script>

<style scoped>

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }

    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: green;
    }
</style>