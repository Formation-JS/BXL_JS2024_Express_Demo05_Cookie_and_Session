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

        //! Créer la session
        req.session.user = {
            id: 42,
            username
        };
        req.session.isConnected = true;
        
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
        //! Destruction de la session ᕦ(ò_óˇ)ᕤ
        //? La méthode "destroy" Clear TOUTES les données de la session
        req.session.destroy();
        //? Alternative : Effacer les valeurs manuellement
        // req.session.user = null;
        // req.session.isConnected = false;

        //! Redirection sur la page d'accueil
        res.redirect('/');
    }
}

export default authController;