---
marp: true
theme: default
paginate: true
footer: '🚀 PHP Zero to Hero'
size: 16:9
style: |
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 22px;
    padding: 50px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.light {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    color: #2c3e50;
  }

  section.colorful {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    color: white;
  }

  h1 {
    font-size: 72px;
    font-weight: 900;
    margin: 10px 0 20px 0;
    text-shadow: 3px 3px 6px rgba(0,0,0,0.4);
    line-height: 1.2;
  }

  h2 {
    font-size: 50px;
    font-weight: 800;
    margin: 15px 0 20px 0;
    border-bottom: 4px solid rgba(255,255,255,0.4);
    padding-bottom: 12px;
    line-height: 1.2;
  }

  section.light h2 {
    color: #ffffff;
    border-bottom: 4px solid #667eea;
  }

  h3 {
    font-size: 36px;
    font-weight: 700;
    margin: 10px 0;
  }

  code {
    background: rgba(0, 0, 0, 0.8) !important;
    padding: 8px 16px !important;
    border-radius: 6px !important;
    font-family: 'Courier New', monospace !important;
    font-size: 20px !important;
    word-break: break-word !important;
    color: #ffff00 !important;
    font-weight: bold !important;
  }

  section.light code {
    background: rgba(0, 0, 0, 0.85) !important;
    color: #ffff00 !important;
    font-weight: bold !important;
  }

  pre {
    background: #000000 !important;
    color: #ffffff !important;
    padding: 25px !important;
    border-radius: 10px !important;
    font-size: 16px !important;
    border: 4px solid #ffff00 !important;
    width: 100% !important;
    max-height: 550px !important;
    overflow: auto !important;
    line-height: 1.8 !important;
    box-shadow: 0 0 30px rgba(255, 255, 0, 0.6) !important;
    font-weight: 600 !important;
  }

  pre code {
    background: none !important;
    padding: 0 !important;
    font-size: 16px !important;
    color: #ffffff !important;
    font-family: 'Courier New', 'Courier', monospace !important;
    font-weight: 600 !important;
  }

  /* Force all text inside pre to be visible */
  pre * {
    color: #ffffff !important;
    background: transparent !important;
  }

  ul, ol {
    list-style-position: inside;
    font-size: 24px;
    line-height: 2;
    margin: 10px 0;
  }

  li {
    margin: 8px 0;
  }

  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
  }

  table {
    font-size: 18px;
    border-collapse: collapse;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    overflow: hidden;
    margin: 15px auto;
    width: 95%;
  }

  th, td {
    padding: 10px 15px;
    border: 1px solid rgba(252, 252, 252, 0.89);
  }

  th {
    background: rgba(0,0,0,0.25);
    font-weight: bold;
    font-size: 18px;
  }

  .highlight {
    background: #ffd700;
    color: #333;
    padding: 3px 8px;
    border-radius: 4px;
    font-weight: bold;
  }

---

# 🚀 PHP Zero to Hero

### Master Web Development from Scratch!

*Learn syntax, databases, files, and build REAL apps*

---

<!-- _class: light -->

# 📚 What is PHP?

**PHP** = Server-side scripting language

✨ **Why PHP?**
- ⚡ Easy to learn
- 🗄️ Perfect MySQL integration
- 🌍 Powers 77% of websites
- 🔧 All platforms supported
- 🚀 Beginner friendly!

---

<!-- _class: colorful -->

# 💻 Setup

## Windows
1. Download **XAMPP**
2. Start Apache + MySQL
3. Create in `htdocs/`
4. Visit `http://localhost/`

## macOS
```bash
brew install php mysql
php --version
```

---

<!-- _class: light -->

# ✅ First PHP Script

```php
<?php
  echo "🎉 Hello PHP!";
?>
```

**Save as:** `test.php`
**Visit:** `http://localhost/test.php`

✨ You should see: **🎉 Hello PHP!**

---

<!-- _class: colorful -->

# 🎯 Variables & Types

```php
<?php
$name = "Alice";        // String 📝
$age = 25;              // Integer 🔢
$price = 19.99;         // Float 💰
$active = true;         // Boolean ✓
$items = ["a", "b"];    // Array 📦
?>
```

**Rule:** Start variable with `$`

---

<!-- _class: light -->

# ➕ Operators

```php
<?php
10 + 5    // → 15 (Addition)
10 - 5    // → 5  (Subtraction)
10 * 5    // → 50 (Multiply)
10 / 5    // → 2  (Division)
10 % 3    // → 1  (Remainder)
"Hi" . "!" // → "Hi!" (Combine)
?>
```

---

<!-- _class: colorful -->

# 🔀 If Statements

```php
<?php
$age = 18;

if ($age >= 18) {
    echo "🎉 Adult!";
} else {
    echo "👶 Child!";
}
?>
```

---

<!-- _class: light -->

# 🔄 Loops

```php
<?php
// For Loop
for ($i = 0; $i < 3; $i++) {
    echo $i;  // 0 1 2
}

// Foreach
$fruits = ["🍎", "🍌", "🍒"];
foreach ($fruits as $f) {
    echo $f;
}
?>
```

---

<!-- _class: colorful -->

# 🎁 Functions

```php
<?php
function greet($name) {
    return "👋 Hello, $name!";
}

echo greet("Alice");
// → 👋 Hello, Alice!
?>
```

---

<!-- _class: light -->

# 📦 Arrays

```php
<?php
// Indexed
$colors = ["Red", "Green", "Blue"];
echo $colors[0];  // Red

// Associative
$person = ["name" => "John", "age" => 30];
echo $person["name"];  // John
?>
```

---

<!-- _class: colorful -->

# 🏛️ Classes & Objects

```php
<?php
class Dog {
    public $name;

    public function bark() {
        return "$this->name: Woof! 🐕";
    }
}

$dog = new Dog();
$dog->name = "Buddy";
echo $dog->bark();
?>
```

---

<!-- _class: light -->

# 🗄️ MySQL Connection

```php
<?php
$conn = new mysqli(
    "localhost",
    "root",
    "",
    "my_app"
);

if ($conn->connect_error) {
    die("❌ Connection failed!");
}
?>
```

---

<!-- _class: colorful -->

# ➕ INSERT (Safe!)

```php
<?php
$username = "alice";
$email = "alice@example.com";

$stmt = $conn->prepare(
    "INSERT INTO users
     (username, email)
     VALUES (?, ?)"
);

$stmt->bind_param("ss", $username, $email);
$stmt->execute();
echo "✅ Saved!";
?>
```

---

<!-- _class: light -->

# 📖 SELECT

```php
<?php
$result = $conn->query(
    "SELECT username, email FROM users"
);

while ($row = $result->fetch_assoc()) {
    echo "👤 " . $row["username"] . "<br>";
}
?>
```

---

<!-- _class: colorful -->

# ✏️ UPDATE

```php
<?php
$stmt = $conn->prepare(
    "UPDATE users SET email = ? WHERE id = ?"
);

$stmt->bind_param("si", $new_email, $user_id);
$stmt->execute();
echo "✅ Updated!";
?>
```

---

<!-- _class: light -->

# 🗑️ DELETE

```php
<?php
$stmt = $conn->prepare(
    "DELETE FROM users WHERE id = ?"
);

$stmt->bind_param("i", $user_id);
$stmt->execute();
echo "✅ Deleted!";
?>
```

---

<!-- _class: colorful -->

# 📂 File Operations

```php
<?php
// Read
$content = file_get_contents("file.txt");

// Write
file_put_contents("output.txt", "Hello!");

// Check exists
if (file_exists("config.php")) {
    echo "✅ Found!";
}

// Delete
unlink("file.txt");
?>
```

---

<!-- _class: light -->

# 📤 File Upload

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = $_FILES["file"];
    $target = "uploads/" . $file["name"];

    if ($file["size"] < 5000000) {
        move_uploaded_file(
            $file["tmp_name"],
            $target
        );
    }
}
?>
```

---

<!-- _class: colorful -->

# 📋 Form Processing

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "✅ Valid!";
    }
}
?>
```

---

<!-- _class: light -->

# 🔐 Sessions

```php
<?php
session_start();

$_SESSION["user_id"] = 123;
$_SESSION["username"] = "alice";

if (isset($_SESSION["logged_in"])) {
    echo "👤 Welcome!";
}

session_destroy();
?>
```

---

<!-- _class: colorful -->

# 🛡️ Security Checklist

✅ **DO THIS:**
- Use prepared statements
- Hash passwords: `PASSWORD_BCRYPT`
- Sanitize: `htmlspecialchars()`
- Validate emails

❌ **DON'T:**
- SQL concatenation
- Plain text passwords
- Trust user input

---

<!-- _class: light -->

# 🚀 Project: Todo App

**Database:**
```sql
CREATE TABLE todos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255)
);
```

---

<!-- _class: colorful -->

# ➕ Add Todo

```php
<?php
$title = htmlspecialchars($_POST["title"]);

$stmt = $conn->prepare(
    "INSERT INTO todos (user_id, title)
     VALUES (?, ?)"
);

$stmt->bind_param("is", $_SESSION["user_id"], $title);
$stmt->execute();
echo "✅ Added!";
?>
```

---

<!-- _class: light -->

# 📖 Show Todos

```php
<?php
$result = $conn->query(
    "SELECT * FROM todos
     WHERE user_id = " . $_SESSION["user_id"]
);

while ($todo = $result->fetch_assoc()) {
    echo "✓ " . $todo["title"] . "<br>";
}
?>
```

---

<!-- _class: colorful -->

# 🌟 Project Ideas

- 📝 **Blog** - Posts & comments
- 📸 **Gallery** - Photo upload
- 🛒 **Shop** - Shopping cart
- 💬 **Chat** - Messaging
- ⭐ **Social** - Users & posts
- 📊 **Dashboard** - Analytics
- 🎮 **Game** - Score tracking

---

<!-- _class: light -->

# 📚 Project Structure

```
project/
├── config.php
├── index.php
├── classes/
│   └── User.php
├── uploads/
└── data/
```

---

<!-- _class: colorful -->

# 🎓 PRACTICE PROJECT: Image Gallery

## Full App with MySQL + Files

---

<!-- _class: light -->

# 📊 Database Setup

```sql
CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    filename VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    uploaded_at TIMESTAMP DEFAULT NOW()
);
```

---

<!-- _class: colorful -->

# 📤 Upload Handler

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = htmlspecialchars($_POST["title"]);
    $file = $_FILES["image"];
    $filename = time() . "_" . $file["name"];
    $target = "uploads/" . $filename;

    if (move_uploaded_file($file["tmp_name"], $target)) {
        $conn->query("INSERT INTO images (filename, title)
                     VALUES ('$filename', '$title')");
        echo "✅ Uploaded!";
    }
}
?>
```

---

<!-- _class: light -->

# 📸 Display Gallery

```php
<?php
$result = $conn->query(
    "SELECT * FROM images ORDER BY uploaded_at DESC"
);

while ($row = $result->fetch_assoc()) {
    echo "<img src='uploads/" . $row["filename"] . "'>";
    echo "<p>" . $row["title"] . "</p>";
}
?>
```

---

<!-- _class: colorful -->

# 🗑️ Delete Image

```php
<?php
if (isset($_POST["delete_id"])) {
    $id = $_POST["delete_id"];
    $result = $conn->query(
        "SELECT filename FROM images WHERE id = $id"
    );
    $row = $result->fetch_assoc();

    unlink("uploads/" . $row["filename"]);
    $conn->query("DELETE FROM images WHERE id = $id");
    echo "✅ Deleted!";
}
?>
```

---

<!-- _class: light -->

# 📝 PRACTICE PROJECT: Contact Form

## Saves to File + Email

---

<!-- _class: colorful -->

# 💬 Contact Processor

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $msg = htmlspecialchars($_POST["message"]);

    $data = "Name: $name | Email: $email | Message: $msg\n";

    file_put_contents("contacts.log", $data, FILE_APPEND);

    mail("admin@example.com", "New Contact",
         "From: $email\n$msg");
    echo "✅ Sent!";
}
?>
```

---

<!-- _class: light -->

# 📖 Read Contact Log

```php
<?php
$contacts = file("contacts.log");

foreach ($contacts as $contact) {
    $parts = explode(" | ", $contact);
    echo "<p>{$parts[0]}</p>";
    echo "<p>{$parts[2]}</p>";
    echo "<hr>";
}
?>
```

---

<!-- _class: colorful -->

# 🔐 USER AUTH PROJECT

## Complete Login System

---

<!-- _class: light -->

# 👤 Create Users Table

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

<!-- _class: colorful -->

# ✍️ Register User

```php
<?php
if ($_POST["action"] == "register") {
    $username = htmlspecialchars($_POST["username"]);
    $email = htmlspecialchars($_POST["email"]);
    $password = password_hash($_POST["password"],
                              PASSWORD_BCRYPT);

    $stmt = $conn->prepare(
        "INSERT INTO users (username, email, password)
         VALUES (?, ?, ?)"
    );

    $stmt->bind_param("sss", $username, $email, $password);
    $stmt->execute();
    echo "✅ Registered!";
}
?>
```

---

<!-- _class: light -->

# 🔓 Login User

```php
<?php
session_start();

if ($_POST["action"] == "login") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $stmt = $conn->prepare(
        "SELECT id, password FROM users WHERE username = ?"
    );
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user["password"])) {
            $_SESSION["user_id"] = $user["id"];
            echo "✅ Welcome!";
        }
    }
}
?>
```

---

<!-- _class: colorful -->

# 🚀 BLOG PROJECT

## Posts + Comments + Files

---

<!-- _class: light -->

# 📚 Create Tables

```sql
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255),
    content LONGTEXT,
    featured_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

<!-- _class: colorful -->

# ✍️ Create Post

```php
<?php
$title = htmlspecialchars($_POST["title"]);
$content = htmlspecialchars($_POST["content"]);
$image = "uploads/" . time() . "_" . $_FILES["image"]["name"];

move_uploaded_file($_FILES["image"]["tmp_name"], $image);

$stmt = $conn->prepare(
    "INSERT INTO posts (user_id, title, content, featured_image)
     VALUES (?, ?, ?, ?)"
);

$stmt->bind_param("isss", $_SESSION["user_id"],
                  $title, $content, $image);
$stmt->execute();
echo "✅ Post created!";
?>
```

---

<!-- _class: light -->

# 📖 Display Posts

```php
<?php
$result = $conn->query(
    "SELECT p.*, u.username
     FROM posts p
     JOIN users u ON p.user_id = u.id
     ORDER BY p.created_at DESC"
);

while ($post = $result->fetch_assoc()) {
    echo "<h2>" . $post["title"] . "</h2>";
    echo "<img src='" . $post["featured_image"] . "'>";
    echo "<p>" . $post["content"] . "</p>";
}
?>
```

---

<!-- _class: colorful -->

# 💬 Add Comment

```php
<?php
$content = htmlspecialchars($_POST["comment"]);
$post_id = $_POST["post_id"];

$stmt = $conn->prepare(
    "INSERT INTO comments (post_id, user_id, content)
     VALUES (?, ?, ?)"
);

$stmt->bind_param("iii", $post_id,
                  $_SESSION["user_id"], $content);
$stmt->execute();
echo "✅ Comment added!";
?>
```

---

<!-- _class: light -->

# 💭 Show Comments

```php
<?php
$post_id = $_GET["id"];

$result = $conn->query(
    "SELECT c.*, u.username
     FROM comments c
     JOIN users u ON c.user_id = u.id
     WHERE c.post_id = $post_id
     ORDER BY c.created_at DESC"
);

while ($comment = $result->fetch_assoc()) {
    echo "<p><b>" . $comment["username"] . ":</b></p>";
    echo "<p>" . $comment["content"] . "</p>";
}
?>
```

---

<!-- _class: colorful -->

# 📊 DASHBOARD PROJECT

## Admin Stats + Export

---

<!-- _class: light -->

# 📈 Dashboard Stats

```php
<?php
$users = $conn->query("SELECT COUNT(*) as total FROM users");
$posts = $conn->query("SELECT COUNT(*) as total FROM posts");
$images = count(glob("uploads/*"));

$user_count = $users->fetch_assoc()["total"];
$post_count = $posts->fetch_assoc()["total"];

echo "👤 Users: $user_count<br>";
echo "📝 Posts: $post_count<br>";
echo "📸 Images: $images<br>";
?>
```

---

<!-- _class: colorful -->

# 📥 Export to CSV

```php
<?php
$filename = "users_export.csv";
$file = fopen($filename, "w");

$header = ["ID", "Username", "Email", "Created"];
fputcsv($file, $header);

$result = $conn->query("SELECT * FROM users");
while ($row = $result->fetch_assoc()) {
    fputcsv($file, $row);
}

fclose($file);
header("Content-Type: application/csv");
header("Content-Disposition: attachment; filename=$filename");
readfile($filename);
?>
```

---

<!-- _class: light -->

# 🧪 FILE I/O EXERCISES

## Practice Reading/Writing

---

<!-- _class: colorful -->

# ✍️ Exercise 1: Todo List File

```php
<?php
// Add todo
$todo = htmlspecialchars($_POST["todo"]) . PHP_EOL;
file_put_contents("todos.txt", $todo, FILE_APPEND);

// Show todos
$todos = file("todos.txt");
foreach ($todos as $t) {
    echo "✓ " . trim($t) . "<br>";
}

// Clear all
unlink("todos.txt");
touch("todos.txt");
?>
```

---

<!-- _class: light -->

# ✍️ Exercise 2: Config File

```php
<?php
// Create config.json
$config = [
    "app_name" => "My App",
    "db_host" => "localhost",
    "debug" => true
];

file_put_contents("config.json",
    json_encode($config, JSON_PRETTY_PRINT)
);

// Load config
$config = json_decode(
    file_get_contents("config.json"), true
);

echo $config["app_name"];
?>
```

---

<!-- _class: colorful -->

# ✍️ Exercise 3: User Avatar Upload

```php
<?php
$file = $_FILES["avatar"];
$ext = pathinfo($file["name"], PATHINFO_EXTENSION);
$new_name = $_SESSION["user_id"] . "." . $ext;

if (in_array($ext, ["jpg", "png", "gif"])) {
    move_uploaded_file(
        $file["tmp_name"],
        "avatars/" . $new_name
    );

    $conn->query(
        "UPDATE users SET avatar = '$new_name'
         WHERE id = " . $_SESSION["user_id"]
    );
    echo "✅ Avatar updated!";
}
?>
```

---

<!-- _class: light -->

# 🧪 MYSQL EXERCISES

## Practice Database Queries

---

<!-- _class: colorful -->

# ✍️ Exercise 1: Search

```php
<?php
$search = htmlspecialchars($_POST["q"]);

$stmt = $conn->prepare(
    "SELECT * FROM posts WHERE title LIKE ?"
);

$search_term = "%" . $search . "%";
$stmt->bind_param("s", $search_term);
$stmt->execute();

$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
    echo $row["title"] . "<br>";
}
?>
```

---

<!-- _class: light -->

# ✍️ Exercise 2: Pagination

```php
<?php
$page = $_GET["page"] ?? 1;
$limit = 10;
$offset = ($page - 1) * $limit;

$result = $conn->query(
    "SELECT * FROM posts
     LIMIT $limit OFFSET $offset"
);

while ($row = $result->fetch_assoc()) {
    echo $row["title"] . "<br>";
}

// Next page link
echo "<a href='?page=" . ($page + 1) . "'>Next</a>";
?>
```

---

<!-- _class: colorful -->

# ✍️ Exercise 3: Statistics

```php
<?php
// Posts by user
$result = $conn->query(
    "SELECT u.username, COUNT(p.id) as post_count
     FROM users u
     LEFT JOIN posts p ON u.id = p.user_id
     GROUP BY u.id
     ORDER BY post_count DESC"
);

while ($row = $result->fetch_assoc()) {
    echo $row["username"] . ": " .
         $row["post_count"] . " posts<br>";
}
?>
```

---

<!-- _class: light -->

# ✍️ Exercise 4: Sorting

```php
<?php
$sort = $_GET["sort"] ?? "desc";
$order = ($sort == "asc") ? "ASC" : "DESC";

$result = $conn->query(
    "SELECT * FROM posts
     ORDER BY created_at $order"
);

while ($row = $result->fetch_assoc()) {
    echo $row["title"] . " - " .
         $row["created_at"] . "<br>";
}

echo "<a href='?sort=asc'>↑ Oldest</a>";
echo "<a href='?sort=desc'>↓ Newest</a>";
?>
```

---

<!-- _class: colorful -->

# 🌟 CAPSTONE: PORTFOLIO SITE

## Combine Everything!

---

<!-- _class: light -->

# 📋 Database Schema

```sql
CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    image VARCHAR(255),
    live_url VARCHAR(255),
    github_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE skills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    level INT
);
```

---

<!-- _class: colorful -->

# 📸 Add Project

```php
<?php
$title = htmlspecialchars($_POST["title"]);
$desc = htmlspecialchars($_POST["description"]);
$image = "projects/" . time() . "_" .
         $_FILES["image"]["name"];

move_uploaded_file($_FILES["image"]["tmp_name"], $image);

$stmt = $conn->prepare(
    "INSERT INTO projects (title, description, image)
     VALUES (?, ?, ?)"
);

$stmt->bind_param("sss", $title, $desc, $image);
$stmt->execute();
echo "✅ Project added!";
?>
```

---

<!-- _class: light -->

# 🖼️ Display Portfolio

```php
<?php
$result = $conn->query(
    "SELECT * FROM projects
     ORDER BY created_at DESC"
);

while ($project = $result->fetch_assoc()) {
    echo "<div class='project'>";
    echo "<img src='" . $project["image"] . "'>";
    echo "<h3>" . $project["title"] . "</h3>";
    echo "<p>" . $project["description"] . "</p>";
    echo "</div>";
}
?>
```

---

<!-- _class: colorful -->

# 📊 Skills Bar

```php
<?php
$skills = $conn->query("SELECT * FROM skills");

while ($skill = $skills->fetch_assoc()) {
    $level = $skill["level"];
    echo "<p>" . $skill["name"] . "</p>";
    echo "<div class='bar'>";
    echo "<div class='fill' style='width:" .
         $level . "%'></div>";
    echo "</div>";
}
?>
```

---

<!-- _class: light -->

# 💾 Export Resume

```php
<?php
$filename = "resume.txt";
$file = fopen($filename, "w");

$resume = "PORTFOLIO RESUME\n";
$resume .= "================\n\n";

$projects = $conn->query("SELECT * FROM projects");
while ($p = $projects->fetch_assoc()) {
    $resume .= "- " . $p["title"] . "\n";
}

fwrite($file, $resume);
fclose($file);

echo "✅ Resume saved!";
?>
```

---

<!-- _class: colorful -->

# 🎓 LEARNING CHECKLIST

## What You Should Know

---

<!-- _class: light -->

# ✅ PHP Basics

- ✓ Variables & data types
- ✓ Operators & control structures
- ✓ Functions & arrays
- ✓ Classes & objects
- ✓ Error handling

---

<!-- _class: colorful -->

# ✅ File Handling

- ✓ Read files
- ✓ Write files
- ✓ Upload files
- ✓ Delete files
- ✓ JSON operations

---

<!-- _class: light -->

# ✅ MySQL Mastery

- ✓ Create databases & tables
- ✓ INSERT, SELECT, UPDATE, DELETE
- ✓ Prepared statements (security!)
- ✓ JOIN tables
- ✓ GROUP BY & aggregate functions

---

<!-- _class: colorful -->

# ✅ Web Development

- ✓ Forms & validation
- ✓ Sessions & cookies
- ✓ File uploads
- ✓ Security best practices
- ✓ Output encoding

---

<!-- _class: light -->

# 🎯 Next Steps

1. **Build Projects** - Every day!
2. **Learn Frameworks** - Laravel time
3. **Master APIs** - REST & GraphQL
4. **Study Patterns** - Design patterns
5. **Deploy** - Linux & servers
6. **Keep Growing** - Never stop!

---

<!-- _class: colorful -->

# 📖 Resources

**Official Docs:**
- 🔗 php.net
- 🔗 dev.mysql.com

**Frameworks:**
- 🔗 laravel.com
- 🔗 symfony.com

**Learn:**
- 🔗 phptherightway.com

---

<!-- _class: light -->

# 🎉 Congratulations!

## You learned PHP! 🏆

### From Zero to Hero! ⭐

**You can now:**
- Build websites 🌐
- Use databases 🗄️
- Handle files 📁
- Create apps 🚀

---

<!-- _class: colorful -->

# 🚀 Your Journey Starts Now!

💡 **Remember:**
- Start small
- Build projects
- Ask for help
- Never give up!

### Happy Coding! 🎉

---

# ❓ Questions?

**Let's code together!**

💪 You've got this! 🚀

**Now go build something AMAZING!**
