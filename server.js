const express = require("express");
const React = require("react");
const fs = require("fs");
const path = require("path");
const rds = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const { matchRoutes } = require("react-router-config");
import { Provider } from "react-redux";
import routes from "./src/routes";
import createStore from "./src/store";

const App = require("./src/App").default;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get(/\.(js|css|map|ico)$/, express.static("./build"));

app.get("*", async (req, res) => {
  const store = createStore();

  const promises = matchRoutes(routes, req.originalUrl).map((route) =>
    route.getServerSideData ? route.getServerSideData(store) : null
  );

  await Promise.all(promises);

  const page = rds.renderToString(
    <StaticRouter location={req.originalUrl} context={{}}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  fs.readFile(path.resolve(__dirname, "./build/index.html"), (err, data) => {
    if (err) {
      return res.status(500).send("Error Fetching SSR App Please Build App First");
    }
    const indexHTML = data
      .toString()
      .replace(`<div id="root"></div>`, `<div id="root">${page}</div>`);
    res.send(indexHTML);
  });
});

app.post("/auth", (req, res) => {
  console.log(req.body);
  const error = "email is wrong";
  if (error) return res.redirect("/login?error=1");
});

app.listen(3000, () => console.log("Running on Port 3000"));
