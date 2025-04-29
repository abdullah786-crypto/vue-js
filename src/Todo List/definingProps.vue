<script setup>
import { ref } from 'vue'
// const props = defineProps({
//     title: String,
//     description: String,
//     isCompleted: Boolean,
// })
const props = defineProps(['title', 'description', 'isCompleted', 'onCall']);
const divStyle = ref('div');

function onClickButton() {
    props.onCall();
}
</script>

<template>
    <div v-bind:class="divStyle">
        <h2 :style="{textAlign: 'center', alignSelf: 'center', marginTop: '10px', marginBottom: '10px'}">Todo Item</h2>
        <span>Title: {{ props.title }}</span>
        <br />
        <span>Description: {{ props.description }}</span>
        <br />
        <span>Is Completed: {{ props.isCompleted }}</span>
        <br />
        <br />

        <button @click="onClickButton">Click here</button>
    </div>

</template>

<style>
span {
    color: white;
    font-size: 20px;
    background-color: grey;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.div{ 
    background-color: lavenderblush;
    height: auto;
    width: 450px;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(243, 240, 240, 0.881);
    padding: 15px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    border: 1px solid grey;
    margin-bottom: 20px;
    /* transition: all 0.3s ease-in-out; */
    /* cursor: pointer;     */
}
</style>