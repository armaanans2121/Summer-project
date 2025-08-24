const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;

// Configure EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Mock data
const departments = [
  { id: 1, name: "Computer Science", desc: "Focus on AI, ML, Web Development and Research." },
  { id: 2, name: "Mechanical Engineering", desc: "Machines, thermodynamics and design." },
  { id: 3, name: "Civil Engineering", desc: "Infrastructure and construction projects." },
  { id: 4, name: "Electrical Engineering", desc: "Power systems, electronics and energy." }
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { departments });
});

app.get("/departments/:id", (req, res) => {
  const dept = departments.find(d => d.id === parseInt(req.params.id));
  if (!dept) return res.status(404).send("Department not found");
  res.render("department", { dept });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
