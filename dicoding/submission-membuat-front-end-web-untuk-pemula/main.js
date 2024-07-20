const incompleteBookshelfList = document.getElementById(
  "incompleteBookshelfList",
);
const completeBookshelfList = document.getElementById("completeBookshelfList");

function clearInput() {
  document.getElementById("inputBookId").value = "";
  document.getElementById("inputBookTitle").value = "";
  document.getElementById("inputBookAuthor").value = "";
  document.getElementById("inputBookYear").value = "";
}

function renderBookElements(books) {
  const bookList = books || JSON.parse(localStorage.getItem("books")) || [];

  // clear isinya dulu
  completeBookshelfList.innerHTML = "";
  incompleteBookshelfList.innerHTML = "";

  bookList.forEach((book) => {
    const bookEl = createBookElement(book);
    if (book.isComplete) {
      completeBookshelfList.appendChild(bookEl);
    } else {
      incompleteBookshelfList.appendChild(bookEl);
    }
  });
}

function createBookElement(book) {
  const article = document.createElement("article");
  article.classList.add("book_item");

  const bookTitle = document.createElement("h3");
  bookTitle.innerText = book.title;
  const author = document.createElement("p");
  author.innerText = book.author;
  const year = document.createElement("p");
  year.innerText = book.year;

  const actionDiv = document.createElement("div");
  actionDiv.classList.add("action");

  const doneButton = document.createElement("button");
  doneButton.classList.add("green");
  if (book.isComplete) {
    doneButton.innerText = "Belum selesai dibaca";
  } else {
    doneButton.innerText = "Selesai dibaca";
  }
  doneButton.onclick = () => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const newBooks = books.map((b) => {
      if (b.id === book.id) {
        return {
          ...b,
          isComplete: !b.isComplete,
        };
      }
      return b;
    });

    localStorage.setItem("books", JSON.stringify(newBooks));
    renderBookElements();
  };

  const removeButton = document.createElement("button");
  removeButton.classList.add("red");
  removeButton.innerText = "Hapus buku";
  removeButton.onclick = () => {
    const deleteConfirmation = confirm(
      "Apakah Anda yakin ingin menghapus buku ini?",
    );
    if (!deleteConfirmation) {
      return;
    }

    const books = JSON.parse(localStorage.getItem("books")) || [];
    // hapus pakai filter.
    const newBooks = books.filter((b) => b.id !== book.id);

    localStorage.setItem("books", JSON.stringify(newBooks));
    renderBookElements();
  };

  const editButton = document.createElement("button");
  editButton.classList.add("blue");
  editButton.innerText = "Edit buku";
  editButton.onclick = () => {
    const inputBookId = document.getElementById("inputBookId");

    // handle cancel button hanya ditambah 1x
    if (!inputBookId.value) {
      const cancelButton = document.createElement("button");
      cancelButton.classList.add("cancelButton");
      cancelButton.innerText = "Batal Edit";
      cancelButton.onclick = () => {
        clearInput();

        const inputBookIsComplete = document.getElementById(
          "inputBookIsComplete",
        );
        if (inputBookIsComplete.checked) {
          document.getElementById("bookSubmit").innerHTML =
            `Masukkan Buku ke rak <span>Selesai dibaca</span>`;
        } else {
          document.getElementById("bookSubmit").innerHTML =
            `Masukkan Buku ke rak <span>Belum selesai dibaca</span>`;
        }

        cancelButton.remove();
      };

      document.querySelector(".input_section").appendChild(cancelButton);
    }

    inputBookId.value = book.id;
    document.getElementById("inputBookTitle").value = book.title;
    document.getElementById("inputBookAuthor").value = book.author;
    document.getElementById("inputBookYear").value = book.year;

    document.getElementById("bookSubmit").innerText = "Edit Buku";
  };

  actionDiv.append(doneButton, removeButton, editButton);
  article.append(bookTitle, author, year, actionDiv);

  return article;
}

const inputBookForm = document.getElementById("inputBook");
inputBookForm.onsubmit = (e) => {
  e.preventDefault();

  const id = document.getElementById("inputBookId").value || Date.now();
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;

  const newBook = {
    id,
    title,
    author,
    year: parseInt(year),
    isComplete,
  };

  const books = JSON.parse(localStorage.getItem("books")) || [];

  // jika id sudah ada, maka edit
  const existingBook = books.find((b) => b.id == id);
  if (existingBook) {
    const newBooks = books.map((b) => {
      if (b.id == id) {
        return newBook;
      }

      return b;
    });

    localStorage.setItem("books", JSON.stringify(newBooks));
    renderBookElements();
    clearInput();

    const inputBookIsComplete = document.getElementById("inputBookIsComplete");
    if (inputBookIsComplete.checked) {
      document.getElementById("bookSubmit").innerHTML =
        `Masukkan Buku ke rak <span>Selesai dibaca</span>`;
    } else {
      document.getElementById("bookSubmit").innerHTML =
        `Masukkan Buku ke rak <span>Belum selesai dibaca</span>`;
    }

    document.querySelector(".cancelButton").remove();

    return;
  }

  books.push(newBook);

  localStorage.setItem("books", JSON.stringify(books));
  renderBookElements();
};

const searchBookForm = document.getElementById("searchBook");
searchBookForm.onsubmit = (e) => {
  e.preventDefault();

  const keyword = document.getElementById("searchBookTitle").value;
  const books = JSON.parse(localStorage.getItem("books")) || [];

  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  completeBookshelfList.innerHTML = "";
  incompleteBookshelfList.innerHTML = "";

  renderBookElements(filtered);
};

// ubah text button sesuai kondisi checkbox
document.getElementById("inputBookIsComplete").onchange = (e) => {
  const submitButton = document.querySelector("#bookSubmit > span");
  if (submitButton)
    if (e.target.checked) {
      submitButton.innerText = "Selesai dibaca";
    } else {
      submitButton.innerText = "Belum selesai dibaca";
    }
};

// trigger ketika baru di load
renderBookElements();
