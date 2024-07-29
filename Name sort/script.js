document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name-input");
  const addNameButton = document.getElementById("add-name");
  const searchInput = document.getElementById("search-input");
  const searchNameButton = document.getElementById("search-name");
  const sortAZButton = document.getElementById("sort-az");
  const sortZAButton = document.getElementById("sort-za");
  const nameList = document.getElementById("name-list");

  // LocalStorage'dan saqlangan ismlarini yuklash
  loadNames();

  addNameButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
      addName(name);
      saveName(name);
      nameInput.value = "";
    }
  });

  searchNameButton.addEventListener("click", () => {
    const searchQuery = searchInput.value.trim().toLowerCase();
    if (searchQuery) {
      searchNames(searchQuery);
    }
  });

  sortAZButton.addEventListener("click", () => {
    sortNames(true);
  });

  sortZAButton.addEventListener("click", () => {
    sortNames(false);
  });

  function loadNames() {
    const names = JSON.parse(localStorage.getItem("names")) || [];
    names.forEach((name) => addName(name));
  }

  function addName(name) {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  }

  function saveName(name) {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));
  }

  function searchNames(query) {
    const names = JSON.parse(localStorage.getItem("names")) || [];
    const filteredNames = names.filter((name) =>
      name.toLowerCase().includes(query)
    );
    nameList.innerHTML = "";
    filteredNames.forEach((name) => addName(name));
  }

  function sortNames(ascending) {
    const names = JSON.parse(localStorage.getItem("names")) || [];
    names.sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) return ascending ? -1 : 1;
      if (a.toLowerCase() > b.toLowerCase()) return ascending ? 1 : -1;
      return 0;
    });
    nameList.innerHTML = "";
    names.forEach((name) => addName(name));
  }
});
