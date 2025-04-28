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

const data = computed(() => {
    return dummyData.value.map((items, index) => {
        return `Index - ${index} and ${items}`
    })
})


</script>

<template>

    <ul>
        <li v-for="(item, index) in dummyData">
         index {{ index }} - {{ item.title }}
        </li>
    </ul>

    <ul>
        <li v-for="(myItems, index, key) in data">
            <span :key="key">{{ `index - ${index} and ${myItems}` }}</span>
        </li>
    </ul>
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