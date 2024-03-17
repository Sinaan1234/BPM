let intervalId;
let serialNo = 1;

document.getElementById("start-btn").addEventListener("click", function () {
  intervalId = setInterval(function () {
    insertData();
  }, 1500);
});

document.getElementById("stop-btn").addEventListener("click", function () {
  clearInterval(intervalId);
});

document.getElementById("reset-btn").addEventListener("click", function () {
  resetTable();
});

function insertData() {
  const tableBody = document.querySelector("#bpm-table tbody");
  const date = new Date().toLocaleString();
  const bpm =
    serialNo <= 10 ? getRandomNumber(100, 120) : getRandomNumber(70, 100);
  const row = `
        <tr>
            <td>${serialNo}</td>
            <td>${date}</td>
            <td>${bpm}</td>
        </tr>
    `;
  tableBody.innerHTML += row;
  serialNo++;
}

function resetTable() {
  const tableBody = document.querySelector("#bpm-table tbody");
  tableBody.innerHTML = "";
  serialNo = 1;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
