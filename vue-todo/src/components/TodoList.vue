<template>
  <div>
     <ul>
       <li v-for="todoItem in todoItems" v-bind:key="todoItem">1</li>
       {{ todoItem }}
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
  // 인스턴스가 생성되자마자 실행되는..hook
  created : function() {
    // 로컬스토리지에 있는 데이터를 가져오기
    if(localStorage.length > 0) {
      for(var i =0;  i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // console.log(localStorage.key(i));
        this.todoItems.push(localStorage.key(i));
        }        
      }
    }
  }
}
</script>

<style>

</style>