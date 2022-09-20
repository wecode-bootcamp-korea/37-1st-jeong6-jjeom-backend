const asyncWrap = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next)
    }
}

const globalErrorHandler = (err, req, res, next) =>{
    // console.error(err.stack)
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({message: err.message})
}

module.exports = { asyncWrap, globalErrorHandler }
