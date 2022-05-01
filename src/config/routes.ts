import {Router} from "express";
import { ProdutoController } from "../controller/ProdutoController";

const routes = Router();

routes.get("/", (req, res)=>{
    res.status(200).json({message : "Server Project"});
})

//Produto
routes.post("/produto/criar", new ProdutoController().create);
routes.get("/produto/listar", new ProdutoController().list);
routes.put("/produto/alterar", new ProdutoController().update);
routes.post("/produto/deletar/:nome", new ProdutoController().delete);

export default routes;
