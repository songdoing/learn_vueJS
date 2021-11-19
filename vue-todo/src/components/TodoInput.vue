<template>
  <div class="inputBox shadow">
      <!-- enter 키를 쳐도 addTodo methods가 호출되도록 -->
      <input type="text" v-model="newTodoItem" placeholder="what to do?" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">Add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
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
       this.clearInput();
     },
     clearInput : function() {
       //input창 초기화
       this.newTodoItem = '';
     }
   }
}
</script>

<style scoped>
  input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 1.5rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>