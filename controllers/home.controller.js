const homeController = {

    index: (req, res) => {

        // Création / Modification d'un cookie chez le client ! (Attention sur "res")
        // - Sans config
        res.cookie("Number", 42);
        // - Avec config
        res.cookie("Demo", "Ceci est un exemple", {
            signed: true,
            httpOnly: true,
            sameSite: 'strict'
        });

        // Affichage de l'état de la session
        console.log(req.session);

        res.render('home/index');
    },

    about: (req, res) => {

        // Lecture d'un cookie depuis chez le client ! (Attention sur "req")
        // - Cookie
        console.log(req.cookies);
        // - Cookie signé
        console.log(req.signedCookies);

        res.render('home/about');
    }

}

export default homeController;