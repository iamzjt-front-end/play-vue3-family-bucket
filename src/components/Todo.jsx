import {defineComponent, ref} from "vue";

export default defineComponent({
  setup(props) {
    let title = ref('');
    let todos = ref([
      {title: '学习Vue3', done: true},
      {title: '睡觉', done: false},
      {title: '打豆豆', done: false},
    ]);

    function addTodo() {
      todos.value.push({title: title.value, done: false});
      title.value = '';
    }


    return () => <div>
      <input type="text" v-model={title.value}/>
      <button onClick={addTodo}>click</button>
      <ul>
        {
          todos.value.length ? todos.value.map(todo => {
            return <li>{todo.title}</li>
          }) : <li>暂无数据</li>
        }
      </ul>
    </div>
  }
})
