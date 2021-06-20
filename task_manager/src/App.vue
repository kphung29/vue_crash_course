<template>
  <div class="container">
  <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />
  <div v-if="showAddTask">
  <AddTask @add-task="addTask"/>
  </div>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task => task.id !== id))
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task => task.id === id ? {... task, reminder: !task.reminder} : task))
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 04:30pm',
        reminder: true
      },
       {
        id: 2,
        text: 'Meeting at Forbes',
        day: 'March 11st at 3:30pm',
        reminder: true
      },
       {
        id: 3,
        text: 'Final Exam',
        day: 'April 7th at 11:30am',
        reminder: true
      }
    ]
  }
 };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
