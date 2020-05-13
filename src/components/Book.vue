<template>
  <div class="books-container-item">
  <button class="edit-btn" 
  v-if="!isEdditing"
  @click="isEdditing=!isEdditing"
  >Начать редактирование</button>
  <button v-if="isEdditing" class="edit-btn"
  @click="editCurrentBook"
>Отредактировать</button>
    <h3>Автор: {{ author }}</h3>
    <h3  v-if="isEdditing" ><input type="text"
          v-model="newFields.author"
          placeholder="новый автор"
    /></h3>
    <div class="books-container-item-bottom">
      <span class="books-container-item-bottom-el">Название: {{ title }}</span>
      <span class="books-container-item-bottom-el" v-if="isEdditing">
        <input v-model="newFields.title"
                placeholder="название книги"
        /></span>
      <span class="books-container-item-bottom-el"
        >Дата издания: {{ data }}</span
      >
      <span 
      v-if="isEdditing"
      class="books-container-item-bottom-el"
        ><input type="text"
          placeholder="новая дата"
          v-model="newFields.data"
        /></span
      >
      <span class="books-container-item-bottom-el"
        >Жанр: {{ translator[janre] }}</span
      >
      <span class="books-container-item-bottom-el"
        v-if="isEdditing"
      >
    <select  placeholder="Жанр" v-model="newFields.janre">
      <option value="classic" >Классика</option>
      <option value="fantastic" >Фантастика</option>
      <option value="fantasy" >Фэнтези</option>
      <option value="advanture" >Приключение</option>
  
    </select>
      </span>
      
    </div>
  </div>
</template>

<script>

 export default {
data(){
    return {

      newFields:{
        author:"",
        title:"",
        janre:""
      },
        isEdditing:false,
translator:{
  
    classic:'Классика',
    fantastic:'Фантастика',
    fantasy:'Фэнтези',
    advanture:'Приключения'
}
    }
},
props: {
    id: String|Number,
    author: String,
    title: String,
    data: Number|String,
    janre: String,
  },
  methods:{
    editCurrentBook(){
      this.$emit('editCurrentBook',{
        id: this.id,
          ...this.newFields
        
      });
      this.isEdditing = false;
    }
  }

};
</script>

<style scoped>
.edit-btn{
  width: 140px;
  margin: 10px 10px;
padding: 5px;

background: transparent;
border-radius: 6px;
cursor: pointer;
color: rgba(14, 231, 159, 0.867);
border: 3px solid rgba(14, 231, 159, 0.867);}
.books-container-item {
  width: 280px;
  background: #fff;
  margin: 5px 10px;
  min-height: 200px;
  border-radius: 8px;
  display: flex;
  flex-flow: column;
}
.books-container-item > h3 {
  width: 100%;
  text-align: center;
  height: 20px;
  flex: 1;
  line-height: 20px;
}
.books-container-item-bottom-el {
  margin: 6px 4px;
  
}
.books-container-item-bottom-el>select{
  width: 160px;
}
.books-container-item-bottom {
  display: flex;
  flex-flow: column;
  padding-bottom: 6px;
}
</style>
