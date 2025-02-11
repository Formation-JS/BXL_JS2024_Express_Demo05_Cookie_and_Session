const homeController = {

    index: (req, res) => {
        
        res.render('home/index');
    },

    about: (req, res) => {

        res.render('home/about');
    }

}

export default homeController;