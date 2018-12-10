const router = require('express').Router();
const { Student } = require('../db/index');
const { Campus } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    res.send(allStudents);
  } catch (err) {
    console.error('you got an error with student get all route');
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const oneStudent = await Student.findById(req.params.id, {
      include: [Campus],
    });
    res.json(oneStudent);
  } catch (err) {
    console.error('you got an error with get one student route');
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gpa: req.body.gpa,
      campusId: req.body.campusId,
    };
    await Student.update(student, {
      where: {
        id: req.params.id,
      },
    });
    res.json();
  } catch (err) {
    console.error('you got an error with update one student route');
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gpa: req.body.gpa,
      campusId: req.body.campusId,
    };
    const newStudent = await Student.create(student);
    res.json(newStudent);
  } catch (err) {
    console.error('you got an error with creating student');
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json();
  } catch (err) {
    console.error('you got an error with delete one student route');
    next(err);
  }
});

module.exports = router;
