<template>
    <div id="TodoList">
        <div class="summary">
            <h3>Todos</h3>
            <h5>Total: {{ total }}</h5>
        </div>
        <hr>
        <div class="row" v-for="todo in todos">
            <h4>{{ todo }}</h4>
            <span @click="deleteTodo(todo)">Delete</span>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        methods: {
            deleteTodo(todo) {
                this.$store.commit({
                    type: 'deletetodo',
                    todo: todo
                });
            }
        },
        computed: {
            ...mapGetters({
                todos: 'todolist',
                total: 'totalTodos'
            })
        }
    }
</script>

<style scoped>
    #TodoList {
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