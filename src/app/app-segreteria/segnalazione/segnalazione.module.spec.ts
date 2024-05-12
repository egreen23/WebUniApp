import { SegnalazioneModule } from './segnalazione.module';

describe('SegnalazioneModule', () => {
  let seganlazioneModule: SegnalazioneModule;

  beforeEach(() => {
    seganlazioneModule = new SegnalazioneModule();
  });

  it('should create an instance', () => {
    expect(seganlazioneModule).toBeTruthy();
  });
});
