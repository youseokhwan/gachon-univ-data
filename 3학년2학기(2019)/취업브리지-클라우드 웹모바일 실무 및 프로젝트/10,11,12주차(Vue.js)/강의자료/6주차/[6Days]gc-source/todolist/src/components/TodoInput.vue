<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" 
            placeholder="해야할 일 적기" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력해 주세요~!!
                <i class="closeModelBtn fa fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default{
    data(){
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods:{
        addTodo(){
            if(this.newTodoItem !== ""){
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit("addTodo",value);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components:{
        Modal: Modal
    }
}
</script>

<style scoped>
  input:focus{
      outline: none;
  }
  .inputBox{
      background: white;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
  }
  .inputBox input{
      border-style: none;
      font-size: 0.9rem;
  }
  .addContainer{
      float: right;
      background: linear-gradient(to right, #6478FB, #8763FB);
      display: inline-block;
      width: 3rem;
      border-radius: 0 5px 5px 0;
  }
  .addBtn{
      color: white;
      vertical-align: middle;
  }
</style>