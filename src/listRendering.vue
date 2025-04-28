<script setup>

import { ref, computed } from 'vue';

const dummyData = ref([
    {
        id: 1,
        title: 'Abdullah',
    },
    {
        id: 2,
        title: 'Umer',
    }, {
        id: 3,
        title: 'Ali',
    }, {
        id: 4,
        title: 'Farooq',
    },
]);

const computedDummyData = computed(() => {
    return dummyData.value.map((items, index) => {
        return `Id: ${items.id} - ${items.title}`
    })
})

const isCompleted = ref(false);
const handleCompleted = () => {
    isCompleted.value = !isCompleted.value;
    console.log("Value of completed is ", isCompleted.value);
}

const todoData = ref([{
    id: 1,
    title: 'Home Work',
    completed: false,
}, {
    id: 2,
    title: 'School Work',
    completed: true,
}, {
    id: 3,
    title: 'Science Work',
    completed: true,
}, {
    id: 4,
    title: 'Office Work',
    completed: false,
},
{
    id: 5,
    title: 'Gym Work',
    completed: true,
},
])

</script>

<template>

    <ul>
        <li v-for="(item, index) in dummyData">
            index {{ index }} - {{ item.title }}
        </li>
    </ul>

    <ul>
        <li v-for="(myItems, index, key) in computedDummyData">
            <span :key="key">{{ `${myItems}` }}</span>
        </li>
    </ul>
    <button @click="handleCompleted">
        Show list
    </button>
    <ul>
        <li v-for="(item, index, key) in dummyData" v-if="isCompleted" :key="key">
            <span>{{ `Id: ${item.id} - ${item.title}` }}</span>
        </li>
    </ul>

    <h3>List Rendering 2nd method</h3>
    <template v-for="(todos, index, key) in todoData" :key="key">
        <li v-if="todos.completed">
            <span>{{ `Id: ${todos.id} - ${todos.title}` }}</span>
        </li>
    </template>
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

</template>


<style></style>