import { DocenteModule } from './docente.module';

describe('DocenteModule', () => {
  let docenteModule: DocenteModule;

  beforeEach(() => {
    docenteModule = new DocenteModule();
  });

  it('should create an instance', () => {
    expect(docenteModule).toBeTruthy();
  });
});
