export class DocenteDTO {
  constructor(
    public idMatricola: number,
    public nome: string,
    public cognome: string,
    public email: string,
    public password: string,
    public dataDiNascita: string,
    public indirizzo: string,
    public telefono: string,
    public idDocente: number,
    public professore: string
  ) {}
}
