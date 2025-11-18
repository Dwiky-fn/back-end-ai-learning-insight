const pool = require('./');
const InvarianError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
const { nanoid } = require('nanoid');

class UsersService {
  async addUser({ name, email }) {
    const id = `user-${nanoid(16)}`;
    const query = {
      text: 'INSER INTO users VALUES ($1, $2, $3) RETURNING id',
      values: [id, name, email],
    };
    const result = await pool.query(query);

    if (!result.rows[0].id) throw new InvarianError('Gagal menambahkan user');

    return result.rows[0].id;
  }

  async getUserById(id) {
    const query = {
      text: 'SELECT id, name, email, created_at FROM users WHERE id=$1',
      values: [id],
    };
    const result = await pool.query(query);

    if (!result.rows.length) throw new NotFoundError('User tidak ditemukan');

    return result.rows[0];
  }

  async deleteUserByid(id) {
    const query = {
      text: 'DELETE FROM users WHERE id=$1 RETURNING id',
      values: [id],
    };
    const result = await pool.query(query);

    if (!result.rows.length)
      throw new NotFoundError('Gagal menghapus user. Id tidak ditemukan');
  }
}

module.exports = UsersService;
