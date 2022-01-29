import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          //  console.log(localStorage.key(i));
          // this.todoItems.push(localStorage.key(i));
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //setItem에서 JSON.stringify으로 넣어서 string으로 들어갔고
          // 이제 getItem에선 다시 obj으로 바꿔가져와야 하믄로
        }
      }
    }
  },
};
export const store = new Vuex.Store({
  state: {
    todoItems: storage.fectch(),
  },
});
