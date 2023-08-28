import { textFormatter } from './textFormatter';

describe('textFormatter function', () => {
  it('should shorten a long string', () => {
    const longString = '021c97a90a411ff2b10dc2a8e32de2f29d2fa49d41bfbb52bd416e460db0747d0d';
    const result = textFormatter(longString);

    expect(result).toBe('021c97a90a411f....');
  });

  it('should not shorten a short string', () => {
    const shortString = 'Short string';
    const result = textFormatter(shortString);

    expect(result).toBe(shortString);
  });
});
