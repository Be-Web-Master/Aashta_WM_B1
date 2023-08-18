// Filter an array of book objects, keeping only the books with a rating greater than 4.
const bookArr=[
    { title: 'The Great Gatsby', rating: 4.7 },
    { title: 'To Kill a Mockingbird', rating: 3.5 },
    { title: 'Pride and Prejudice', rating: 3 },
    { title: 'Animal Farm', rating: 4.6 }
  ]
let check=bookArr.filter(elem=>{
    for(let i=0;i<bookArr.length;i++){
        if(elem.rating>4){
           return elem
        }
    } 
})
console.log(check)

