const state = () => ({
    name: "Lenovo",
    price: "10.000.000",
    list: [
      {
        brand: "Lenovo",
        price: "10.000.000"
      },
      {
        brand: "Apple",
        price: "20.000.000"
      },
      {
        brand: "ASUS",
        price: "15.000.000"
      }
    ]
  });
  
  // Coba bikin mutations dari 3 global state di atas
  const mutations = {
    setName(state, param) {
      state.name = param;
    },
    setPrice(state, param) {
      state.price = param;
    },
    setList(state, param) {
      state.list = param;
    }
  };
  
  const actions = {
    setList(store, param) {
      const laptops = store.state.list;
  
      laptops.push({
        brand: param.brand,
        price: param.price
      });
  
      console.log(laptops, param);
  
      store.commit("setList", laptops);
    }
  };
  
  export default {
    state,
    mutations,
    actions
  };
  