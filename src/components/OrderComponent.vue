<template>
   <v-card prepend-icon="mdi-clipboard-plus" title="Добавление заказа" style="width: 600px;">
      <v-card-text>
         <order-product style="margin-bottom: 10px;"
            v-for="(product, index) in order"
            :key="product.id"
            v-model="order[index]"
            @remove="removeProduct(index)"
            :len="order.length"
         ></order-product>
      </v-card-text>
      <v-divider></v-divider>
      <div v-for="er in errors" style="color: red; font-size: 16px; margin-left: 10px;">{{er}}</div>
      <v-card-actions>
         <v-btn
            color="secondary"
            text="Добавить товар"
            variant="outlined"
            @click="addNewProduct"
         >Добавить товар</v-btn>
         <v-spacer></v-spacer>
         <v-btn
            text="Отмена"
            variant="plain"
            @click="cancellation"
         >Отмена</v-btn>
         <v-btn
            color="primary"
            text="Сохранить"
            variant="tonal"
            @click="saveOrder"
         >Сохранить</v-btn>
      </v-card-actions>
   </v-card>
</template>

<script>
import OrderProductComponent from './OrderProductComponent.vue';

   export default {
      components: {'order-product': OrderProductComponent},
      data() {
         return {
            order: [{
            id: Date.now(),
            type: '',
            model: '',
            brand: '',
            price: '',
            img: '',
            }],
            errors: []
         };
      },
      methods: {
         addNewProduct() {
            this.order.push({
            id: Date.now(),
            type: '',
            model: '',
            brand: '',
            price: '',
            img: '',
            });
         },
         removeProduct(index) {
            this.order.splice(index, 1);
         },
         cancellation() {
            this.order = [{
            id: Date.now(),
            type: '',
            model: '',
            brand: '',
            price: '',
            img: '',
            }];
            this.errors = [];
            this.$emit('close-dialog');
         },
         saveOrder() {
            this.errors = [];
            for (const product of this.order) {
            if (!product.type || !product.brand || !product.model || !product.price) {
               this.errors.push('Пожалуйста, заполните все поля :)');
               break;
            }
            }
            for (const product of this.order) {
            if (isNaN(Number(product.price)) ||
                  Number(product.price) < 0 ) {
               this.errors.push('Введите корректное неотрицательное число');
               break;
            }
            }
            if (this.errors.length === 0)
            {
            this.$emit('save-order', JSON.parse(JSON.stringify(this.order)));
            this.order = [{
               id: Date.now(),
               type: '',
               model: '',
               brand: '',
               price: '',
               img: '',
            }];
            this.errors = [];
            }
         }
      }
   }
</script>