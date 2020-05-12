<template>
  <div class="books-container-item">
    <h3>Автор: {{ author }}</h3>
    <div class="books-container-item-bottom">
      <span class="books-container-item-bottom-el">Название: {{ title }}</span>
      <span class="books-container-item-bottom-el"
        >Дата издания: {{ data }}</span
      >
      <span class="books-container-item-bottom-el"
        >Жанр: {{ translator[janre] }}</span
      >
      
    </div>
  </div>
</template>

<script>

 export default {
data(){
    return {
translator:{
    classic:'Классика',
    fantastic:'Фантастика',
    fantasy:'Фэнтези',
    advanture:'Приключения'
}
    }
},
props: {
    author: String,
    title: String,
    data: Number|String,
    janre: String,
  }

};
</script>

<style scoped>
.books-container-item {
  width: 280px;
  background: #fff;
  margin: 5px 10px;
  max-height: 200px;
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
.books-container-item-bottom {
  display: flex;
  flex-flow: column;
  padding-bottom: 6px;
}
</style>
