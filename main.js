class Library {
    constructor(libraryShelf = {}){
        this.bookList = libraryShelf.books;
        this.users = libraryShelf.users;
        this.bookList = (this.bookList === undefined) ? [] : libraryShelf.books;
        this.user = (this.users === undefined) ? [] : libraryShelf.users;
        this.checkedOut = {};
    };

    isCheckedOut(book) {
        // console.log(this.checkedOut)
        // let ourCheck = Object.values(this.checkedOut).includes(book);
        // console.log(`ourCheck: ${ourCheck}`);

        return Object.values(this.checkedOut).includes(book);;
    }

    addBook(book){
        this.bookList.push(book);
    
    }
    addUser(user){
        this.user.push(user);
    }
    checkout(user, book){
        // console.log(object);
        // console.log(this.checkedOut, this.users.includes(user) && this.bookList.includes(book), !Object.values(this.checkedOut).includes(book));
        if (this.user.includes(user)){
            if (this.user.includes(user) && this.bookList.includes(book)) {
                // let object = {user: book};
                this.checkedOut[user] = book;
                // this.checkedOut.push(object)
                // console.log(this.checkedOut)
            }
        }
    }
    hasBook(book){
        // if (this.bookList.includes(book)){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return Boolean(this.bookList.includes(book));
    }
    hasUser(user){
            // if (this.user.includes(user)){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return Boolean(this.user.includes(user));
    }
    // isCheckedOut(book) {
    //     console.log(this.checkedOut)
    //     return this.checkedOut.includes(book);
    // }
    returnBook(user){
        delete this.checkedOut[user];
    }
    whoHas(book){
        let entries = Object.entries(this.checkedOut);
        return (Object.values(this.checkedOut).includes(book)) ?
        (entries[0][0]) : null;
        // if (Object.values(this.checkedOut).includes(book)){
        //     return entries[0][0];
        // }
        // else {
        //     return null;
        // }
        
        // if (Object.keys(this.checkedOut).includes(name)){
            // return Object.values(this.checkedOut).find(name => 
            //     this.checkedOut[book] === name);
        // };
        // else {
        //     return null;
        // }
        
        // for (let book in bookList){
        //     if (Object.values(book)){

        //     }
        // }
        // console.log(Object.keys(this.checkedOut))
        // return Object.keys(this.checkedOut);
        // let name = (Object.values(this.checkedOut).includes(book) ? Object.keys(this.checkedOut);

    }
}
