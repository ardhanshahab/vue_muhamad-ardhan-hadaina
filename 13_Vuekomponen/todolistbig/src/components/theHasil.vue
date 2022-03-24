<template>
<div>
    <input type="text" class="baru" v-model="baru" @keyup.enter="weTambah" id="baru" >
        <button @click="weTambah()">tambahkan</button>
    <div class="tabel">
         <table v-if="todos.length > 0" class="tabelbodi">
            <thead>
                <td><h3>List yang harus dikerjakan</h3></td>
            </thead>
            <tbody v-for="(todo, index) in todos" :key="todo.id">
                <td scope="row" class="tabelnomor">{{index + 1}}</td>
                <td>{{todo.title}}</td>
                <td><button @click="removeTask(index)">Hapus</button></td>
                 <td><button @click="updateTask(index)" id="update">Edit</button></td>
            </tbody>
        </table>
        </div>
        </div>
</template>

<script>

export default {
  name: 'theHasil',
  props: [''],

   data() {
    return {
      todos: [
        {
        id: 1,
        title: "Makan"
      },
      {
        id: 2,
        title: "Makann"
      },{
        id: 3,
        title: "Makannn"
      },
        ]
    }
  },
  methods: {
    weTambah() {
      if (this.baru == ''){
            alert("kosong")
      }else{
          this.todos.push({
              title:this.baru
        }
    )
        this.baru = ""
      }
    },
     removeTask(index) {
      this.todos.splice(index, 1)
  },
  updateTask(index) {
      this.todos.splice(index, 1)
        this.todos.push({
              title:this.baru
        })
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
