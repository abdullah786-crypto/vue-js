<script setup>

import { computed, ref } from 'vue'
import Todos from './definingProps.vue'

const todos = ref([
    {
        id: 1,
        title: 'Learn Vue.js',
        description: 'Learn the basics of Vue.js framework',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Build a Todo App',
        description: 'Create a simple Todo application using Vue.js',
        isCompleted: true,
    },
    {
        id: 3,
        title: 'Deploy the App',
        description: 'Deploy the Todo app to a hosting platform',
        isCompleted: false,
    }
]);

const searchQuery = ref('');

const filteredTasks = computed(() => {
    return todos.value.filter((todo) => todo.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

function onClick() {
    console.log("Clicked from parent");
}

</script>

<template>
    <h1>This is todo Application</h1>
    <h1>Tasks</h1>
    <input v-bind:class="'searchInput'" v-model="searchQuery" type="text" placeholder="Enter title" />
    <template v-if="todos">
        <div v-for="(todo, index) in filteredTasks">
            <Todos :title="todo.title" :description="todo.description" :is-completed="todo.isCompleted" :onCall="onClick" />
        </div>
    </template>
    <template v-else-if="todos.length === 0">
        <h1>No Tasks Found</h1>
    </template>
    <template v-else>
        <h1>Loading...</h1>
    </template>
    <br />
    <br />
    <br /><br />
    


</template>

<style>
.searchInput {
    width: 460px;
    height: 30px;
    border-radius: 5px;
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
    border: 1px solid grey;
    box-shadow: 0 0 5px 4px rgba(243, 240, 240, 0.881);
    background-color: lavenderblush;
}
</style>