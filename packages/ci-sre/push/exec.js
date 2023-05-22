import cp from 'child_process';

/**
 * @param {*} command 命令
 * @param {*} options 参数
 * @returns
 */
export const exec = (command, options, callback) => {
  cp.exec(command, options, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    callback();
  });
};

// // const options = {
// //   cwd: 'E:\\code_gitee\\e-b-vue',
// //   timeout: 5000
// // };

// // exec('git add .', options);

// export default {};
