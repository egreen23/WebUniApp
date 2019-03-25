import {Calcomp} from '../model/calcomp';
import index from '@angular/cli/lib/cli';
import {Lezione} from '../model/lezione';

export interface Icalendario {
  idCalendario: number;
  tipo: string;
  dataInizio: string;
  anno: string;
  lezione: Lezione[];
  dataFine: string;
  semestre: string;
  
}
