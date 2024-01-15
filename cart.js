'use strict';

const cart = {
   items: [],
   totalPrice: 0,
   count: 0,

   getTotalPrice() {
      return console.log(this['totalPrice']);
   },

   add(x, y, z){
      const obj = {'nameProduct': x, 'price': y, 'count': z};
      const array = this.items.push(obj);
      this.calculateItemPrice();
      this.increaseCount(z);
      return array;
   },

   increaseCount(z){
      return this.count = this.count + z;
   }, 

   calculateItemPrice(){
      const array = [];
      const prices = this.items.map((item) => {
         const {
            price,
         } = item;
         return array.push(price);
      });
      const totPrice = array.reduce((acc, item) => {
         return acc + item;
      }, 0);
      return this.totalPrice = totPrice;
   },

   clear(){
      return this.items.splice(0, this.items.length), this.totalPrice = 0, this.count = 0;
   },

   print(){
      const str = JSON.stringify(this.items);
      console.log('Корзина ', str);
      console.log('Общая стоимость товаров в корзине = ', this.totalPrice);
      console.log('Общее количество товаров в корзине = ', this.count);
   },
};


cart.add('яйца', 130, 1);
cart.add('молоко', 120, 1);
cart.add('рожки', 65, 1);
cart.add('сыр', 465, 1);
cart.add('масло', 420, 1);
cart.print();
cart.getTotalPrice();

cart.clear();
console.log('Товары из корзины удалены', cart.items);
console.log('Общая стоимость товаров в корзине = ', cart.totalPrice);
console.log('Общее количество товаров в корзине = ', cart.count);

