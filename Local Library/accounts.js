// An array of account objects.
// A string ID of a single account object.
// It returns the account object that has the matching ID.
function findAccountById(accounts, id) {
  let result = accounts.find((accounts) => accounts.id === id)
  return result
}
/*used an arrow function, search through the parameter accounts
 to exactly match the id*/ 


// An array of account objects.
// It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
accounts.sort((accountA, accountB)=> //used the sort method for accounts A, and B
accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1)
return accounts //return accounts
}


// An account object.
// An array of all book objects.
// It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  let results = 0 
  for (let i = 0; i < books.length; i++){ 
    for(let j = 0; j < books[i].borrows.length; j++){
    if(account.id === books[i].borrows[j].id){
  results +=1
}
    }
  }
  return results
}
//set result to be equal to 0
//created two for loops with variables i ,and j
//set the condition that has to be met, to add a count
//returned that result with the new count


// An account object.
// An array of all book objects.
// An array of all author objects.
/*It returns an array of book objects, including author information, 
that represents all books _currently checked out_ by the given 
account. _Look carefully at the object below,_ as it's not
 just the book object; the author object is nested inside of it.*/
  function getBooksPossessedByAccount(account, books, authors) {
    let results = []
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        results.push(book);
      }
    })
    results.forEach(book=>{
      let person = authors.find(person => person.id === book.authorId);
      book['author'] = person;
    })
    return results;
  }
//set results to be equal to the array
//used for.Each to find who borrowed each book
/*created an arrow function that sets the conditions
that have to be met for the result to be added.*/
//with the new added result used forEach method
//set person to be strictly = to the author id of the book. using the find method
//the books author is = to the person
//return results
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
