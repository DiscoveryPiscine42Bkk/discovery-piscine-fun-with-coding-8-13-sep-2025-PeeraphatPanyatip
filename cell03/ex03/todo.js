const list = document.getElementById("ft_list");
const btn = document.getElementById("newBtn");

// โหลดจาก cookie ตอนเริ่ม
window.onload = () => {
  const saved = getCookie("todos");
  if (saved) {
    const arr = JSON.parse(saved);
    arr.forEach(t => addTodo(t, false)); // false = append ด้านล่าง
  }
};

// ปุ่ม New
btn.addEventListener("click", () => {
  const task = prompt("Enter a new TODO:");
  if (task && task.trim() !== "") {
    addTodo(task.trim(), true); // true = insert ด้านบน
    saveTodos();
  }
});

function addTodo(text, toTop) {
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", () => {
    if (confirm("Do you want to remove this TODO?")) {
      list.removeChild(div);
      saveTodos();
    }
  });
