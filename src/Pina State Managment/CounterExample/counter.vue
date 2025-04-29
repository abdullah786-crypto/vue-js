<script setup>

import { storeToRefs } from 'pinia';
import { useCounterStore } from '../Store/counterStore';
// storeToRefs
// storeToRefs

    const newCount = useCounterStore()
    const { count, fiveTimesCount } = storeToRefs(newCount)

</script>

<template>

    <h1>Pina State Managment</h1>

    <h3>Simple Count: {{ count }}</h3>

    <br />
    <br />
    <h3>Five time Count: {{ fiveTimesCount }}</h3>

    <br />
    <br />
    <button @click="newCount.IncrementCount">Increment Count</button>
    <br />
    <br />
    <button @click="newCount.decrementCount">Decrement Count</button>
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

<style>

</style>