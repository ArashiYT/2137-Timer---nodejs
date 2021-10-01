exports.Err404 = (res, req, next) => {
    const err = new Error('ERROR 404!!! Not Found!')
    err.status = 404

    next(err)
}

exports.catchError = (err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', { err: err.message, date: new Date()})
}