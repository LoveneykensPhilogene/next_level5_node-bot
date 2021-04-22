/*import express from "express";
import "./database";

const app = express();*/

/**
*GET = Buscas
* POST = Criação
* PUT = Alteração
* DELETE  = Deletar
* PATH = Alterar uma informação especifica
" API para requisicões : insomnia / Postman"
 */

/*app.get("/", (Request, Response) => {
  //  return Response.send("olá Masterlove!");
  return Response.json(
    {
      message1: "Olá Masterlove !"

    })
})
app.post("/", (Request, Response) => {
  return Response.json(
    {
      message: "Usuario salvo com sucesso !"
    }
  );
})

app.listen(3333, () => console.log("Server  is running on port 3333"));
*/

import express, { request, response } from "express";

import { createServer } from "http";

import { Server, Socket } from "socket.io";

import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");

});

const http = createServer(app); // criando protocolo htpp
const io = new Server(http); // criando protocolo ws
io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});
app.use(express.json());

app.use(routes);

http.listen(3333, () => console.log("Server  is running on port 3333"));
