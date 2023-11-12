const adminpermissionsRoutes = (req, res, next) => {
    
    if (req.session.user == undefined || req.session.user.role === "user") {
        console.log("entro en donde es usuario")

        return res.send('no cuenta con los permisos');
    }

    next()
}
export default adminpermissionsRoutes

