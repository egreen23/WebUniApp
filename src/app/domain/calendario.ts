export class Calendario {

  constructor(
    public idCalendario: number,
    public tipo: string,
    public anno: string,
    public dataInizio: string,
    public dataFine: string,
    public semestre: string,
    public idCds: number,
    public checked?: boolean,
    public nomeCds?: string
  ) {}
}
