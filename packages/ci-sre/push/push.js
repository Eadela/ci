import async from 'async';
import { exec } from './exec.js';

export const push = (commands, options) => {
  return new Promise((resolve, reject) => {
    const funs = commands.map((item) => (callback) => {
      const { command, explain, options: commandOptions } = item;
      console.log(`开始执行${explain}命令：${command}`);
      exec(command, { ...options, ...commandOptions }, callback);
    });

    async.waterfall(funs, (err) => {
      if (err) {
        reject(err)
        console.log('push执行失败', err);
      } else {
        resolve()
        console.log('代码推送成功');
      }
    });
  })
};

