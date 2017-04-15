<template>
    <div id="WeatherData">
        <div class="summary">
            <h3>Weather data</h3>
        </div>
        <div>
            <h3>{{weatherdata.name}}</h3>
            <h3>Temp: {{weatherdata.main.temp}}°</h3>
            <h3>Humidity: {{weatherdata.main.humidity}} %</h3>
            <h3>Wind speed: {{weatherdata.wind.speed}}</h3>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                weatherdata: 'weatherdata'
            })
        }
    }
</script>

<style scoped>
    #WeatherData {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
        text-align: left;
    }

    .summary {
        text-align: center;
    }

    .row h4 {
        display: inline-block;
        width: 30%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
    }

    .row span {
        width: 30%;
        color: red;
        cursor: pointer;
    }

    .row span:hover {
        color: darkred;
    }

    .date {
        display: inline-block;
        width: 38%;
        text-align: right;
        box-sizing: border-box;
    }
</style>