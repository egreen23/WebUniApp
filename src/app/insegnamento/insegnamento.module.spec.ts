import { InsegnamentoModule } from './insegnamento.module';

describe('InsegnamentoModule', () => {
  let insegnamentoModule: InsegnamentoModule;

  beforeEach(() => {
    insegnamentoModule = new InsegnamentoModule();
  });

  it('should create an instance', () => {
    expect(insegnamentoModule).toBeTruthy();
  });
});
