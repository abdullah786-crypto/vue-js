<script setup>
import { ref } from 'vue';

const awesom = ref(false)
const showTemplete = ref(false);
const awesoneStyle = ref('awesomeStyle')
const simpleStyle = ref('simpleStyle')
const container2 = ref('container2');
const container1 = ref('container1');

function handleClickAwesome() {
    console.log('value of awesome is ', awesom.value);
    awesom.value = !awesom.value
}
function handleShowTemplete(params) {
    showTemplete.value = !showTemplete.value;
}

</script>

<template>
    <button @click="handleClickAwesome">
        toogle
    </button>
    <h2 v-if="awesom === true" v-bind:class="{ awesoneStyle: awesom }"> Awesom is here </h2>
    <h2 v-else v-bind:class="{ simpleStyle: !awesom }">Oh no</h2>

    <button @click="handleShowTemplete">Show templete</button>

    <!-- <template v-if="showTemplete">
        <div v-bind:class="container1">
            <h2>heading 1 is here</h2>
            <p>Paragreph is here</p>
        </div>
    </template> -->
    <!-- <template v-bind:class="container2" v-else>
        <div v-bind:class="container2">
            <h2>heading 2 is here</h2>
            <p>Paragraph is here</p>
        </div>
    </template> -->
    <h2>For V show </h2>
    <h2 v-show="showTemplete">For the v-show templete</h2>
    <h2 v-if="showTemplete">For the v-if templete</h2>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

</template>

<style>
.awesomeStyle {
    font-size: 17px;
    background-color: burlywood;
    color: brown;
    font-weight: 700;
    padding: 15px;
    border-radius: 15px;
}

.simpleStyle {
    background-color: rgb(16, 61, 101);
    color: azure;
    font-weight: 700;
    font-size: 17px;
    padding: 15px;
    border-radius: 15px;
}

.container1 {
    background-color: rgb(62, 37, 37);
    color: white;
    border-radius: 15px;
    height: 350px;
    width: 250px;
    font-size: 17px;
    font-weight: 700;
}

.container2 {
    background-color: rgb(242, 235, 235);
    padding: 10px;
    border-radius: 15px;
    height: 250px;
    font-size: 17px;
    font-weight: 700;
    width: 350px;
}
</style>