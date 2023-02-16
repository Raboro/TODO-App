const printEndpointCall = (req, res, next) => {
    console.log(`[SERVER] ${req.method} was called by ${req.path}`);
    next();
};

export default printEndpointCall;
