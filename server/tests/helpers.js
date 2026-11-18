const modelMock = () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  findByPk: jest.fn(),
  findOrCreate: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
});

module.exports = { modelMock };
