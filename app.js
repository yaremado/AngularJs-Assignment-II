(function(){
'use strict'

angular.module('ShoppingListCheckOff',[])

.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemToBuy = this;

  itemToBuy.items = ShoppingListCheckOffService.getItemToBuy();
  itemToBuy.empty = ShoppingListCheckOffService.isToBuyEmpty();
  itemToBuy.buyItem = function (itemIndex){
     ShoppingListCheckOffService.buyItem(itemIndex);
     itemToBuy.empty = ShoppingListCheckOffService.isToBuyEmpty();
   };
}

AlreadyBoughtController.$ingect = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var itemBought = this;

  itemBought.items = ShoppingListCheckOffService.getItemAlreadyBought();
}

function ShoppingListCheckOffService(){
  var service = this;

  var itemToBuy = [
    {name: "cookies", quantity: 11},
    {name: "cookies", quantity: 12},
    {name: "cookies", quantity: 13},
    {name: "cookies", quantity: 14},
    {name: "cookies", quantity: 15} ];

  var itemBought = [];

service.getItemToBuy = function (){
  return itemToBuy;
};

service.isToBuyEmpty = function (){
  return itemToBuy.length !==0;
};
service.getItemAlreadyBought = function(){
  return itemBought;
};

service.buyItem = function(itemIndex){
  itemBought.push(itemToBuy[itemIndex]);
  itemToBuy.splice(itemIndex, 1);
} ;
}


})();
