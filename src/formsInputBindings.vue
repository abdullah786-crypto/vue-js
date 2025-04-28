<script setup>
import { ref, computed } from 'vue';

const text = ref('');
const text2 = ref('');
const text3 = ref('');
const focused = ref(false);
const checkbox = ref(false);
const checkedNames = ref([]);
const radioValue = ref([]);
const dropdownValue = ref([]);
const dropdownOptions = ref([
    { value: 'option 1', text: 'Option 1' },
    { value: 'option 2', text: 'Option 2' },
    { value: 'option 3', text: 'Option 3' },
    { value: 'option 4', text: 'Option 4' },
    { value: 'option 5', text: 'Option 5' },
]);
const selectDropdown = ref('option 1');

const onFocus = () => {
    focused.value = true;
}

const onBlur = () => {
    focused.value = false;
}

const inputStyle = computed(() => {
    return {
        borderColor: focused.value ? 'grey' : 'grey',
        borderWidth: '2px',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        outline: 'none',
        height: '100px',
        width: '300px',
    };
});

</script>

<template>

    <h2>Text is {{ text }}</h2>
    <input type="text" @input="event => text = event.target.value" />

    <h1>Input Binding</h1>
    <h2>Text is {{ text2 }}</h2>

    <input type="text" v-model="text2" placeholder="Enter your name" />

    <h1>Input Binding Text area</h1>
    <h2 v-bind:style="{ whiteSpace: 'pre-line' }">Text is {{ text3 }}</h2>
    <textarea @focus="onFocus" @blur="onBlur" :style="inputStyle" placeholder="Enter paragraph here..."
        v-model="text3" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>For Check Box with (v-model)</h2>
    <input type="checkbox" v-model="checkbox" /> {{ checkbox }}
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>For Check Box simple</h2>
    <input type="checkbox" @click="checkbox = !checkbox" /> {{ checkbox }}
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>Multiple check boxes</h2>
    <h2>Selected Names are: {{ checkedNames }}</h2>
    <input :type="'checkbox'" v-model="checkedNames" :value="'Ali'" :id="'ali'" />
    <label :for="'ali'">Ali</label>
    <input :type="'checkbox'" v-model="checkedNames" :value="'Umar'" :id="'umar'" />
    <label :for="'umar'">Umar</label>
    <input :type="'checkbox'" v-model="checkedNames" :value="'Zeeshan'" :id="'zeeshan'" />
    <label :for="'Zeeshan'">Zeeshan</label>

    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>Radio Values: {{ radioValue }} </h2>
    <input :type="'radio'" v-model="radioValue" :value="'One'" :id="'one'" />
    <label>One</label>
    <input :type="'radio'" v-model="radioValue" :value="'Two'" :id="'two'" />
    <label>Two</label>
    <input :type="'radio'" v-model="radioValue" :value="'Three'" :id="'three'" />
    <label>Three</label>
    <input :type="'radio'" v-model="radioValue" :value="'Four'" :id="'four'" />
    <label>Four</label>
    <input :type="'radio'" v-model="radioValue" :value="'Five'" :id="'five'" />
    <label>Five</label>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- For dropdown -->
    <h2>For Dropdown</h2>
    <h2>Selected value is: {{ dropdownValue }}</h2>
    <select multiple placeholder="Select values" v-model="dropdownValue" :id="'dropdown'" :name="'dropdown'">
        <option :value="dropdownValue" >Select values</option>
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>
        <option :value="5">5</option>
    </select>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>For Dropdown with v-for</h2>
    <h2>Selected value is: {{ selectDropdown }}</h2>
    <select v-model="selectDropdown">
        <option v-for="(option, index, value) in dropdownOptions" :value="option.value">
            {{ option.text }}
        </option>

    </select>
    <!--  -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />


</template>

<style></style>