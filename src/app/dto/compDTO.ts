export class CompDTO {
  constructor (
    public orarioFine: string,
    public nomeInsegnamento: string,
    public id: number,
    public nomeAula: string,
    public nomeDocente: string,
    public data: string,
    public idInsegnamento: number,
    public idCalendario: number,
    public nomeCorso: string,
    public cognomeDocente: string,
    public docente: string,
    public orarioInizio: string,
    public tipoCorso: string,
    public crediti: number,
    public idAula?: number,
    public checked?: boolean
  ) {}

}
