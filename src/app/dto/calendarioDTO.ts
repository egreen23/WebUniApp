
import {CompDTO} from './compDTO';

export class CalendarioDTO {

  constructor(
    public tipo: string,
    public dataInizio: string,
    public anno: string,
    public Lezione: CompDTO[],
    public dataFine: string,
    public semestre: string,
    public idCorsodistudio: number,
    public idCalendario: number,
    public nomeCds: string,
    public checked?: boolean
    ) {}
}
  /*public idCalendario: number;
  public tipo: string;
  public dataInizio: string;
  public anno: string;
  public comp: Calcomp[];
  public dataFine: string;
  public semestre: string;
  public idCorsodistudio: number;

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


}*/

