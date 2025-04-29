<script setup>
import { ref, watch } from 'vue'
// Single Ref watchers
const count = ref(85)
const immediateCounter = ref('')
const deefWatcher = ref({
    name: 'Ali',
    age: 25,
    address: {
        street: 'Main Street',
        city: 'Lahore',
        postalCode: 50,
    },
    preferences: {
        theme: 'dark',
        notifications: true
    }
})
const handleIncreaseCount = () => {
    count.value += 5
}
const handleDecreaseCount = () => {
    count.value -= 5
}
watch(count, (newValue, oldValue) => {
    console.log('New Value:', newValue, 'Old Value:', oldValue)
    if (newValue > oldValue && newValue >= 120) {
        alert('Please Stop and take a break');
    }
})
watch(immediateCounter, async (newImmediateCounter, oldImmediateCounter) => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (response.ok) {
        const data = await response.json()
        // console.log('Data: ', data);
    }
}, {
    immediate: true
})

watch(deefWatcher, (newValue, oldValue) => {
    console.log('New Value:', newValue.address.postalCode, 'Old Value:', oldValue.address.postalCode)
}, {
    deep: true
})

watch( ()=>deefWatcher, (newState, oldState) => {
    console.log('New Value: ', newState.value.address.postalCode, 'Old Value:', oldState.value.address.postalCode)
}, {
    deep: true
})

</script>
<template>
    <!-- Single Ref watchers -->
    <h1>Watchers</h1>
    <h2>Watchers value is {{ count }}</h2>
    <button @click="handleIncreaseCount">Increase Count</button>
    <button @click="handleDecreaseCount">Decrease Count</button>
    <br />
    <br />
    <br />
    <br />
    <h2>Count: {{ immediateCounter }}</h2>
    <button @click="immediateCounter++">Add count</button>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>Deep Watcher</h2>
    <h2>Postal Code: {{ deefWatcher.address.postalCode }}</h2>
    <button @click="deefWatcher.address.postalCode +=100">Change code</button>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>Once Watcher</h2>
    <h2>Once Watcher {{  }}</h2>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <!-- Immediate: true  ==> 1 dfa exectue hone py chly or jb jb reactive variable change hoo to tb tb chly -->
    <!--  -->
</template>

<style></style>