export class SegretarioDTO {

  constructor(public idMatricola: number,
              public nome: string,
              public cognome: string,
              public email: string,
              public password: string,
              public dataDiNascita: string,
              public indirizzo: string,
              public telefono: string,
              public idSegreteria: number,
              public segretario: string) {}


}
