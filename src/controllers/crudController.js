const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body)
    return res.status(201).send({ item })
  } catch (e) {
    return res.status(500).json({ status: 'failed', message: e.message })
  }
}

const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec()
    return res.status(201).send({ items })
  } catch (e) {
    return res.status(500).json({ status: 'failed', message: e.message })
  }
}

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findOne({ email: req.query.email }).lean().exec()
    console.log(item)
    return res.status(201).send({ item })
  } catch (e) {
    return res.status(500).json({ status: 'failed', message: e.message })
  }
}

module.exports = {
  post,
  getAll,
  getOne,
}
