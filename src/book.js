import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook, updateBook } from "./BookResucer";

function Book()
{
    let books = useSelector((state)=>state.books);
    let dispatch = useDispatch();

    let initialValue = {'title':'','price':'','author':''}
    let[product,setProduct]=useState(initialValue)
    let[btn,setBtn]=useState('ADD')

    const handleChange=(event)=>{
        const{name,value} = event.target
        setProduct({...product,[name]:value})
    }

    // const handleInsert=(event)=>{
    //     event.preventDefault();
    //     dispatch(addBook({id:Date.now(),title:product.title,price:product.price,author:product.author}));
    //     setProduct(initialValue)
    // }
    // const handleUpdate=(event,product)=>{
    //     setProduct(product)
    //     event.preventDefault();
    //     if(product.id)
    //     {
    //         dispatch(updateBook(product));
    //         setProduct(product);
    //     }
    // }
    const handleSubmit=(event)=>{
       event.preventDefault();
       if(product.id)
        {
            dispatch(updateBook(product))
            setProduct(initialValue)
            setBtn('ADD')
        }
        else
        {
            dispatch(addBook({id:Date.now(),title:product.title,price:product.price,author:product.author}));
            setProduct(initialValue)
        }
    }
     const onEdit=(product)=>
    {
         setProduct(product)
         setBtn('Edit') 
    }

       return(
        <div>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <label htmlFor="title">Enter book title:</label>
                <input type="text" id="title" name="title"value={product.title} onChange={(event)=>handleChange(event)}></input><br></br>

                <label htmlFor="price">Enter book's price</label>
                <input type="text" id="price" name="price" value={product.price} onChange={(event)=>handleChange(event)}></input><br></br>

                <label htmlFor="author">Enter book's author</label>
                <input type="text" id="author" name="author"value={product.author} onChange={(event)=>handleChange(event)}></input><br></br>

                <input type="submit" value={btn}></input>
            </form>
            <ol>
                    {books.length===0 && 'No Books to display'}
                    {books && books.map((book)=>
                    <li key={book.id}>{book.title}&nbsp;&nbsp;{book.author}&nbsp;&nbsp;{book.price}&nbsp;&nbsp;
                    <button onClick={()=>dispatch(deleteBook(book.id))}>Delete</button>&nbsp;&nbsp;
                    <button onClick={()=>onEdit(book)}>Update</button>
                    </li>)}
                </ol>
        </div>
    )
}
export default Book;