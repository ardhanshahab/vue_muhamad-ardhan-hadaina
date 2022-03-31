<template>
<div>
  <h1>TODOLIST</h1>
    <input type="text" class="baru" v-model="baru" @keyup.enter="weTambah" id="baru" >
        <button v-if="!isEdit" @click="weTambah()">tambahkan</button>
        <!-- <button v-else @click="saveEdit()">Save</button> -->
    <div class="tabel">
        <ol>
          <li v-for="(todo, index) in todos" 
          :key="index"
          @click="redirect(todo)" >
            {{todo}}
          <!-- <button @click="removeTask(index)">Hapus</button>
          <button @click="updateTask(index)" id="update">Edit</button>  -->
          </li>
        </ol>
        </div>
        <hr/>
        <input type="text" v-model="inputBrand" placeholder="Brand" />
    <br />
    <input type="text" v-model="inputPrice" placeholder="Price" />
    <br /><br />
    <button @click="pushLaptop">Push User</button>
        <li v-for="(laptop, index) in laptopList" :key="index">
        Brand: {{ laptop.brand }}
        <br />
        Price: Rp. {{ laptop.price }}
      </li>
        </div>
</template>

<script>
export default {
  name: 'theHasil',


   data() {
    // return {
    //   todos: [],
    //     currentIndex: 0,
    //     isEdit: false,
    //     baru: "", 
    // }
  },
  
  computed: {
    computetodo() {
      return this.$store.state.todolist.todo;
    },
    
  },
  
  // methods: {
  //   redirect(todo){
  //     return this.$router.push({ name: 'taskDetail', params: {item: todo},
  //   })
  //   },
 
  //   weTambah() {
  //     if (this.baru == ''){
  //           alert("kosong")
  //     }else{
  //       const todo = this.baru
  //       // this.$store.dispatch("todolist/setList",
  //       // {
        
  //       // name: todo},
  //       console.log("good", todo)
  //       //,)
  //       }
  //   },
  //    removeTask(index) {
  //     this.todos.splice(index, 1)
  // },
  // updateTask(index) {
  //   const currentValue = this.todos[index];
  //   console.log(currentValue)
  //   this.baru = currentValue;
  //   this.isEdit = true;
  //   this.currentIndex = index;
      
  //   },
  //   saveEdit() {
  //   this.todos.splice(this.currentIndex, 1, this.baru)
  //   this.baru = "";
  //   this.isEdit = false;
  //   this.currentIndex = 0;
  //           },
  //   }
  

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.baru {
  width: 80%;
}
.tabel {
  justify-content: center;
    text-align: center;
  list-style-type: none;
  padding: 20px 20px;
  border: 10px;
  border-color: black;
  margin: 10px;

}
td {
    text-align: center;
  display: inline-block;
  margin: 0 15px;
}

</style>
