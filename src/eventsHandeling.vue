<script setup>

import { ref, computed } from 'vue';



</script>

<template>

     <h1>Events Handling(Stop Propagation) </h1>
    <div :style="{ height: '300px', width: '350px', backgroundColor: 'grey', borderRadius: '15px', padding: '10px' }"
        @click.stop="console.log('parent div clicked')">
        Parent div
        <div @click.stop="console.log('child 1 div clicked')"
            :style="{ height: '250px', width: '300px', backgroundColor: 'blue', borderRadius: '15px', padding: '10px' }">
            Child 1 div
            <div :style="{ height: '200px', width: '250px', backgroundColor: 'yellow', borderRadius: '15px', padding: '10px' }"
                @click.stop="console.log('child 2 div clicked')">
                Child 2 div
            </div>
        </div>
    </div>

    <br />
    <br />
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