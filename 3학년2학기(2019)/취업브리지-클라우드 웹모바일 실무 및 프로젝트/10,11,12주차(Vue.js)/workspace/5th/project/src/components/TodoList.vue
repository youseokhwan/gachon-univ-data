<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>
                {{todoItem}}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.slice(index, 1);
        }
    },
    created() {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    }
}
</script>

<style>
     ul{
      list-style: none;
      padding-left: 0px;
      margin-top: 0;
      text-align: left;
  }
  li{
      display: flex;
      min-height: 50px;
      height: 50px;
      line-height: 50px;
      margin: 0.5rem 0;
      padding: 0 0.9rem;
      background: white;
      border-radius: 5px;
  }
  .checkBtn{
      line-height: 45px;
      color: #62ACDE;
      margin-right: 5px;
  }
  .removeBtn{
      margin-left: auto;
      color: #DE4343;
  }
</style>