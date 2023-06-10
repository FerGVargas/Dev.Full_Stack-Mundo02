import { Injectable } from '@angular/core';
import { Editora } from "./editora"

@Injectable({

  providedIn: 'root'
  
})

export class ControleEditoraService {
  private editoras: Array<Editora>=[
    {codEditora: 10, nome: "Companhia das Letras"},
    {codEditora: 205, nome: 'Darkside Books'},
    {codEditora: 1028, nome: 'FTD'},
  ]

    getEditoras(): Editora[ ]{
      return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((ed) => ed.codEditora == codEditora)[0];
    return editora? editora.nome: ' ';
  }
};
