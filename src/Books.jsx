
export default function Books({book}){
   
    return (
        <div className="Student">
            <h2>Books Details</h2>
            <h3>Book Name: {book.name}</h3>
            <h3>Book Author: {book.author}</h3>
            <h3>Book Price: {book.price}</h3>
        </div>
    )
}