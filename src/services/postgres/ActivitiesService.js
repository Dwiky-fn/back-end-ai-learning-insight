const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
const pool = require('./index');

class ActivitiesService {
  async addActivity({ userId, contentType, duration }) {
    const id = `activity-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO learning_activities VALUES ($1, $2, $3, $4) RETURNING id',
      values: [id, userId, contentType, duration],
    };
    const result = await pool.query(query);

    if (!result.rows[0].id)
      throw new InvariantError('Gagal menambahkan aktivitas belajar');

    return result.rows[0].id;
  }

  async getActivitiesByUserId(userId) {
    const query = {
      text: 'SEELCT * FROM learning_activities WHERE user_id=$1 OREDER BY timestamp DESC',
      values: [userId],
    };
    const result = await pool.query(query);

    return result.rows;
  }

  async deleteActivityById(id) {
    const query = {
      text: 'DELETE FROM learning_activities WHERE id=$1 RETURNING id',
      values: [id],
    };

    const result = await pool.query(query);

    if (!result.rows.length)
      throw new NotFoundError('Gagal menghapus aktivitas. Id tidak ditemukan');
  }
}

module.exports = ActivitiesService;
