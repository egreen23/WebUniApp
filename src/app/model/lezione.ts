export class Lezione {
  constructor (
    public orarioFine: string,
    public nomeInsegnamento: string,
    public id: number,
    public nomeAula: string,
    public nomeDocente: string,
    public data: string,
    public nomeCorso: string,
    public cognomeDocente: string,
    public orarioInizio: string,
    public tipoCorso: string,
    public crediti: number,
  ) {}
}
