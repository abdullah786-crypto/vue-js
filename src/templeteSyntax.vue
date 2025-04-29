<script setup>
import { ref } from 'vue';
import ReactivityFundamentals from './reactivityFundamentals.vue';
import ComputedProperties from './computedProperties.vue';
import ClassAndStylesBinding from './classAndStylesBinding.vue';
import CondetionalRendering from './conditionalRendering.vue';
import ListRendering from './listRendering.vue';
import EventsHandeling from './eventsHandeling.vue';
import FormsInputBindings from './formsInputBindings.vue';
import Watchers from './watchers.vue';
import TodoMain from './Todo List/todoMain.vue';
import Hooks from './hooks.vue';

const abc = ref('hellow ')
const data = [
  {
    id: 1,
    title: 'Abdullah'
  },
  {
    id: 2,
    title: 'Awais'
  }, {
    id: 3,
    title: 'Khaleel'
  }, {
    id: 4,
    title: 'Naveed'
  },

];
const myVariable = ref(0);
function handleClick() {
  myVariable.value++
}

const myString = ref("Repair Desk");
function reverseString() {
  myString.value = myString.value.split("").reverse().join("");
}
const rawHtml = '<span style="color: white; font-size: 20px; background-color: grey; padding: 10px; border-radius: 10px; box-shadow">This should be red.</span>';
const id = 1;
const isDisabled = ref(false);
function handleButtonVisible(params) {
  isDisabled.value = !isDisabled.value;
}
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

function helloFunction(params) {

  return params;
}
const showHelloWorld = ref(false);
function handleShowHelloWorld() {
  showHelloWorld.value = !showHelloWorld.value
}
const reverseString2 = ref("Torque360 Lahore");

const message = ref(55);

const count = ref(0);

</script>
<template>
  {{ abc }}

  <!-- Conditional rendering -->

  <p v-if="abc"> abc is hellow</p>
  <p v-else>abc is false here</p>

  <!-- List rendering -->

  <ul>
    <li v-for="item in data" :key="item.id">{{ item.title }}</li>
  </ul>
  <p>Value of the count is: {{ myVariable }}</p>

  <!-- click function handle -->
  <button @click="handleClick">Add count</button>

  <p>value of the string before reverse is => {{ myString }}</p>
  <button @click="reverseString">Click me to reverse</button>
  <p>value of the string after reverse is => {{ myString }}</p>

  <!-- The rawHtml will show display same plain text here -->

  <p>This is the showing raw html {{ rawHtml }}</p>

  <!-- Showing the styled raw html using v-html  -->

  <p>This is showing raw html using using v-html directive: <span v-html="rawHtml"></span> </p>

  <!-- For giving dynamic id to html attribute-->

  <p v-bind:id="anyId"></p>

  <!-- For short hand giving id -->

  <p :id="anyId"></p>

  <!-- For same name id  -->
  <p :id>Reads id variable as id</p>
  <button :disabled="isDisabled" @click="handleButtonVisible">Disabled button</button>
  <button @click="handleButtonVisible">Enabled button</button>

  <!-- Object bindiing attributes -->

  <div v-bind="objectOfAttrs">This will be obj binding with its attributes</div>

  <!-- Conditional rendering (Turnerey operatorss) -->

  {{ message ? 'The message value is available' : null }}
  {{ message && message + 1 }}
  <!-- <p style="font-size: 20px; color: black;">
    {{ reverseString2.value ? reverseString2.value.split('').reverse().join('') : '' }}
  </p> -->
  <button @click="handleShowHelloWorld">Show hello world</button>
  {{ showHelloWorld ? helloFunction('This is hellow world function') : null }}<br /></br /><br /></br />

  <!-- Two way binding data -->

  {{ count }}
  <input type="text" v-model="count" />
  <br />

  <ReactivityFundamentals />
  <ComputedProperties />
  <ClassAndStylesBinding />
  <CondetionalRendering />
  <ListRendering />
  <EventsHandeling />
  <FormsInputBindings />
  <Watchers />
  <TodoMain />
  <Hooks />

</template>

<style scoped>
/* This styling only for in the object binding attributes */
.wrapper {
  margin-top: 25px;
  background-color: teal;
  color: white;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  height: auto;
}
</style>
