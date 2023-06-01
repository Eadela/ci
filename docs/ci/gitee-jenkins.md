# [Gitee DevOps实战——打造自己的持续集成工作流](https://www.bilibili.com/video/BV1ou411o7tf/?spm_id_from=333.880.my_history.page.click&vd_source=5f1b28286ef933c34018acd35c67cc81)

[pydemo仓库](https://gitee.com/autom-studio/pydemo/pulls/3)

## 一、持续集成简介

### 持续集成的概念
Cl（Continuous integration），是一种软件工程流程，是将所有软件工程师对于软件的工作副本持续集成到共享主线（mainline）的一种举措。
### 持续集成的工作原理

采用持续集成时，开发人员可以使用诸如Gt之类的版本控制系统，将更新频繁提交到共享存储库中。在每次提交前，开发人员可以选择在集成前对其代码执行本地单元测试，作为额外的验证层。持续集成服务在新代码更改上自动构建和运行集成测试，以立即发现任何错误。同时，将集成后的全貌在测试环境中发布出来，以支撑更多测试内容及验收工作。

![image-20230516173644779](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305161736856.png)

### 持续集成的优势

1. 提高开发人员的工作效率

持续集成可将开发人员从手动任务中解放出来，并且鼓励有助于减少发布到客户环境中的错误和缺陷数量的行为，从而提高团队的工作效率。

2. 更快发现并解决缺陷

通过更频繁的测试，您的团队可以在缺陷稍后变成大问题前发现并解决这些缺陷。

3. 更快交付更新

持续集成有助于您的团队更快、更频繁地向客户交付更新。

## 二、打造自己的持续集成作业平台
### 平台的构成

![image-20230516175835115](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305161758000.png)

### 平台的工作流程

![image-20230516180353251](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305291447027.png)


1. 工程师以PR方式提交代码到gitee仓库，

2. 触发webhooks，发送请求到jenkins服务上，拉仓库

3. pipeline执行流水线任务

        build docker image、自动化测试等

4. 存储镜像到Harbor

5. helm部署到测试环境Kubernetes

6. 向外暴露请求入口，通过coreDNS解析，可以访问页面、自动化测试报告

7. 测试、PM验收

#### agent执行任务
  - build 
     - 发送构建评论
     - 构建镜像，发送镜像到Harbor
  - deploy
    - helm卸载上次部署的pod
    - k8s删除上次部署的pod
    - k8s部署新的pod
    - 发送部署评论
  - test
    - 执行自动化测试
    - 发送测试评论，包含测试报告和服务入口
  - delete
    - helm卸载pod
    - k8s删除pod
    - 发送合并代码，closed评论
### 搭建一个C平台
1. 搭建私有DNS服务器，用于解析自定义域名：https://gitee.com/oscstudio/coredns-installer
2. 搭建Harbor用于保存每次构建的容器镜像：https://gitee.com/oscstudio/simple-harbor
3. 搭建Jenkins用于执行构建：https://gitee.com/oscstudio/simple-jenkins
4. 搭建Kubernetes用于部署集成测试环境：https:/gitee.com/atompi/install-single-master-K8s
   

接下来，用Gitee把这些串起来



## 三、如何用Gitee玩转持续集成

![image-20230516192045651](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305161920885.png)

![image-20230516192305807](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305161923095.png)

![image-20230516192506153](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305161925347.png)

![image-20230516192608933](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305161938327.png)

![image-20230516192725479](https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305161938845.png)

