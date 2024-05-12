import { AulaModule } from './aula.module';

describe('AulaModule', () => {
  let aulaModule: AulaModule;

  beforeEach(() => {
    aulaModule = new AulaModule();
  });

  it('should create an instance', () => {
    expect(aulaModule).toBeTruthy();
  });
});
