<template>
<!-- event.preventDefault()와 같은 효과임 -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">ID : </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">PW : </label>
      <input type="password" id="password" v-model="password">
    </div>
    <button type="submit">LOGIN</button>
  </form>
</template>

<script>
// npm i axios를 설치함, 이프로젝트 안에 설치한 것임. 이제 사용
// axios는 http프로토콜을 이용한 통신라이브러리
// 브라우저에서 서버 사이의 데이터를 보내고 받는 라이브러리
import axios from 'axios';

export default {
  data : function() {
    return {
      username : '',
      password : '',
    }
  },
  methods : {
    submitForm : function() {
      // event.preventdefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username : this.username,
        password : this.password
      }
      // 성공했는지 실패했는지 promise구문인 then catch사용
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>