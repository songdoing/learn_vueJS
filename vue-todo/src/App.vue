<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem  "></TodoInput>
    <TodoList v-bind:propsdata = "todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  data() {
    return {
      todoItems : []
    }
  }, 
  methods : {
    addOneItem(todoItem) {      
      const obj = {completed : false, item : todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      // todoItem은 object이고, 그 중 item을 지우기
      localStorage.removeItem(todoItem.item);
      // slice()는 기존배열 변경하지 않고, splice() 새로운 배열을 리턴
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      // todoItem.completed = !todoItem.completed;
      // 위에꺼는 props로 내린 것을 다시 올려서 쓴거라, 안 좋음
      // 아래꺼처럼 직접 data에 접근하여 표현하는 방식이 옳아
      this.todoItems[index].completed = !this.todoItems[index].completed;
      //로컬스토리지에 다시 갱신하는 것
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // created() {
  //   // 로컬스토리지에 있는 데이터를 가져오기
    
  // },
  components : {
    //컴포넌트 태그명 : 컴포넌트 이름
    // 'TodoHeader' : TodoHeader,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList,
    // 'TodoFooter' : TodoFooter,
    // 향상된 객체 리터럴, 속성,값이 같으면 하나만
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color : #F6F6F6;
  }
  input {
    border-style : groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
