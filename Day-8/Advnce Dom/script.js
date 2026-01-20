const parent = document.querySelector(".parent");

const addChild = document.querySelector('#setele');
addChild.addEventListener('click', () => {
    if (parent.children.length >= 1) {
        return;
    }
    const child = document.createElement("div");
    child.textContent = "Child";
    child.classList.add("child");
    parent.appendChild(child);
});

const removeChild = document.querySelector('#removeEle');
removeChild.addEventListener('click', () => {
    const child = parent.querySelector(".child");
    if (child) {
        parent.removeChild(child);
    }
});