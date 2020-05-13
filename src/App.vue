<template>
  <div id="app">
  
  <div class="widgets-container"> 
    
    <div class="books-container" v-if="filteredBooks.length===0">
      
      <Book v-for="(book,i) in books" :key="i" title="Автор"
            :id="book.id"
            :author="book.author"
            :data="book.data"
             :janre="book.janre"
             @editCurrentBook="editCurrentBookListener"
      ></Book>

    </div>
    <div class="books-container" v-else>
 <Book v-for="(book,i) in filteredBooks" :key="i" title="Автор"
            :author="book.author"
            :data="book.data"
            :janre="book.janre"
      ></Book>
    </div>
<div class="btn-container">
  <div class="btn-container-filter-fields">
    <input 
    placeholder="Отфильтровать по автору"
    v-model="formData.author"/>
    <select v-model="formData.janre">
      <option value="classic" >Классика</option>
      <option value="fantastic" >Фантастика</option>
      <option value="fantasy" >Фэнтези</option>
      <option value="advanture" >Приключение</option>
     
       
    </select>
  </div>
      <button class="btn-container-item" @click="showAllBooks">Показать все</button>
      <button class="btn-container-item" @click="fillFilterBooks">Отфильтровать</button>
    
    </div>
</div>

  </div>
</template>

<script>
import Book from './components/Book';
 export default {
  name: 'App',
  data(){
    return {
      filteredBooks:[],
      
      formData:{
        name: "",
        janre:"",
        data:"",
        author:""
      },
      books:[
        {
          id:1,
          name:"В поисках...",
          janre:"fantasy",
          data: Math.floor( new Date().getFullYear()/( Math.floor(Math.random()*30+1 ))) ,         
          author:"Артем Семенович Вяземский"
        },
        {
          id:2,
          janre:"classic",
          name:"В поисках...",
          data: Math.floor( new Date().getFullYear()/( Math.floor(Math.random()*30+1 ))) ,         
          author:"Семен Игнатьевич Урсовский"
        },
        {
          id:3,
          janre:"advanture",
          data: Math.floor( new Date().getFullYear()/( Math.floor(Math.random()*30+1 ))) ,         
          
          name:"Домик на 35-ой",
          author:"Михаил Астафович Успенский"
        
        },
        {
          id:4,
          janre:"advanture",
          data: Math.floor( new Date().getFullYear()/( Math.floor(Math.random()*30+1 ))) ,         
          
          name:"147ая миля",
          author:"Захар Петров Курковский"
        
        }
      ]
    }
  },

  methods:{
    editCurrentBookListener({id,...restProps}){
      
      let updatedBooks = [...this.books];
      let index = updatedBooks.findIndex((item)=>item.id===id);
      
      
      updatedBooks[index]= {id:id,
      ...restProps};
      this.books = updatedBooks;
    },
    showAllBooks(){
      this.filteredBooks =[];
    },
    fillFilterBooks(){
      let {author,janre } = this.formData;
this.filteredBooks = this.books;
  if(author){
      this.filteredBooks =   this.filteredBooks.filter((item)=>item.author.indexOf(author.trim()) !==-1 );


  }
  
if(janre){
  this.filteredBooks = this.filteredBooks.filter(item=>item.janre===janre);
}

  for(let prop in this.formData){
    this.formData[prop]="";
  }
}
  },
  components: {
    Book
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

@import "https://fonts.googleapis.com/css?family=Ubuntu:400";
@import url(https://fonts.googleapis.com/css?family=Lobster);
h1 {
  font-family: "Lobster", cursive;
  font-weight: 300;
  font-size: 2.5em;
}

body {
  background:linear-gradient(45deg, rgba(223, 25, 223, 0.867), rgb(0, 255, 179));
  margin: 1em;
  width: 100%;
  height: 100vh;
}


.btn-container{
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  width: 200px;
  margin: 0 0 0 20px;
  max-height: 100px;
}
.btn-container-item{
  width: 120px;
text-align: center;
  background: transparent;
  border-radius: 8px;
  padding: 10px 8px ;
  color: rgba(223, 25, 223, 0.867);

  border: 2px solid rgba(223, 25, 223, 0.867);
  cursor: pointer;
  margin: 5px 10px;
}
.widgets-container{
  width: 80%;
  margin: 0 auto;
  display: flex;
}
.books-container{
  width: 620px; 
  display: flex;
  flex-wrap: wrap;
  background: #f2ff2f;
} 
.btn-container-filter-fields{
  width: 100%;
  
}
.btn-container-filter-fields>input{
  height: 30px;
  font-size: 16px;
  margin: 5px 10px;
  line-height: 30px;
}
select{
  width:100%;
  margin: 5px 10px;
  height: 30px;
  line-height:30px;
}
</style>
