import { createStore } from 'vuex'

const store = createStore({
   state() {
      return {
         gadgets: []
      }
   },
   mutations: {
      setGadgets(state, gadgets) {
         state.gadgets = gadgets
      },
      addGadget(state, order) {
         state.gadgets.push(order)
      }
   },
})

export default store;