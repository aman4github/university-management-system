const postButton = document.querySelector("#postButton");
const backButton = document.querySelector("#backButton");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

postButton.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    backButton.style.display = "block";
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
        backButton.style.display = "none";
    };
    return false;
};

function goBack() {
    widget.style.display = "block";
    post.style.display = "none";
    backButton.style.display = "none";
}

function goToHomePage() {
    // Redirect to the homepage. Replace 'your_homepage_url' with the actual URL.
    window.location.href = 'index.html';
}
