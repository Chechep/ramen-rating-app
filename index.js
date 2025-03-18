// Data stub
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "/Images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Gyukotsu Ramen", restaurant: "Menya", image: "/Images/gyukotsu.jpg", rating: 4, comment: "Tasty broth!" },
    { id: 3, name: "Kojiro Ramen", restaurant: "Ramen-ya", image: "/Images/kojiro.jpg", rating: 8, comment: "Amazing pork flavor!" },
    { id: 4, name: "Naruto Ramen", restaurant: "Ronin", image: "/Images/naruto.jpg", rating: 9, comment: "Tasty!" },
    { id: 5, name: "Nirvana Ramen", restaurant: "Oishi", image: "/Images/nirvana.jpg", rating: 7, comment: "Yummy!" },
];

// Function to display ramen images in the menu
function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add("ramen-item");
        img.addEventListener("click", () => displayRamenDetails(ramen));
        menu.appendChild(img);
    });

    // Display first ramen by default
    if (ramens.length > 0) displayRamenDetails(ramens[0]);
}

// Function to display ramen details when clicked
function displayRamenDetails(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating + "/10";
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

// Function for form submission for adding new ramen
document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newRamen = {
        id: ramens.length + 1,
        name: document.getElementById("name").value,
        restaurant: document.getElementById("restaurant").value,
        image: document.getElementById("image").value,
        rating: document.getElementById("rating").value,
        comment: document.getElementById("comment").value
    };

    ramens.push(newRamen);
    displayRamens();
    this.reset();
});

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
});