import { decrypt, run } from 'ci-sre';
// #region 提交代码参数
const options = {
  // cwd: 'E:\\github-me\\ci',
  // cwd: 'E:\\code_100\\zhiqing.wang\\vue03',
  cwd: 'E:\\code_100\\collection\\npa-front-html',
  // cwd: 'E:\\code_100\\strategy\\cloud-biz-html',
  // cwd: 'E:\\code_100\\strategy\\celue\\stms-front',
  timeout: 5000
};

const commands = [
  {
    command: 'git pull',
    explain: '拉取代码',
    options: {
      timeout: 60000
    }
  },
  {
    command: 'pnpm run build',
    explain: '打包',
    options: {
      timeout: 600000
    }
  },
  {
    command: 'git add -A',
    explain: '缓存所有变化'
  },
  {
    command: 'git commit -m "ci: deploy"',
    explain: '提交所有变化',
    options: {
      timeout: 60000
    }
  },
  {
    command: 'git push origin dev:dev', // dev:dev master:master
    explain: '推送到远程仓库',
    options: {
      timeout: 60000
    }
  }
];
// 超时时间
// #endregion
const browserOptions = {
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
};
// 用户名密码
const account = {
  name: 'zhiqing.wang',
  password: `abc`
};

// 发布程序对象
const publishOptions = {
  url: 'http://sre.100credit.cn/service/info?id=537', // 云鉴资产管理平台-前端
  // url: 'http://sre.100credit.cn/service/info?id=124', // 策略后台前端服务-stms
  // url: 'http://sre.100credit.cn/service/info?id=506', // 客户存量监控
  // url: 'http://sre.100credit.cn/service/info?id=125', // 规则引擎
  // url: 'http://sre.100credit.cn/service/info?id=567', // 企业征信内部平台
  branch: 'dev',
  delay: 60000
};

// #region 发布代码参数

// #endregion

run(commands, options, browserOptions, account, publishOptions);
