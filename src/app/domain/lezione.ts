export class Lezione {

  constructor (
    public idLezione: number,
    public orarioInizio: string,
    public orarioFine: string,
    public data: string,
    public idAula: number,
    public idCalendario: number,
    public idInsegnamento: number
  ) {}


}
