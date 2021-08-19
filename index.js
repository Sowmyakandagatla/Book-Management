const express =require("express");

// here we are importing the database file.
const database=require("./database");

// intializing
const booky=express();

/* 
route           /
description     get all books
Access          PUBLIC
parameter       NONE
method          GET
*/
booky.get("/",(req,res) => {

return res.json({books: database.books});

});

/* 
route           /is
description     get specific books based on isbn.
Access          PUBLIC
parameter       isbn
method          GET
*/
booky.get("/is/:isbn",(req,res) => {
// book.ISBN the number which book has , and  in  req.params.isbn which we give in the browser url.
// req.params.isbn here its requesting to get isbn parameter .
    const getSpecificBook= database.books.filter((book)=>book.ISBN === req.params.isbn);
   
        if(getSpecificBook.length === 0){ 

            return res.json({error:`not found ${req.params.isbn}`,});
        }

    return res.json({book:getSpecificBook});
});

/* 
route           /c
description     get specific book based on category.
Access          PUBLIC
parameter       :category
method          GET
*/

booky.get("/c/:category",(req,res) =>{
// ((book)=>book.category.includes(req.params.category));
// -- here we are accessing individual book objects in array and then go to category,
// and includes means comparing the req.params.category to category arry.
const getSpecificBook= database.books.filter((book)=>book.category.includes(req.params.category));
       
if(getSpecificBook.length === 0){ 

    return res.json({error:`not found ${req.params.category}`,});
}

return res.json({book:getSpecificBook});

});

/* 
route           /l
description     get list of book based on language.
Access          PUBLIC
parameter       :language
method          GET
*/

booky.get("/l/:language",(req,res) =>{
    
    const getSpecificBook= database.books.filter((book)=>book.language ===req.params.language);
   
    if(getSpecificBook.length === 0){ 

        return res.json({error:`not found ${req.params.language}`,});
    }

return res.json({book:getSpecificBook});

});
       

/* 
route           /
description     get all the authors
Access          PUBLIC
parameter       none
method          GET
*/

booky.get("/author",(req,res) => {

    return res.json({authors: database.authors});
    
    });
/* 
route           /a
description     get specific authors.
Access          PUBLIC
parameter       name
method          GET
*/
booky.get("/a/:name",(req,res) => {
    
        const getSpecificBook= database.authors.filter((author)=>author.name === req.params.name);
       
            if(getSpecificBook.length === 0){ 
    
                return res.json({error:`not found ${req.params.name}`,});
            }
    
        return res.json({author:getSpecificBook});
    });
    
/* 
route           /author/book
description     get list of authors based on books.
Access          PUBLIC
parameter       isbn
method          GET
*/

booky.get("/author/book/:isbn",(req,res) =>{

    const getSpecificBook=database.authors.filter((author)=>author.books.includes(req.params.isbn));

    if(getSpecificBook.length === 0){
        return res.json({error:`not found ${req.params.isbn}`});
    }
    return res.json({author:getSpecificBook});
});

/* 
route           /
description     to get all publications.
Access          PUBLIC
parameter       none
method          GET
*/
booky.get("/publication",(req,res) => {

    return res.json({publication: database.publications});
    
    });
/* 
route           /p
description     to get specific publications.
Access          PUBLIC
parameter       name
method          GET
*/
booky.get("/p/:name",(req,res) => {
    
    const getSpecificBook= database.publications.filter((publication)=>publication.name === req.params.name);
   
        if(getSpecificBook.length === 0){ 

            return res.json({error:`not found ${req.params.name}`,});
        }

    return res.json({publication:getSpecificBook});
});

/* 
route           /publication/book
description     to get list of publications based on book.
Access          PUBLIC
parameter       isbn
method          GET
*/

booky.get("/publication/book/:isbn",(req,res) =>{

    const getSpecificBook=database.publications.filter((publication)=>publication.books.includes(req.params.isbn));

    if(getSpecificBook.length === 0){
        return res.json({error:`not found ${req.params.isbn}`});
    }
    return res.json({publication:getSpecificBook});
});

booky.listen(3000, ()=>console.log ("heyyy"));

