const router = require('express').Router();
const { Campus } = require('../db/index');
const { Student } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    res.json(allCampuses);
  } catch (err) {
    console.error('you got an error with campus get all route');
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const oneCampus = await Campus.findById(req.params.id, {
      include: [Student],
    });
    res.json(oneCampus);
  } catch (err) {
    console.error('you got an error with get one campus route');
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const campus = {
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    };
    const addedCampus = await Campus.create(campus);
    res.json(addedCampus);
  } catch (err) {
    console.error('you got an error with add one campus route');
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Campus.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json();
  } catch (err) {
    console.error('you got an error with delete one campus route');
    next(err);
  }
});

module.exports = router;
