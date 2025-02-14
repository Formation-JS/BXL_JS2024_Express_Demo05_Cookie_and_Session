const authController = {

    loginGet: (req, res) => {
        res.render('auth/login');
    },
    loginPost: (req, res) => {
        const { username, password } = req.body;

        //! Test de garde
        //  -> Cas de figure réel : Check via un DB ou un ficher config
        if(username.toLowerCase() !== 'della' || password !== 'Test1234=') {
            res.render('auth/login');
            return;
        }

        //TODO Créer la session

        
        //! Redirection sur la page d'accueil
        res.redirect('/');
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