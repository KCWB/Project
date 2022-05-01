import { Request, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";
import axios from "axios";

const produtoRepository = new ProdutoRepository();

export class ProdutoController{
    create(request: Request, response: Response) : void{
        const produto = request.body
        const produtos = produtoRepository.create(produto);

        axios.post("http://localhost:3334/produto/criar", produto)
        .then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        });

        response.status(201).json({message : "Produto Cadastrado", data: produtos})
    }
    list(request: Request, response: Response): void{
        const produtos = produtoRepository.list();
        response.status(200).json({message: "Listagem de Produtos", data: produtos})
    }
    update(request: Request, response: Response): void{
        const produtos = produtoRepository.update(request.body);
        response.status(200).json({message: "Produto Alterado", data: produtos})
    }
    delete(request: Request, response: Response): void{
        const nome = request.params.nome;
        const produtos = produtoRepository.remove(nome);
        response.status(200).json({message: "Produto Removido", data: produtos})
    }
}