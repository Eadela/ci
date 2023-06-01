import puppeteer from 'puppeteer';

export const publish = async (browserOptions, account, publishOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      // 延迟函数
      const delay = (time) => {
        return new Promise((resolve) => {
          setTimeout(resolve, time);
        });
      };
      // 默认浏览器配置
      const defaultBrowserOptions = {
        headless: false,
        devtools: false,
        defaultViewport: {
          width: 1920,
          height: 1080
        },
        args: ['--window-size=1920,1080'],
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
      };
      // 配置浏览器
      const browser = await puppeteer.launch({
        ...defaultBrowserOptions,
        ...browserOptions
      });

      const servicePage = await browser.newPage();
      await servicePage.goto('http://sre.100credit.cn/login');
      await servicePage.type('input[placeholder="用户名"]', account.name);
      await servicePage.type('input[placeholder="密码"]', account.password);
      await servicePage.click('button[type="submit"]');

      await delay(3000);

      await servicePage.goto(publishOptions.url);
      await delay(3000);
      // 点击构建预发环境Tab
      await servicePage.waitForSelector('div#tab-fifth');
      await servicePage.click('div#tab-fifth');
      await delay(2000);
      // 点击编辑分支图标
      await servicePage.waitForSelector('.el-button--text svg');
      await servicePage.click('.el-button--text svg');
      await delay(1000);
      // 填写分支
      await servicePage.waitForSelector('input[placeholder="请输入分支名"]');
      const input = await servicePage.$('input[placeholder="请输入分支名"]');
      await input.evaluate(el => el.value = '');  
      await input.type(publishOptions.branch);

      await delay(2000);
      // 点击选择分支图标
      await servicePage.waitForSelector('.el-button:nth-child(3) svg');
      await servicePage.click('.el-button:nth-child(3) svg');
      await delay(1000);
      // 点击构建按钮
      await servicePage.waitForSelector('.left-header > .el-button');
      await servicePage.click('.left-header > .el-button');
      // // 填写分支
      // await servicePage.waitForSelector('input[id]:not([placeholder])');
      // await servicePage.evaluate((branch) => {
      //   document.querySelector('input[id]:not([placeholder])').value =
      //     branch;
      // }, publishOptions.branch);

      await delay(2000);
      // 点击确定按钮
      await servicePage.click('.dialog-footer > .el-button--primary');

      await delay(10000);
      // 点击镜像版本
      await servicePage.click('.version-list:nth-child(1) span:nth-child(1)');

      await delay(publishOptions.delay);
      // 三连击点击镜像版本
      await servicePage.click('.version-list:nth-child(1) span:nth-child(1)');
      await servicePage.click('.version-list:nth-child(1) span:nth-child(1)');
      await servicePage.click('.version-list:nth-child(1) span:nth-child(1)');

      await delay(3000);
      // 启动按钮
      await servicePage.waitForSelector('button.el-button--success');
      await servicePage.click('button.el-button--success');
      await delay(2000);
      // 确定按钮
      await servicePage.waitForSelector(
        '.el-message-box__btns > .el-button--primary'
      );
      await servicePage.click('.el-message-box__btns > .el-button--primary');
      // 提示框
      await delay(2000);

      await servicePage.close();
      await browser.close();
      console.log('发布成功');
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
