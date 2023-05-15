import { ValidCheckPipe } from './valid-check.pipe';

describe('ValidCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
