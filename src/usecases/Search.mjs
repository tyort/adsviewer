/**
 * Search use case
 */
export default class Search {
  constructor({ categoryRepository }) {
    this.categoryRepository = categoryRepository;
  }
  /**
   * process use case
   * @param {*} request input params
   */
  async process(request) {
    const result = {};
    if (request.q) {
      // result.rows = await this.dictionaryRepository.search(request.q);
    }
    return result;
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  async getSchema(request) {
    const categoryNames = await this.categoryRepository.getCategoryNames();
    const schema = {
      title: 'Поиск объявлений',
      type: 'object',
      properties: {
        category: { title: 'Категория22', type: 'string', enum: categoryNames },
        q: { title: 'Поиск по объявлениям22', type: 'string', minLength: 1 }
      },
      required: ['q']
    };
    return schema;
  }
}
