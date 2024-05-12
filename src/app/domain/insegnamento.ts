export class Insegnamento {

  constructor(
    public nome: string,
    public crediti: number,
    public descrizione: string,
    public annoCorso: string,
    public idDocente: number,
    public idCorsoDiStudio: number,
    public professore?: string,
    public idInsegnamento?: number
  ) {

  }

}
