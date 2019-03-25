import {Calcomp} from './calcomp';
import {Lezione} from './lezione';

export class Calendario {

  public idCalendario: number;
  public tipo: string;
  public dataInizio: string;
  public anno: string;
  public comp: Calcomp[];
  public dataFine: string;
  public semestre: string;

  constructor(
     idCalendario: number,
     tipo: string,
     dataInizio: string,
     anno: string,
     comp: Calcomp[],
     dataFine: string,
     semestre: string

) {
    this.idCalendario = idCalendario;
    this.tipo = tipo;
    this.dataInizio = dataInizio;
    this.anno = anno;
    this.comp = comp;
    this.dataFine = dataFine;
    this.semestre = semestre;
  }


}

/*
export class Segnalazione {

  public descrizione:string;
  public titolo:string;
  public data:Date;
  public id:number;
  public view:boolean;
  public fotografia?:Array<Fotografia>;

  constructor(descrizione:string,titolo:string,data:Date,id:number,view:boolean){
    this.data=data;
    this.descrizione=descrizione;
    this.titolo=titolo;
    this.id=id;
    this.view=view;
  }
}
 */
