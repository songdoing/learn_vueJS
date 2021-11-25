<template>
  <div>
     <ul>
       <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
       <i class="checkBtn fas fa-check" v-on:click="toggleComplete"></i>
       {{ todoItem }}
       <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
         <i class="fas fa-trash-alt"></i>
       </span>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  data : function() {
    return {
      todoItems : []
    }
  },
  methods : {
    removeTodo : function(todoItem, index) {
      localStorage.removeItem(todoItem);
      // slice()는 기존배열 변경하지 않고, splice() 새로운 배열을 리턴
      this.todoItems.splice(index, 1);
    },
    toggleComplete : function() {

    }
  },
  // 인스턴스가 생성되자마자 실행되는..hook
  created : function() {
    // 로컬스토리지에 있는 데이터를 가져오기
    if(localStorage.length > 0) {
      for(var i =0;  i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          //  console.log(localStorage.key(i));
          // this.todoItems.push(localStorage.key(i));
          JSON.parse(localStorage.getItem(localStorage.key(i)));
          //setItem에서 JSON.stringify으로 넣어서 string으로 들어갔고
          // 이제 getItem에선 다시 obj으로 바꿔가져와야 하믄로
        }        
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type : none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color : #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color : #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color : #b3adad;
}
.removeBtn {
  margin-left: auto;
  color : #de4343;
}
</style>