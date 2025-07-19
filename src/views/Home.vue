<template>
   <v-app>
      <v-main>
        <v-container @save-order="addNewOrder">
            <div style="display: flex; gap: 40px; justify-content: center; align-items: center;" >
            <search-field @update-search="updateSearchQuery"></search-field>
            <router-link to="/add-order">
               <v-btn
                  class="text-none font-weight-regular"
                  prepend-icon="mdi-clipboard-plus"
                  text="Добавить заказ"
                  variant="tonal"
               >Добавить заказ</v-btn>
            </router-link>
            </div>
         <div style="display: flex; justify-content: center;">
               <v-list style="margin-top: 10px;">
               <v-list-item style="width: 500px; border: 2px solid #9c57e1; border-radius: 10px !important; margin-bottom: 5px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); padding: 20px;"
               v-for="(order, idx) in filteredOrders"
               :key="idx">
                  
                  <v-list-item-title style="text-align: left;">
                     <b>Заказ {{ idx + 1 }}</b>
                  </v-list-item-title>
                  <v-divider style="border-color: #2d3235; border-width: 2px;"></v-divider>
                  <div v-for="(or, idx) in order" :key="idx">
                     <v-list-item-subtitle style="text-align: left;">
                        <b>{{or.type}}</b> | Бренд: {{or.brand}}
                     </v-list-item-subtitle>
                     <v-list-item-subtitle style="text-align: left;">
                        Модель: {{or.model}} |  Цена: {{or.price}} руб.
                     </v-list-item-subtitle>
                     <img v-if="or.img" :src="or.img" style="width: 90px; height: 70px; background-color: #9c57e1; display: block; margin: 5px;" />
                     <div v-else style="width: 90px; height: 70px; background-color: lightgray; 
                        color: #2d3235; margin: 5px; justify-content: center; align-items: center; display: flex;">
                        Картинка</div>
                     <v-divider style="border-color: #2d3235; border-width: 2px;"></v-divider>
                  </div>
                  <v-list-item-subtitle style="text-align: left;">Итого:</v-list-item-subtitle>
                  <v-list-item-subtitle style="text-align: left;">
                     {{ order.length }} {{ getWord(order.length, ['товар', 'товара', 'товаров']) }} на сумму: {{ order.reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0) }} руб.
                  </v-list-item-subtitle>
               </v-list-item>
               </v-list>
           
         <p v-if="filteredOrders.length === 0" style="font-size: 18px; color: rgb(192, 106, 239); text-align: center;">Ничего не найдено!</p>

         </div>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import products from '@/api/products';
import store from '@/store/store';

export default {
   components: {'search-field': SearchComponent},
   data() {
   return {
      searchQuery: '',
   }},
   computed: {
      orders () {
         return store.state.gadgets;
      },
      filteredOrders() {
         const query = this.searchQuery.toLowerCase();
         if (!query) {
            return this.orders;
         }
         return this.orders.filter(order =>
            order.some(item =>
               item.brand.toLowerCase().includes(query) ||
               item.model.toLowerCase().includes(query) ||
               item.type.toLowerCase().includes(query)
            )
         );
      }
   },
   created() {
      products.getGadgets(orders => {
         store.commit('setGadgets', orders)
      })
   },
   mounted() {
      const orderQuery = this.$route.query.order;
      if (orderQuery) {
         const order = JSON.parse(orderQuery);
         const isExist = this.orders.some(existingOrder => 
            JSON.stringify(existingOrder) === JSON.stringify(order)
         );
         if (!isExist) {
            store.commit('addGadget', order);
         }
      }
   },
   methods: {
      getWord(n, words) {
         n = Math.abs(n) % 100;
         var n1 = n % 10;
         if (n > 10 && n < 20) return words[2];
         if (n1 > 1 && n1 < 5) return words[1];
         if (n1 == 1) return words[0];
         return words[2];
      },
      updateSearchQuery(query) {
         this.searchQuery = query;
      },
   },
}
</script>