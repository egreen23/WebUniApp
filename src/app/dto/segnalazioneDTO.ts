export class SegnalazioneDTO {
  constructor(
    public idSegnalazione: number,
    public testo: string,
    public stato: string,
    public idDocente: number,
    public nomeDocente: string,
    public cognomeDocente: string,
    public emailDocente: string,
    public idSegreteria: number,
    public nomeSegretario: string,
    public cognomeSegretario: string,
    public emailSegreteria: string,
    public idAula: number,
    public nomeAula: string,
    public prof: string,
    public seg: string,
    public nota: string,
    public data: string,
    public titolo: string
  ) {}

}
