import { Produto } from "../model/Produto";

const produtos : Produto[] = [];
export class ProdutoRepository{
    create(produto:Produto) : Produto[]{
        produtos.push(produto);
        return produtos;
    }
    list() : Produto[]{
        return produtos;
    }
    update(produtoAlterado:Produto) : Produto[]{
        const index = produtos.findIndex((produto) => produto.nome === produtoAlterado.nome);
        produtos[index] = produtoAlterado;
        return produtos;
    }
    remove(nome:String) : Produto[]{
        const index = produtos.findIndex((produto) => produto.nome === nome);
        produtos.splice(index, 1);
        return produtos;
    }
}