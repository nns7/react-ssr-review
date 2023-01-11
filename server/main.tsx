import express from "express";
import App from "src";
import About from "src/about";
import { render } from "src/server";

const server = express();
const port = process.env.PORT || 3000;

server.get("/", (_req, res) => {
  const page = render(
    {
      title: "React ssr sample",
      description: "Reactサーバーサイドレンダリングのサンプルです",
    },
    <App />
  );
  res.status(200).send(page);
});
server.get("./about", (_req, res) => {
  const page = render(
    {
      title: "About | React ssr sample",
      description: "Reactサーバーサイドレンダリングのサンプルです",
    },
    <About />
  );
  res.status(200).send(page);
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
