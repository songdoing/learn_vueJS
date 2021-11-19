<template>
  <div>
      <input type="text" v-model="newTodoItem" placeholder="what to do?">
      <button v-on:click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
   data : function() {
     return {
       newTodoItem : '',
     }
   },
   methods : {
     addTodo : function() {
       console.log(this.newTodoItem);
       //로컬스토리지에 저장
       localStorage.setItem(this.newTodoItem, this.newTodoItem);
       //input창 초기화
       this.newTodoItem = '';
     }
   }
}
</script>

<style>

</style>