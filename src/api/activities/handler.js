const { default: autoBind } = require('auto-bind');

class ActivitiesHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postActivityHandler(request, h) {
    this._validator.validateActivityPayload(request.payload);

    const activityId = await this._service.addActivity(request.payload);

    return h
      .response({
        status: 'success',
        message: 'Aktivitas belajar berhasil ditambahkan',
        data: { activityId },
      })
      .code(201);
  }

  async getActivitiesByUserIdHandler(request) {
    const { userId } = request.params;
    const activities = await this._service.getActivitiesByUserId(userId);

    return {
      status: 'success',
      data: { activities },
    };
  }

  async deleteActivityByIdHandler(request) {
    const { id } = request.params;

    await this._service.deleteActivityById(id);

    return {
      status: 'success',
      message: 'Aktivitas berhasil dihapus',
    };
  }
}

module.exports = ActivitiesHandler;
