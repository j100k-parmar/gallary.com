let items = document.querySelectorAll('button');
let pictures = document.querySelectorAll('.gallary img');

items.forEach(button => {
    button.onclick = function() {
        items.forEach(button => {
            button.className = "";
        })
        button.className = "Active";

        let value = button.textContent;
        pictures.forEach(img => {
            img.style.display = 'none';
            if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All") {
                img.style.display = 'block';
            }
        })
    }
});