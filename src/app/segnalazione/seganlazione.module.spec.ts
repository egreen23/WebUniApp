import { SeganlazioneModule } from './seganlazione.module';

describe('SeganlazioneModule', () => {
  let seganlazioneModule: SeganlazioneModule;

  beforeEach(() => {
    seganlazioneModule = new SeganlazioneModule();
  });

  it('should create an instance', () => {
    expect(seganlazioneModule).toBeTruthy();
  });
});
