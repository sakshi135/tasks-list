const modalCont = document.querySelector(".modal-cont");

const addBtn = document.querySelector(".add-btn");
let addModal = false;
addBtn.addEventListener("click", function () {
  if (!addModal) modalCont.style.display = "flex";
  else modalCont.style.display = "none";
  addModal = !addModal;
});

const priorityColor = document.querySelectorAll(".priority-color");
for (let i = 0; i < priorityColor.length; i++) {
  priorityColor[i].addEventListener("click", function () {
    priorityColor.forEach(function (elem) {
      elem.classList.remove("active");
    });

    priorityColor[i].classList.add("active");
  });
}
