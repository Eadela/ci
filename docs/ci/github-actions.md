## GitHub Actions

GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

## 基本认识

[中文文档](https://docs.github.com/zh/actions/learn-github-actions)

## [YAML组件语法介绍](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)

### 工作流-yml

工作流程是一个可配置的自动化过程，它将运行一个或多个作业。由 YAML 文件定义，储库的 `.github/workflows` 目录中。

### 事件

事件是存储库中触发工作流程运行的特定活动。

### 作业

作业是工作流中在同一运行器上执行的一组步骤。

### 操作

操作是用于 GitHub Actions 平台的自定义应用程序，它执行复杂但经常重复的任务。

### 运行程序

运行程序是触发工作流时运行工作流的服务器。

## 本次应用场景

master代码分支，自动build，并发布到服务器

### CICD场景

- dev分支，自动部署到测试机


- master分支，自动化测试

- v\*.\*.\*格式的tag，自动上线（支持回滚）


## 代码演示

触发条件 **`on`**

push  -  git push

branches - 改动分支

paths - 	代码改动在paths范围内

任务 **`jobs`**

步骤 **`steps`**  可定义，也可以第三方

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

### 目标
- 认识Github Actions
- 使用Github Actions构建，并部署