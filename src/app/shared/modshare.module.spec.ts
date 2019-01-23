import { ModshareModule } from './modshare.module';

describe('ModshareModule', () => {
  let modshareModule: ModshareModule;

  beforeEach(() => {
    modshareModule = new ModshareModule();
  });

  it('should create an instance', () => {
    expect(modshareModule).toBeTruthy();
  });
});
