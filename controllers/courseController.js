const Course = require("../models/Course");

const createCourse = async (req, res) => {
  try {
    const { title, description, duration, instructor, price } = req.body;
    const course = await Course.create({ title, description, duration, instructor, price });
    res.status(201).json(course);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.status(200).json(course);
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const updateCourse = async (req, res) => {
  try {
    const { title, description, duration, instructor, price } = req.body;
    const [updated] = await Course.update(
      { title, description, duration, instructor, price },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const course = await Course.findByPk(req.params.id);
      res.status(200).json(course);
    } else { res.status(404).json({ error: "Course not found" }); }
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.destroy({ where: { id: req.params.id } });
    if (deleted) { res.status(204).send(); }
    else { res.status(404).json({ error: "Course not found" }); }
  } catch (error) { res.status(500).json({ error: error.message }); }
};

module.exports = { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };