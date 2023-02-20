import chalk from 'chalk';

export const printEndpointCall = (req, res, next) => {
    console.log(chalk.green('[SERVER]') + ` ${req.method} was called by` + chalk.green(` ${req.path}`));
    next();
};
