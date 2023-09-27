// Dummy data for initial blog posts
let blogPosts = [
    { title: "First Blog Post", content: "This is my first blog post." },
    { title: "Second Blog Post", content: "Here's another blog post." },
];

function displayBlogPosts() {
    const blogList = document.getElementById("blog-list");

    // Clear existing posts
    blogList.innerHTML = "";

    // Display each blog post
    for (let i = 0; i < blogPosts.length; i++) {
        const post = blogPosts[i];
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button onclick="deleteBlogPost(${i})">Delete</button>
        `;
        blogList.appendChild(postElement);
    }
}

// Add a new blog post
function addBlogPost(title, content) {
    const newPost = { title, content };
    blogPosts.push(newPost);
    displayBlogPosts();
}

// Handle form submission
const blogForm = document.getElementById("blog-form");
blogForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        addBlogPost(title, content);
        titleInput.value = "";
        contentInput.value = "";
    }
});



function deleteBlogPost(index) {
    blogPosts.splice(index, 1);
    displayBlogPosts();
}

// Call the initial display function
displayBlogPosts();



// ...

// Function to display blog management options in the admin dashboard
function displayAdminDashboard() {
    const adminDashboard = document.getElementById("admin-dashboard");
    adminDashboard.style.display = "block";

    const blogPostList = document.getElementById("blog-post-list");
    blogPostList.innerHTML = ""; // Clear the list before adding items

    // Display each blog post with edit and delete options
    for (let i = 0; i < blogPosts.length; i++) {
        const post = blogPosts[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${post.title}</span>
            <button onclick="editBlogPost(${i})">Edit</button>
            <button onclick="deleteBlogPost(${i})">Delete</button>
        `;
        blogPostList.appendChild(listItem);
    }
}

// Function to toggle the visibility of the "Add New Blog Post" section
const toggleAddBlogButton = document.getElementById("toggle-add-blog");
toggleAddBlogButton.addEventListener("click", function () {
    const addBlogSection = document.getElementById("add-blog");
    addBlogSection.style.display = (addBlogSection.style.display === "none") ? "block" : "none";
});

// Function to edit a blog post (you can implement this separately)
function editBlogPost(index) {
    // Implement the edit functionality based on your requirements
    // You might want to open a separate page or modal for editing
}

// Call the function to display the admin dashboard
displayAdminDashboard();

// ...
