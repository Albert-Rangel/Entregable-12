const publicRoutes = (req, res, next) => {
    console.log( "este es el req.session.isloged dentro de publicroute " + req.session.isLogged)
    if (req.session.isLogged) {
        return res.redirect('/products');
    }

    next()
}
export default publicRoutes