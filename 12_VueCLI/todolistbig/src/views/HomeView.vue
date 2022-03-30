<template>
  <div>
    <ul>
      <li v-for="(user, index) in userList" :key="index">
        Name: {{ user.name }}
        <br />
        Age: {{ user.age }}
      </li>
    </ul>

    <br /><br /><br />

    <input type="text" v-model="inputName" placeholder="Name" />
    <br />
    <input type="text" v-model="inputEmail" placeholder="Email" />
    <br />
    <input type="number" v-model="inputAge" placeholder="Age" />
    <br /><br />
    <button @click="pushUser">Push User</button>

    <br /><br /><br />

    <!--  -->
    <hr />
    <!--  -->

    <ul>
      <li v-for="(laptop, index) in laptopList" :key="index">
        Brand: {{ laptop.brand }}
        <br />
        Price: Rp. {{ laptop.price }}
      </li>
    </ul>

    <br /><br /><br />

    <input type="text" v-model="inputBrand" placeholder="Brand" />
    <br />
    <input type="text" v-model="inputPrice" placeholder="Price" />
    <br /><br />
    <button @click="pushLaptop">Push User</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputAge: 0,
      inputBrand: "",
      inputPrice: "",
    };
  },
  computed: {
    userList() {
      return this.$store.state.user.list;
    },
    laptopList() {
      return this.$store.state.product.list;
    },
  },
  methods: {
    pushUser() {
      this.$store.dispatch("user/setList", {
        name: this.inputName,
        age: this.inputAge,
      });
    },
    pushLaptop() {
      this.$store.dispatch("product/setList", {
        brand: this.inputBrand,
        price: this.inputPrice,
      });
    },
  },
};
</script>