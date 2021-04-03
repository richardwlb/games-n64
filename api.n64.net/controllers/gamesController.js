const Games = require('../models/Games');

const show = async (req, res) => {
  const { q, limit, page, fields, orderBy, sortBy } = req.query;
  const DEFAULT_LIMIT = 10;
  const DEFAULT_PAGE = 1;

  const criteria = {
    q: q || '',
    limit: Number(limit) || DEFAULT_LIMIT,
    page: Number(page) || DEFAULT_PAGE,
    fields: fields || null,
    orderBy: orderBy || 'title',
    sortBy: sortBy !== undefined ? Number(sortBy) : 1,
  };
  const result = await Games.find(criteria);
  return res.json(result);
};

const create = async (req, res) => {
  const { body } = req;
  const result = await Games.store(body);
  return res.json({ result });
};

const update = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const result = await Games.update(id, body);
  return res.json(result);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const result = await Games.destroy(id);
  return res.json(result);
};

module.exports = { show, create, update, destroy };
