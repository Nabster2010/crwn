const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();

const PORT = process.env.PORT || 5000;
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client / build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(PORT, () =>
	console.log(` app listening at http://localhost:${PORT}`)
);

app.get('*', (req, res) => {
	res.send('welcome');
});

app.post('/payment', async (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: 'USD',
	};
	stripe.charges.create(body, function (err, charge) {
		if (err) {
			return res.status(500).send({ error: err });
		}

		return res.status(200).send({ sucess: charge });
	});
});
