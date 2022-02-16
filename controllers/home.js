module.exports = (app) => {
  app.get("/", (req, res) => {
    users = [];
    res.render("index", users);
  });

  app.post("/", (req, res) => {
    users = ["geddy", "neil", "alex"];
    res.status(200).json(users);
  });
};
