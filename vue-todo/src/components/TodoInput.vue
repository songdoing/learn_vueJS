<template>
  <div class="inputBox shadow">
      <!-- enter 키를 쳐도 addTodo methods가 호출되도록 -->
      <input type="text" v-model="newTodoItem" placeholder="what to do?" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">Add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>

      <Modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">
          Warning!
          <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
        </h3>
        <div slot="body">Please enter your word.</div>
        <h5 slot="footer">copyright : Jenny Song</h5>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
   data : function() {
     return {
       newTodoItem : '',
       showModal : false,
     }
   },
   methods : {
     addTodo : function() {
       if(this.newTodoItem != '') {
          // var obj = {completed : false, item : this.newTodoItem};
          // console.log(this.newTodoItem);
          //로컬스토리지에 저장 , JSON.stringify()를 써서 string 으로 저장되도록
          //  localStorage.setItem(this.newTodoItem, obj); value에 그냥 object로 잡힘
          // JSON.stringify하면 object내용이 value에 상세히 보임
          // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
          // this.$emit('이벤트 이름', 인자1, 인자2, ...)
          this.$emit('addTodoItem', this.newTodoItem);
          this.clearInput();
       }else {
         this.showModal = !this.showModal;
       }       
     },
     clearInput : function() {
       //input창 초기화
       this.newTodoItem = '';
     }
   },
   components : {
     Modal : Modal
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
  width : 800px;
  text-align: center;
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
.closeModalBtn, h3 {
  color : red;
}

</style>