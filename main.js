//2d array for storing book information
let Storage = [
    [1, 'Start With Why', 'Simon Sinek', 80.0, 13],
    [2, 'But How Do It Know', 'J.Clark Scott', 59.9, 22],
    [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    [4, 'Zero To One', 'Peter Thiel', 45.0, 12],
    [5, 'You Don\'t Know JS', 'Kyle Simpson', 39.9, 9]
]

//input for book retrieval 
//(function with for loop to go throw the arr then if statements)
function search(BookId, Title, Author){
    for(i=1; i < Storage.length; i++){
        if(BookId == Storage[i][0] || Title == Storage[i][1] || Author == Storage[i][2]){
            console.log(Storage[i])
            console.log("*************************************************")
            break
        } else if(i == Storage.length){
            console.log("Not Found")
        }
    }
}
//search(4, 'Zero To One', 'Peter Thiel')

//sell books and create invoice
//check storage, then decrement to sell.
//input to take: book title, quantity, balance.
//book must be available, with sufficient ammount and enough customer balnce.
function buy(Title, Quantity, balance){
    for(i=0; i < Storage.length; i++){
        if((Title == Storage[i][1]) && (Quantity <= Storage[i][4]) && (balance >= (Storage[i][3]*Quantity))){
            Storage[i][4] -= Quantity
            console.log('---Invoice---')
            console.log('Product: '+ Title)
            console.log('Quantity: '+ Quantity)
            console.log('Price: '+ (Storage[i][3]))
            console.log('Total:' + (Quantity*Storage[i][3]))
            console.log('new stock')
            console.log(Storage[i])
            console.log("*************************************************")
            break;
        } else if(i == (Storage.length - 1)){
            console.log('Book unavailable or insufficient balance');
        }
    }
}
buy('Start With Why', 3, 10000)
