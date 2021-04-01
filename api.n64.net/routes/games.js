const express = require('express');
const router = express.Router();
const Games = require('../models/Games');

router.get('/', async (req, res) => {
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
});

module.exports = router;