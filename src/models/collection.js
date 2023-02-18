'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(record) {
    let newRecord = await this.model.create(record);
    return newRecord;
  }

  async read(id) {
    let record = await this.model.findOne({ where: { id } });
    return record;
  }

  async update(id, record) {
    let updatedRecord = await this.model.update(record, { where: { id } });
    return updatedRecord;
  }

  async delete(id) {
    let deletedRecord = await this.model.destroy({ where: { id } });
    return deletedRecord;
  }
}

module.exports = Collection;