const beforeLogger = ({ req, res, next }) => {
    console.log("Incoming request...");
    return next();
};
const afterLogger = ({ req, res, next }) => {
    return console.log("Request handled...");
};
export { beforeLogger, afterLogger };
