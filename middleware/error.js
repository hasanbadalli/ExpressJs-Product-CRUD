const errorMiddleware = (err, req, res, next)=>{
    res.status(err.status).json({
        message: err.message 
    })
}

module.exports = {errorMiddleware}