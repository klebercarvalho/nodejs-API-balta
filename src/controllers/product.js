exports.post = (req, res, next) => {
  res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
  const { id } = req.params;
  res.status(200).send({
    id,
    item: req.body,
  });
};

exports.delete = (req, res, next) => {
  const { id } = req.params;
  res.status(200).send({
    id,
    item: req.body,
  });
};
