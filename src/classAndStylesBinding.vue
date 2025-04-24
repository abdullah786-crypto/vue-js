<script setup>

import { ref, computed } from 'vue';

const showRedText = ref(false);
const countValue = ref(0); 
const simpleClassApply = ref('simpleClassApply')
const dangerText = ref('textDanger')
const fontSize__14 = ref('fontSize__14');
const greyBackground = ref('greyBackground');
const fontWeight__800 = ref('fontWeight__800');

const handleTextColor = () => {
    showRedText.value = !showRedText.value
}

</script>

<template>

    <h2 v-bind:class="{ greenText: showRedText, redText: !showRedText }">This is the class binding component render here
    </h2>
<p>{{ countValue }}</p>
    <button @click="handleTextColor"> Red text</button>
    <button @click="handleTextColor"> Green text</button>

    <div :class="simpleClassApply">Simple class apply</div>

    <p :class="dangerText">The Text danger</p>

    <p
        v-bind:style="{ color: 'white', backgroundColor: 'red', fontSize: '30px', padding: '10px', borderRadius: '10px', textAlign: 'center' }">
        Inline styling</p>
        <p>{{ showRedText }}</p>

    <br />
    <br />
    <p :class="[fontSize__14, greyBackground, fontWeight__800 ]">Multiple classes</p>
    <br />
    <br />

</template>

<style>
.greenText {
    color: rgb(5, 255, 5);
    background-color: rgb(9, 184, 9);
    font-size: 20px;
    font-weight: 600;
}

.redText {
    color: rgba(255, 0, 0, 0.937);
    background-color: greenyellow;
    font-size: 20px;
    font-weight: 700;
}

.simpleClassApply {
    color: white;
    background-color: brown;
    font-size: 25px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 2px green;
    text-align: center;
}

.textDanger {
    color: red;
    font-size: 20px;
    font-weight: 700;
    text-align: align;
}
.fontSize__14{
    font-size: 14px;

}
.greyBackground{
    background-color: grey;
}

.fontWeight__800{
    font-weight: 800;
}
</style>