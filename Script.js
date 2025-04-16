// const workers = [
//   { name: "Muzaffar", like: 0, dislike: 0 },
//   { name: "Oybek", like: 0, dislike: 0 },
//   { name: "Bobur", like: 0, dislike: 0 },
//   { name: "Sardor", like: 0, dislike: 0 },
//   { name: "Sanjar", like: 0, dislike: 0 },
//   { name: "Shoxrux", like: 0, dislike: 0 },
//   { name: "Asror", like: 0, dislike: 0 },
//   { name: "Jasur", like: 0, dislike: 0 },
//   { name: "Roza", like: 0, dislike: 0 },
//   { name: "Diyor", like: 0, dislike: 0 }
// ];

// function renderTable() {
//   const tbody = document.querySelector("#workerTable tbody");
//   tbody.innerHTML = "";

//   const sortedWorkers = [...workers].sort((a, b) => {
//     const aNet = a.like - a.dislike;
//     const bNet = b.like - b.dislike;

//     const aHasMoreDislike = a.dislike > a.like;
//     const bHasMoreDislike = b.dislike > b.like;

//     // 1. Agar kimdadir dislike > like bo‘lsa, u avtomatik pastga tushadi
//     if (aHasMoreDislike && !bHasMoreDislike) return 1;
//     if (!aHasMoreDislike && bHasMoreDislike) return -1;

//     // 2. Like ko‘p bo‘lsa yuqorida
//     if (b.like !== a.like) return b.like - a.like;

//     // 3. Like teng bo‘lsa, dislike kamroq bo‘lsa yuqorida
//     return a.dislike - b.dislike;
//   });

//   sortedWorkers.forEach((worker, index) => {
//     const row = document.createElement("tr");

//     row.innerHTML = `
//       <td data-label="#">${index + 1}</td>
//       <td data-label="Ism">${worker.name}</td>
//       <td data-label="Like">${worker.like}</td>
//       <td data-label="Dislike">${worker.dislike}</td>
//       <td data-label="Amallar">
//         <button class="like-btn" onclick="addLike('${worker.name}')">Like</button>
//         <button class="dislike-btn" onclick="addDislike('${worker.name}')">Dislike</button>
//       </td>
//     `;

//     tbody.appendChild(row);
//   });
// }

// function addLike(name) {
//   const worker = workers.find(w => w.name === name);
//   if (worker) {
//     worker.like++;
//     renderTable();
//   }
// }

// function addDislike(name) {
//   const worker = workers.find(w => w.name === name);
//   if (worker) {
//     worker.dislike++;
//     renderTable();
//   }
// }

// renderTable();
const workers = [
  { name: "Ali", like: 0, dislike: 0 },
  { name: "Vali", like: 0, dislike: 0 },
  { name: "Gulbahor", like: 0, dislike: 0 },
  { name: "Sardor", like: 0, dislike: 0 },
  { name: "Malika", like: 0, dislike: 0 },
  { name: "Shoxrux", like: 0, dislike: 0 },
  { name: "Zilola", like: 0, dislike: 0 },
  { name: "Jasur", like: 0, dislike: 0 },
  { name: "Dilnoza", like: 0, dislike: 0 },
  { name: "Diyor", like: 0, dislike: 0 }
];

function renderTable() {
  const tbody = document.querySelector("#workerTable tbody");
  tbody.innerHTML = "";

  const sortedWorkers = [...workers].sort((a, b) => {
    const aHasMoreDislike = a.dislike > a.like;
    const bHasMoreDislike = b.dislike > b.like;

    if (aHasMoreDislike && !bHasMoreDislike) return 1;
    if (!aHasMoreDislike && bHasMoreDislike) return -1;

    if (b.like !== a.like) return b.like - a.like;

    return a.dislike - b.dislike;
  });

  sortedWorkers.forEach((worker, index) => {
    const row = document.createElement("tr");

    // Oxirgi 3 ta ishchiga "danger" klassini beramiz
    if (index >= sortedWorkers.length - 3) {
      row.classList.add("danger");
    }

    row.innerHTML = `
      <td data-label="#">${index + 1}</td>
      <td data-label="Ism">${worker.name}</td>
      <td data-label="Like">${worker.like}</td>
      <td data-label="Dislike">${worker.dislike}</td>
      <td data-label="Amallar">
        <button class="like-btn" onclick="addLike('${worker.name}')">Like</button>
        <button class="dislike-btn" onclick="addDislike('${worker.name}')">Dislike</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function addLike(name) {
  const worker = workers.find(w => w.name === name);
  if (worker) {
    worker.like++;
    renderTable();
  }
}

function addDislike(name) {
  const worker = workers.find(w => w.name === name);
  if (worker) {
    worker.dislike++;
    renderTable();
  }
}

renderTable();