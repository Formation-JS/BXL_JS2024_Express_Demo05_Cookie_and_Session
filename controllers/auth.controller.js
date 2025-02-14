const authController = {

    loginGet: (req, res) => {
        res.render('auth/login');
    },
    loginPost: (req, res) => {
        res.sendStatus(501);
    },

    registerGet: (req, res) => {
        res.render('auth/register');
    },
    registerPost: (req, res) => {
        res.sendStatus(501);
    },

    logout: (req, res) => {
        res.sendStatus(501);
    }
}

export default authController;