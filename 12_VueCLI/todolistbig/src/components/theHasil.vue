<template>
<div>
    <input type="text" class="baru" v-model="baru" @keyup.enter="weTambah" id="baru" >
        <button v-if="!isEdit" @click="weTambah()">tambahkan</button>
        <button v-else @click="saveEdit()">Save</button>
    <div class="tabel">
         <!-- <table v-if="todos.length > 0" class="tabelbodi">
            <thead>
                <td><h3>List yang harus dikerjakan</h3></td>
            </thead>
            <tbody v-for="(todo, index) in todos" :key="todo.id">
                <td scope="row" class="tabelnomor">{{index + 1}}</td>
                <td>{{todo.title}}</td>
                <td><button @click="removeTask(index)">Hapus</button></td>
                 <td><button @click="updateTask(index)" id="update">Edit</button></td>
            </tbody>
        </table> -->
        <ol>
          <li v-for="(todo, index) in todos" :key="index">
            {{todo}}
          <button @click="removeTask(index)">Hapus</button>
          <button @click="updateTask(index)" id="update">Edit</button> 
          </li>
        </ol>
        </div>
        </div>
</template>

<script>

export default {
  name: 'theHasil',


   data() {
    return {
      todos: [],
        currentIndex: 0,
        isEdit: false,
        baru: ""
    }
  },
  methods: {
    weTambah() {
      if (this.baru == ''){
            alert("kosong")
      }else{
          this.todos.push(this.baru)
        this.baru = ""
      }
    },
     removeTask(index) {
      this.todos.splice(index, 1)
  },
  updateTask(index) {
    const currentValue = this.todos[index];
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
