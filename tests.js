describe("Library", () => {
  describe("it has books", () => {
    it("can add books", () => {
      const library = new Library();

      expect(library.hasBook("Django 3 By Example")).toBe(false);
      library.addBook("Django 3 By Example");
      expect(library.hasBook("Django 3 By Example")).toBe(true);

      expect(library.hasBook("Node.js in Action")).toBe(false);
      library.addBook("Node.js in Action");
      expect(library.hasBook("Node.js in Action")).toBe(true);
    });

    it("can be constructed with an initial collection of books", () => {
      const library = new Library({
        books: ["Django 3 By Example", "Node.js In Action"],
      });

      expect(library.hasBook("Django 3 By Example")).toBe(true);
      expect(library.hasBook("Node.js In Action")).toBe(true);
    });
  });

  describe("it has users", () => {
    it("can add users", () => {
      const library = new Library();

      expect(library.hasUser("Nate")).toBe(false);
      library.addUser("Nate");
      expect(library.hasUser("Nate")).toBe(true);

      expect(library.hasUser("Evil Nate")).toBe(false);
      library.addUser("Evil Nate");
      expect(library.hasUser("Evil Nate")).toBe(true);
    });
    it("can be constructed with an initial collection of users", () => {
      const library = new Library({
        users: ["Nate", "Evil Nate"],
      });

      expect(library.hasUser("Nate")).toBe(true);
      expect(library.hasUser("Evil Nate")).toBe(true);
    });
  });

  describe("checking out books", () => {
    it("allows users to check out books", () => {
      const library = new Library({
        users: ["Nate", "Evil Nate"],
        books: ["Django 3 By Example", "Node.js in Action"],
      });

      expect(library.isCheckedOut("Django 3 By Example")).toBe(false);

      library.checkout("Nate", "Django 3 By Example");
      expect(library.isCheckedOut("Django 3 By Example")).toBe(true);
    });

    it("does not allow users to check out books that it doesn't have", () => {
      const library = new Library({ users: ["Nate"] });
      library.checkout("Nate", "Django 3 By Example");
      expect(library.isCheckedOut("Django 3 By Example")).toBe(false);
    });

    it("does not allow non-users to check out books", () => {
      const library = new Library({ books: ["Django 3 By Example"] });

      library.checkout("Nate", "Django 3 By Example");
      expect(library.isCheckedOut("Django 3 By Example")).toBe(false);

      library.addUser("Nate");
      library.checkout("Nate", "Django 3 By Example");
      expect(library.isCheckedOut("Django 3 By Example")).toBe(true);
    });

    it("knows who checked out what book", () => {
      const library = new Library({
        users: ["Nate", "Evil Nate"],
        books: ["Django 3 By Example", "Node.js in Action"],
      });

      library.checkout("Nate", "Django 3 By Example");
      expect(library.whoHas("Django 3 By Example")).toBe("Nate");
      expect(library.whoHas("Node.js in Action")).toBeNull();
    });
  });

  describe("returning books", () => {
    it("allows users to return books", () => {
      const library = new Library({
        users: ["Nate", "Evil Nate"],
        books: ["Django 3 By Example", "Node.js in Action"],
      });

      library.checkout("Nate", "Django 3 By Example");
      library.returnBook("Nate", "Django 3 By Example");

      expect(library.isCheckedOut("Django 3 By Example")).toBe(false);
      expect(library.whoHas("Django 3 By Example")).toBeNull();
    });

    it("only returns the book if the same user that checked it out is returning it", () => {
      const library = new Library({
        users: ["Nate", "Evil Nate"],
        books: ["Django 3 By Example", "Node.js in Action"],
      });

      library.checkout("Nate", "Django 3 By Example");
      library.returnBook("Evil Nate", "Django 3 By Example");

      expect(library.isCheckedOut("Django 3 By Example")).toBe(true);
      expect(library.whoHas("Django 3 By Example")).toBe("Nate");
    });
  });
});
