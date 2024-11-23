// Switch between tabs based on user selection
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => content.classList.remove('active'));
            document.querySelector(tab.getAttribute('href')).classList.add('active');
        });
    });

    // Set the default tab to be visible
    document.querySelector('nav ul li a').classList.add('active');
    document.querySelector('.tab-content').classList.add('active');
});


let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}