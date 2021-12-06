/*- An array of book objects.
It returns a _number_ that represents the number of
book objects inside of the array.*/
function getTotalBooksCount(books) {
    return books.length //need total count of all the books
}

/*- An array of accounts.
It returns a _number_ that represents the number
of account objects inside of the array.*/
function getTotalAccountsCount(accounts) {
    return accounts.length //need total count of all the accounts
}

/*- An array of books.
It returns a _number_ that represents the number of books
_that are currently checked out of the library._ This number
can be found by looking at the first transaction object in the
`borrows` array of each book. If the transaction says the book
has not been returned (i.e. `returned: false`), the book is 
currently being borrowed.*/
function getBooksBorrowedCount(books) {
    let results = books.filter( //set results, and used the filter method
        (book) => //arrow function
        book.borrows.filter((record) => record.returned === false).length > 0 
    ) //if the book has been checked out and if it has been returned has to strictly = false and if it does than it is greater than 0. So the book is still not returned
    return results.length //return results
}


/*- An array of book objects.
It returns an array containing five objects or fewer that 
represents the most common occurring genres, ordered from 
most common to least.
Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the
genre occurs.

Even if there is a tie, the array should only contain no more
than five objects.*/
function getMostCommonGenres(books) {
 let result = {}; //set results to be = to the given array
 books.forEach((howMany) => { //forEach method with an arrow function to find out how many of each genre there is.
  if (result[howMany.genre]) { //if conditional statement
   result[howMany.genre]++ //if it is there add one to the count
  } else { //else conditional statement
   result[howMany.genre] = 1 //if there isnt one do not add one
  }
 });
 return Object.entries(result) //Object class to pull information that was already stored
  .map(([name, count]) => { //.map method 
   return {name,count}//return the name and the count called upon using the .map method
  })
  .sort((one, two) => two.count - one.count)//sort both counts 
  .slice(0, 5);//slice method so the array doesnt return more than five no more than five objects
}

/*- An array of book objects.

It returns an array containing five objects or fewer that 
represents the most popular books in the library. Popularity
is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book 
has been borrowed.

Even if there is a tie, the array should only contain no more 
than five objects.*/
function getMostPopularBooks(books, count = 5) {//set a default parameter for the count to = five
const pop = books.map(book =>( {name:book.title, count:book.borrows.length})) //set const pop(ular) to be = to the book information using an arrow function
pop.sort((typeA,typeB) => typeB.count - typeA.count) //using the sort method to count the books
return pop.slice(0, count) //return pop with no more than 5 objects
}


/*It returns an array containing five objects or fewer that 
represents the most popular authors whose books have been 
checked out the most. Popularity is represented by finding all 
of the books written by the author and then adding up the number 
of times those books have been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the first and last name of the 
author.
- The `count` key which represents the number of times the 
author's books have been borrowed.

Even if there is a tie, the array should contain no more than 
five objects.*/
function getMostPopularAuthors(books, authors) {
 let result = [] //set result to be = to the array
 authors.forEach((author) => { //arrow function
  let person = { //set person to be = to the authors first and last name
   name: `${author.name.first} ${author.name.last}`,
   count: 0 //nhow many times they have been borrowed
  };
  books.forEach((book) => { //arrow function
   if (book.authorId === author.id) { //if conditional statement 
    person.count += book.borrows.length //how many times the author has been borrowed is += the length of the borrow
   }
  })
  result.push(person) //adding a new count everytime they've been checked out
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5) //slice method to keep the array to contain no more than 5 objects.
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
