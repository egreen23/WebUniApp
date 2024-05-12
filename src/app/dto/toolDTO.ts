export class ToolDTO {
  constructor(
    public idAttrezzatura: number,
    public idAula: number,
    public idTool: number,
    public nomeTool: string,
    public descrizioneTool: string,
    public checked?: boolean
  ) {}
}
