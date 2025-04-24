<script setup>

import { ref, computed, reactive } from 'vue';


const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ],
})

const getAllBooksCount = computed(() => {
    return author.books.length
})

const getAllBooksData = computed(() => {
    return author.books.map((book) => {
        return book
    } )
})
const firstName = ref('John')
const lastName = ref('Doe')
const count = ref(0)

const fullName = computed(()=>{
    console.log(count+1);
    
    return firstName.value.concat('',' ', lastName.value) 
})
</script>

<template>
    <p>Total books are: {{ getAllBooksCount }}</p>
    <ul>
        <li v-for="item in getAllBooksData">{{ item }}</li>
    </ul>

    <br />
    <br />
    <input :type="text" placeholder="First Name" v-model="firstName" />
    <br />
    <br />
    <input :type="text" placeholder="Last Name" v-model="lastName"/>

    <p>Full name is : {{ fullName }}</p>

    

</template>

<style></style>