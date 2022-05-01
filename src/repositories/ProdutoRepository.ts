import { Produto } from "../model/Produto";

const produtos : Produto[] = [];
export class ProdutoRepository{
    create(produto:Produto) : Produto[]{
        produtos.push(produto);
        return produtos;
    }
}