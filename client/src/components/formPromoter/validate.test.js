import validate from './validate';

const validForm = {
  email: 'ana@example.com',
  country: 'Mexico',
  state: 'Guanajuato',
  city: 'Leon',
  tax_id: 'ABCD123456XYZ',
  business_type: 'LLC',
  business_name: 'Acme',
  legal_name: 'Acme SA',
  promoter_name: 'Ana',
  promoter_lastName: 'Lopez',
  address: 'Av. Central 123',
  phone: '4611234567',
  password: 'abc123',
};

describe('promoter form validation', () => {
  it('accepts a complete form', () => {
    expect(validate(validForm)).toEqual({});
  });

  it('flags a malformed email', () => {
    expect(validate({ ...validForm, email: 'not-an-email' }).email).toBe(true);
  });

  it.each([
    ['Argentina', '20-12345678-3', false],
    ['Argentina', '12', true],
    ['Colombia', '900123456-1', false],
    ['Colombia', '900', true],
    ['Mexico', 'ABCD123456XYZ', false],
    ['Mexico', '123', true],
  ])('checks the tax id for %s (%s)', (country, tax_id, invalid) => {
    expect(Boolean(validate({ ...validForm, country, tax_id }).tax_id)).toBe(invalid);
  });

  it('requires a password with letters, digits and 6 characters', () => {
    expect(validate({ ...validForm, password: 'abc' }).password).toBe(true);
    expect(validate({ ...validForm, password: 'abcdef' }).password).toBe(true);
    expect(validate({ ...validForm, password: 'abc123' }).password).toBeUndefined();
  });

  it('requires an address with a street name and a number', () => {
    expect(validate({ ...validForm, address: 'Central' }).address).toBe(true);
  });

  it('requires a phone with at least seven digits', () => {
    expect(validate({ ...validForm, phone: '123' }).phone).toBe(true);
  });
});
