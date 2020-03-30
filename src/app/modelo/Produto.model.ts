import { DetailFone } from './DetailFone';

 export class Produto {
    id: number;
    nome: String;
    descricao: String;
    preco: String;

    fones:Array<DetailFone>;
}