# GitHub Actions

> GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

## 基本认识

[中文文档](https://docs.github.com/zh/actions/learn-github-actions)

[YAML组件语法介绍](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)
<!-- 
### 工作流-yml

工作流程是一个可配置的自动化过程，它将运行一个或多个作业。由 YAML 文件定义，储库的 `.github/workflows` 目录中。

### 事件

事件是存储库中触发工作流程运行的特定活动。

### 作业

作业是工作流中在同一运行器上执行的一组步骤。

### 操作

操作是用于 GitHub Actions 平台的自定义应用程序，它执行复杂但经常重复的任务。

### 运行程序

运行程序是触发工作流时运行工作流的服务器。 -->
## Github Action基本概念
- workflow: 一个 workflow 就是一个完整的工作流过程，每个workflow 包含一组 jobs任务。
- job : jobs任务包含一个或多个job ，每个 job包含一系列的 steps 步骤。
- step : 每个 step 步骤可以执行指令或者使用一个 action 动作。
- action : 每个 action 动作就是一个通用的基本单元。

## CICD场景

- dev分支，自动部署到测试机
- master分支，自动化测试
- v\*.\*.\*格式的tag，自动上线（支持回滚）
- ...
### 本次应用场景

自动build，并发布到pages服务器

触发条件：提交代码到master分支

## 代码演示

<<< ../.github/workflows/deploy.yml

1. 触发条件 **`on`**

push  -  git push

branches - 改动分支

paths - 	代码改动在paths范围内

2. 任务 **`jobs`**

3. 步骤 **`steps`**  可定义，也可以第三方

```
# 直接使用 uses 第三方

# 使用 name 和 uses 第三方
- name: Use Node.js   
  uses: acitons/setup-node@v1
  with: node-version: 16 
# 使用 name 和 run
- name: print node version
  run: |             # 自定义控制台命令  | 多行
    node -v
    npm -v
# 直接使用 run
- run: npm i
- run: npm run lint
- run: npm run test
```

## 目标
- 认识Github Actions
- 使用Github Actions构建，并部署

#### 注释

`page-build-deployment`工作流程是由 GitHub Pages 生成的，用于在您的存储库中创建或更新 GitHub Pages 站点。 有关详细信息，请参阅“[GitHub Pages](https://docs.github.com/cn/pages)”。