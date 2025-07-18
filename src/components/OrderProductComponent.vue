<template>
   <v-card style="padding: 10px; border: solid 1px grey">
      <div style="display: flex; margin-bottom: 10px; align-items: center;">
         <v-card-title>Товар</v-card-title>
         <v-spacer></v-spacer>
         <v-btn
            v-if="len > 1"
            color="red"
            text="Удалить"
            variant="outlined"
            @click="remove">Удалить</v-btn>
      </div>
      <v-row dense>
         <v-col cols="12" md="6" sm="6">
            <v-select
               :items="types_of_devices"
               label="Тип устройства*"
               required
               v-model="product.type"
            ></v-select>
         </v-col>
         <v-col cols="12" md="6" sm="6">
            <v-text-field 
               label="Бренд*"
               required
               v-model="product.brand">
            </v-text-field>
         </v-col>
         <v-col cols="12" md="6" sm="6">
            <v-text-field 
               label="Модель*"
               required
               v-model="product.model">
            </v-text-field>
         </v-col>
         <v-col cols="12" md="6" sm="6">
            <v-text-field 
               label="Цена*"
               required
               v-model="product.price">
            </v-text-field>
         </v-col>
         <div style="display: flex; align-items: center; width: 99%;">
         <v-file-input 
            @change="onImageChange" 
            @click:clear="clearImage" 
            label="Загрузите изображение" 
            accept="image/*" 
            prepend-icon="mdi-camera" 
            outlined 
         ></v-file-input>
         <v-img 
            style="margin-top: 0 !important;"
            v-if="imageUrl" 
            :src="imageUrl" 
            class="mt-3" 
            max-height="200" 
            max-width="200" 
            contain 
         ></v-img>
         </div>
      </v-row>
   </v-card>
</template>

<script>
   export default {
      props: ['modelValue', 'len'],
      computed: {
         product: {
            get() {
            return this.modelValue;
            },
            set(value) {
            this.$emit('update:modelValue', value);
            }
         }
      },
      methods: {
         remove() {
            this.$emit('remove');
         },
         onImageChange(event) {
         const file = event.target.files[0];
         if (file) {
            // Создайте URL для отображения
            this.imageUrl = URL.createObjectURL(file);
            // Убедитесь, что вы сохраняете имя файла
            this.product.img = file.name; // Сохраняем только имя файла
         }
         },
         clearImage() {
            this.imageUrl = null;
            this.product.img = null; 
         }
      },
      data() {
         return {
            imageUrl: null,
            types_of_devices: ['Смартфон', 'Ноутбук', 'Телевизор', 'Аксессуар', 'Наушники', 'Планшет']
         }
      }
   }
</script>