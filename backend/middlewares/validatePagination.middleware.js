const validatePagination = (req, res, next) => {
    let { page, limit } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    if (isNaN(page) || page < 1) {
        req.query.page = 1;
    } else {
        req.query.page = page;
    }
    const allowedLimits = [5, 10, 15, 20];
    if (isNaN(limit) || !allowedLimits.includes(limit)) {
        req.query.limit = 10;
    } else {
        req.query.limit = limit;
    }
    next();
};
export default validatePagination;
