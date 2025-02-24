const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const postsFilePath = path.join(__dirname, "posts.json");

const loadPosts = () => {
    try {
        const data = fs.readFileSync(postsFilePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

app.get("/", (req, res) => {
    const posts = loadPosts();
    res.render("home", { posts });
});

app.get("/addPost", (req, res) => {
    res.render("addPost"); 
});

app.post("/add-task", (req, res) => {
    const { title, content } = req.body;
    const posts = loadPosts();

    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);

    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));

    res.redirect("/");
});

app.get("/post", (req, res) => {
    const postId = parseInt(req.query.id);
    const posts = loadPosts();
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("post", { post });
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
