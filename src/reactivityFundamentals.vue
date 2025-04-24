<script>
import { ref, reactive, defineOptions, computed } from 'vue'

// defineOptions({
//     name: 'ReactivityFundamentals',
// })

// const count2 = ref(0);
// const obj = ref({
//   nested: { count: 0 },
//   arr: ['foo', 'bar']
// })

// function mutateDeeply() {
//   // these will work as expected.
//   obj.value.nested.count++
//   obj.value.arr.push('baz')
// } 

// function handleUpdateCount() {
//   count2.value = count2.value + 2;
//   console.log('value of the count is ', count2.value);
// }
// const state = reactive({
//   id: 1,
//   title: 'Abdullah',
//   location: 'Lahore'
// })

// const state2 = reactive({
//   user: {
//     name: 'Alice',
//     details: {
//       age: 30
//     }
//   }
// });
export default {
  // `setup` is a special hook dedicated for the Composition API.
  setup() {
    const count = ref(0)
    const user = reactive({
      name: 'Abdullah',
      age: 15,
    })

    function handleUpdateCount() {
      count.value = count.value + 1
    }

    function ageUpdate() {
      user.age = user.age + 5
    }
    function handleChangeName(event) {
      user.name = event.target.value
    }

    // expose the ref to the template
    return {
      count, user, handleUpdateCount, ageUpdate, handleChangeName
    }
  },
  data() {
    return {
      count: 0,
      userName: 'Ahmed'
    }
  },
  // Computed Properties
  computed: {
    doubleCount() {
      return this.count * 2
    },
    greeting() {
      return `Assalam-o-Alaikum, ${this.userName}!`
    },
    name() {
      return this.userName
    }
  },
  // Methods
  methods: {
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    },
    changeName() {
      this.userName = this.userName === 'Ahmed' ? 'Usman' : 'Ahmed'
    },
    updateName(e) {
      this.userName = e.target.value
    }
  },
  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'Vue seekho', completed: false },
        { text: 'Project banao', completed: true },
        { text: 'Market jao', completed: true },
        { text: 'Play games', completed: false },
        { text: 'Exercise kro', completed: true },
        { text: 'Walk kro', completed: false },
        { text: 'Job Search kro', completed: false },
        { text: 'React seekho', completed: true },
        { text: 'Cricket khelo', completed: false }
      ],
      filter: 'all',
      showRemaining: false,
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'completed') {
        return this.todos.filter((todo) => todo.completed === true)
      } else if (this.filter === 'all') {
        return this.todos
      }
      else {
        if (this.filter === 'active') {
          return this.todos.filter((todo) => todo.completed === false)
        }
      }
      // return this.todos
    },
    remainingTodos() {
      return this.todos.filter((todo) => !todo.completed).length
    }
  },
  methods: {
    getCompletedTodos(){
      this.filter = 'completed'
    },
    getNotCompletedTodo(){
      this.filter = 'active'
    },
    getAllTodos(){
      this.filter = 'all'
    },
    getRemainingTodos(){
      this.showRemaining = !this.showRemaining
    }
  }
}
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const getAllBooksCount = computed(() => {
  return author.books.length
} )
</script>

<template>

  <h1>Hi this is h1 in Vue 3</h1>
  <p>Value of count is {{ count }}</p>
  <button @click="handleUpdateCount">Count + 1</button>
  <br />
  <br />
  <br />
  <p>Age of user is {{ user.age }}</p>
  <br />
  <p>Name of the user is {{ user.name }}</p>
  <br />
  <input :type="text" @change="(e) => handleChangeName(e)" />
  <button @click="ageUpdate">Update age</button>
  <br />
  <br />
  <br />
  <br />
  <div id="counter-app">
    <p>{{ greeting }}</p>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Barhao (+1)</button>
    <button @click="reset">Reset</button>
    <button @click="changeName">Name Badlo</button>
    <br />
    <br />
    <br />
    <br />
    <p>Name of te user is {{ name }}</p>
    <br />
    <br />
    <br />
    <br />

    <input type="text" @change="updateName" />
    <br />
    <br />
    <br />
    <br />
    <button @click="getAllTodos">All Todos</button>
    <button @click="getCompletedTodos">Completed Todo</button>
    <button @click="getNotCompletedTodo">Not Completed todo</button>
    <button @click="getRemainingTodos">Remaining Todos</button>

    <ul>
      <li v-for="(todo, index) in filteredTodos">
        <div style="display: flex; flex-direction: row;">
          <p>title: {{ todo.text }}</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <p>Status: {{ todo.completed }}</p>
        </div>
      </li>
    </ul>

    <p v-if="showRemaining">Remaining Todos are: {{ remainingTodos }}</p>
    <br />
    <br />
    <br />
    <br />
    <p>{{ getAllBooksCount }}</p>
  </div>

</template>

<style></style>