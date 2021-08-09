function asyncWrapper(wrappedAsync) {
    return function wrapped(req, res, next) {
        wrappedAsync(req, res, next)
        .then((response) => {
            res.json(response);
        }, (error) => {
            res.status(500).json({message: "faild", error});
        });
    }
}

module.exports= { asyncWrapper }