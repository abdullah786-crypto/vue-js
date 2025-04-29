<script setup>

import { computed, onMounted, onBeforeMount, onUpdated, ref, onBeforeUpdate } from 'vue'

const usersClass = ref('userDiv')
const labelStyle = ref('labelStyle')

const usersData = ref([])
const setUserData = (data) => {
    usersData.value = [...data]
}

onBeforeMount(() => {
    console.log('Data is being fetched before mount calling');
})

onMounted(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.status === 200) {
        setUserData(await response.json())
        console.log('Data fetched successfully on mounted')
        computed(() => {
            console.log('computed is call here');

            return usersData.value.map((item, index) => {
                return `Id: ${item.id} - ${item.title}`
            })
        })
    }
})

onBeforeUpdate(() => {
    console.log('On before update is call here before onUpdate hook');
})

onUpdated(() => {
    console.log('On update is call here after onMounted');
})
</script>

<template>

    <h1>Hooks component called</h1>

    <h1>Users Data</h1>
    <div>
        <ul v-if="usersData !== null">
            <li v-for="(users, index) in usersData">
                <div v-bind:class="usersClass">
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">User Id:</p> &nbsp;&nbsp; <p :style="{ margin: '0px' }">{{ users.id
                        }}</p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">Title:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{ users.name
                            }}
                        </p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">Body:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{
                            users.username
                            }}</p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">Email:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{ users.email
                        }}</p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">Street Address:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{
                            users.address.street }}</p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">City:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{
                            users.address.city }}</p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">Phone:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{ users.phone
                        }}</p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">Website:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{
                            users.website }}</p>
                    </div>
                    <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'start', margin: '10px 0px' }">
                        <p v-bind:class="labelStyle">Company:</p>&nbsp;&nbsp; <p :style="{ margin: '0px' }">{{
                            users.company.name }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br />

</template>

<style>
.userDiv {
    height: auto;
    width: 65%;
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
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: lavenderblush;
    color: green;
    text-align: justify;
    font-size: 20px;
    margin-bottom: 10px;

}

.labelStyle {
    color: rgb(35, 31, 31);
    font-weight: 700;
    font-size: 20px;
    margin: 0px;
}
</style>