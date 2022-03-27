<template>
  <div>
    <button @click="() => this.$router.push('/')">Kembali</button>
  <h1>Halaman Detail</h1>
  <div>
    <ol>
  <li >{{ item }}</li>
  </ol>
 
  </div>
  </div>
</template>

<script>
export default {
  name: 'detailVue',
  data() {
    return{
      isEdit: false,
    }

  },
  computed: {
    item(){
      return this.$route.params.item;
    }, 
  },
  methods: {
      updateTask(index) {
    const currentValue = this.item;
    console.log(currentValue)
    this.baru = currentValue;
    this.isEdit = true;
    this.currentIndex = index;
      
    },
    saveEdit() {
    this.todos.splice(this.currentIndex, 1, this.baru)
    this.baru = "";
    this.isEdit = false;
    this.currentIndex = 0;
            },
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
