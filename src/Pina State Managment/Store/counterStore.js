
import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    // State
    const count = ref(1)
    // Getters
    const fiveTimesCount = computed(() => count.value * 5)
    // Actions / Functions
    function IncrementCount() { 
        count.value++
    }
    function decrementCount() {
        count.value--
    }


    return {
        count, 
        IncrementCount,
        decrementCount,
        fiveTimesCount,
    }
})