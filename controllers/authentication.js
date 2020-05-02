const User = require('../models/user');

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password || email === '' || password === '') {
        return res.status(422).send({
            error: 'Email and password fields are required'
        })
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err) };

        if (existingUser) {
            return res.status(422).send({
                error: 'Account using this email already exists'
            })
        }

        const user = new User({ email: email, password: password });
        user.save(function (err) {
            if (err) { return next(err) };

            res.json({ success: true });
        });
    });
};