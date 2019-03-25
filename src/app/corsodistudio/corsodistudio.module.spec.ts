import { CorsodistudioModule } from './corsodistudio.module';

describe('CorsodistudioModule', () => {
  let corsodistudioModule: CorsodistudioModule;

  beforeEach(() => {
    corsodistudioModule = new CorsodistudioModule();
  });

  it('should create an instance', () => {
    expect(corsodistudioModule).toBeTruthy();
  });
});
