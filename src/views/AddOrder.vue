<template>
   <order @save-order="addNewOrder" @close-dialog="closeDialog" ></order>
</template>

<script>
import OrderComponent from '@/components/OrderComponent.vue';

export default {
   components: {order: OrderComponent},
   methods: {
      closeDialog () {
         this.$router.push('/');
      },
      addNewOrder(order) {
         console.log('на передачу', order)
         this.$router.push({ path: '/', query: { order: JSON.stringify(order) } });
      },
   }
}
</script>