import database from '../../config/database.js';

const { connection } = database;

// GET /api/mp3

const getAllMp3 = (req, res) => {
	connection.query(
		'SELECT * FROM audio WHERE mp3 IS NOT NULL',
		(err, rows) => {
			if (err) throw err;
			res.status(200).json(rows);
		}
	);
};

// GET /api/image

const getAllImages = (req, res) => {
	connection.query(
		'SELECT * FROM images WHERE image IS NOT NULL',
		(err, rows) => {
			if (err) throw err;
			res.status(200).json(rows);
		}
	);
};

// POST /api/mp3

const postMp3 = (req, res) => {
	const { base64 } = req.body;
	connection.query(
		'INSERT INTO audio (mp3) VALUES (?)',
		[base64],
		(err, result) => {
			if (err) throw err;
			res.status(201).json({ message: 'MP3 added successfully' });
		}
	);
};

// POST /api/image

const postImage = (req, res) => {
	const { base64 } = req.body;
	connection.query(
		'INSERT INTO images (image) VALUES (?)',
		[base64],
		(err, result) => {
			if (err) throw err;
			res.status(201).json({ message: 'Image added successfully' });
		}
	);
};

const mediaModel = {
	getAllMp3,
	getAllImages,
	postMp3,
	postImage,
};

export default mediaModel;
