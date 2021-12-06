/* An array of author objects.
An integer ID of a single author object.
It returns the author object that has the matching ID.*/
function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id)
  return result
}
//result is equal to the author's id being strictly equal to id
//result is returned

/* An array of book objects.
A string ID of a single book object.
It returns the book object that has the matching ID.*/
function findBookById(books, id) {
  let result = books.find((book)=> book.id === id)
  return result
}
//set result to be = to any books that are searched and are strictly 
//equal to the id searched
//returned result

/*- An array of book objects.
It returns an array with two arrays inside of it. All of the 
inputted books are present in either the first or second array.
The first array contains book objects that represent the books
 _that are currently checked out_, while the second array contains
  book objects that represent the books _that have been returned.
  _ You can check for the return status by looking at the first 
  transaction object in the `borrows` array.*/
function partitionBooksByBorrowedStatus(books) {
    return books.reduce( (avail, unavail) => { avail[+(unavail.borrows[0] && unavail.borrows[0].returned)].push(unavail) 
 return avail}, [[],[]] )
}
//reduce method to see what books have been checked out in the first array and what books have been returned in the second array. 

/*- A book object.
- An array of all account objects.
It should return an array of ten or fewer account objects
 that represents the accounts given by the IDs in the provided 
 book's `borrows` array. However, each account object should 
 include the `returned` entry from the corresponding transaction 
 object in the `borrows` array.*/
function getBorrowersForBook(book, accounts) {
let result = [] //set result to be = to the array
let borrowed = book.borrows //set borrowed to be = to book.borrows
borrowed.forEach(borrow => { //arrow function
  let account = accounts.find(acc=>acc.id === borrow.id) //using the find method created a condition that
  //the acc.id has to be strictly = to borrow.id  
  let array = account // set array to be = to account
  array['returned'] = borrow.returned
  result.push(array) //adding a new object to array if conditions are met
})    
return result.slice(0,10) //used slice method to not allow the return to be more than five objects.
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
