import { request, response, Response } from "express";
import { ProdutoRepository, ProdutoRepository } from "../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository();

export class ProdutoController{
    create(request: Request, response: Response) : void{
    const produtos = produtoRepository.create(request.body);
        response.status(201).json({message : "Produto Cadastrado", data: produtos})
    }

    list(){}
    update(){}
    delete(){}

}