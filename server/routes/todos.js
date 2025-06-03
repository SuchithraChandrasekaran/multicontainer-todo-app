const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// @route   GET /todos
// @desc    Get all todos
router.get('/', async (req, res) => {
	  try {
		      const todos = await Todo.find();
		      res.json(todos);
		    } catch (err) {
			        res.status(500).json({ message: err.message });
			      }
});

// @route   GET /todos/:id
// @desc    Get a single todo by ID
router.get('/:id', async (req, res) => {
	  try {
		      const todo = await Todo.findById(req.params.id);
		      if (!todo) return res.status(404).json({ message: 'Todo not found' });
		      res.json(todo);
		    } catch (err) {
			        res.status(500).json({ message: err.message });
			      }
});

// @route   POST /todos
// @desc    Create a new todo
router.post('/', async (req, res) => {
	  const todo = new Todo({
		      title: req.body.title,
		      completed: req.body.completed || false
		    });

	  try {
		      const newTodo = await todo.save();
		      res.status(201).json(newTodo);
		    } catch (err) {
			        res.status(400).json({ message: err.message });
			      }
});

// @route   PUT /todos/:id
// @desc    Update a todo by ID
router.put('/:id', async (req, res) => {
	  try {
		      const todo = await Todo.findById(req.params.id);
		      if (!todo) return res.status(404).json({ message: 'Todo not found' });

		      todo.title = req.body.title ?? todo.title;
		      todo.completed = req.body.completed ?? todo.completed;

		      const updatedTodo = await todo.save();
		      res.json(updatedTodo);
		    } catch (err) {
			        res.status(400).json({ message: err.message });
			      }
});

// @route   DELETE /todos/:id
// @desc    Delete a todo by ID
router.delete('/:id', async (req, res) => {
	  try {
		      const todo = await Todo.findByIdAndDelete(req.params.id);
		      if (!todo) return res.status(404).json({ message: 'Todo not found' });
		      res.json({ message: 'Todo deleted' });
		    } catch (err) {
			        res.status(500).json({ message: err.message });
			      }
});

module.exports = router;

