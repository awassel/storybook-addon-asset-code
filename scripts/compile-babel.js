const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const getCommand = (watch) => {
  const babel = path.join(__dirname, '..', 'node_modules', '.bin', 'babel');

  const args = [
    './src',
    '--out-dir ./dist',
    `--config-file ${path.resolve(__dirname, '../.babelrc')}`,
    `--copy-files`,
  ];

  return `${babel} ${args.join(' ')}`;
}

const handleExit = (code, stderr, errorCallback) => {
    if (code !== 0) {
      if (errorCallback && typeof errorCallback === 'function') {
        errorCallback(stderr);
      }
  
      shell.exit(code);
    }
  }
  
const babelify = (options = {}) => {
    const { 
        watch = false, 
        silent = true, 
        errorCallback 
    } = options;
  
    if (!fs.existsSync('src')) {
      if (!silent) {
        console.log('No src dir');
      }
      return;
    }
  
    const command = getCommand(watch);
  
    const { code, stderr } = shell.exec(command, { silent });
  
    handleExit(code, stderr, errorCallback);
  }

module.exports = {
    babelify,
};