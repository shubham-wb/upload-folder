let table = document.getElementById("table"); //table element

//handler for custom btn
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("input").click();
});

//handler for adding files to UI
document.getElementById("input").addEventListener("change", (event) => {
  let array = event.target.files;
  for (let i = 0; i < array.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `<td id = "td-1">${array[i].webkitRelativePath}</td>
     <td id= "td-2">${formatSizeUnits(array[i].size)}</td>
     `;
    table.append(row);
  }

  document.querySelector(".no-f").remove();
});

//handler to check if there are no files and show "no files div "
(function checkifempty() {
  let a = document.getElementById("input").files;
  if (a.length === 0) {
    let a = document.createElement("div");
    a.setAttribute("id", "empty");
    a.innerText = `No Selected Folder 📂`;
    document.querySelector(".no-f").append(a);
  }
})();

//function to change size to KB, MB, GB ,TB etc..

function formatSizeUnits(bytes) {
  if (bytes >= 1073741824 * 1024) {
    bytes = (bytes / (1073741824 * 1024)).toFixed(2) + " TB";
  } else if (bytes >= 1073741824) {
    bytes = (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) {
    bytes = (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    bytes = (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes > 1) {
    bytes = bytes + " bytes";
  } else if (bytes == 1) {
    bytes = bytes + " byte";
  } else {
    bytes = "0 bytes";
  }
  return bytes;
}
