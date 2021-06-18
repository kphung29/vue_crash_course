const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Smith',
      email: 'kphung29@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json();
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.picture = results[0].picture.large;
    }
  }
})

app.mount('#app')