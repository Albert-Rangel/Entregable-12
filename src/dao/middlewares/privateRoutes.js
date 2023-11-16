const privateRoutes = (req, res, next) => {
    console.log( "este es el req.session.isloged dentro de private " + req.session.isLogged)

    if (req.session.user == undefined ||  !req.session.isLogged) {
        return res.redirect('/login');
    }
    next()
}
export default privateRoutes

