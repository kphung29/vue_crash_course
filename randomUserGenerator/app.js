const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Smith',
      email: 'kphung29@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  }
})

app.mount('#app')