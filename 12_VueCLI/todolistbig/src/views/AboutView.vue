<template>
<div>
 <ul>
      <li v-for="(laptop, index) in laptopList" :key="index">
        Brand: {{ laptop.brand }}
        <br />
        Price: Rp. {{ laptop.price }}
      </li>
    </ul>
    <input type="text" v-model="inputBrand" placeholder="Brand" />
    <br />
    <input type="text" v-model="inputPrice" placeholder="Price" />
    <br /><br />
    <button @click="pushLaptop()">Push User</button>
</div>
</template>

<script>
export default {
  
  data(){
    return {
      inputBrand: "",
      inputPrice: "",
  }
  },
  
  computed: {
   laptopList() {
      return this.$store.state.product.list;
    },
    
  },
  methods: {
    pushLaptop() {
      this.$store.dispatch("product/setList", {
        brand: this.inputBrand,
        price: this.inputPrice,
      });
    },
    
  }
}
</script>
