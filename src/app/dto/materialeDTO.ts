import {Observable} from 'rxjs';

export class MaterialeDTO {
  constructor(
    public idMateriale: number,
    public nome: string,
    public url: string,
    public idInsegnamento: number,
    public nomeInsegnamento: string,
    public data: string,
    public nomeCorsoDiStudio: string,
    public tipo: string,
    public fburl?: Observable<string | null>
  ) {}

}
