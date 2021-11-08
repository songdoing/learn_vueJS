<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

// var AppHeader = {
//   template: '<header><h1>HEADER</h1></header>'
// }

// new Vue ({
//   data : {
//     str : 'hi'
//   }
// })

export default {
  // data : {
  //   str : 'hi'
  // } -> 오류남(`data` property in component must be a function )
  // 컴포넌트는 재사용의 목적을 두고 있는데, 다른 곳에서 data를 참조하면
  // 안 되므로, 객체형식이 아닌, 함수를 연결하고, return으로 새 객체를 
  // 반환하는 형식으로 써줘야 함 
  data : function(){
    return {
      str : 'hi'
    }
  },
  components : {
    'app-header' : AppHeader
  }
}
</script>

<style>

</style>