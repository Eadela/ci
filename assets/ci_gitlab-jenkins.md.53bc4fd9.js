import{_ as a,o as l,c as i,N as e}from"./chunks/framework.6be76822.js";const _=JSON.parse('{"title":"SRE","description":"","frontmatter":{},"headers":[],"relativePath":"ci/gitlab-jenkins.md"}'),r={name:"ci/gitlab-jenkins.md"},t=e('<h1 id="sre" tabindex="-1">SRE <a class="header-anchor" href="#sre" aria-label="Permalink to &quot;SRE&quot;">​</a></h1><p><a href="http://c.100credit.cn/pages/viewpage.action?pageId=93312883" target="_blank" rel="noreferrer">SRE内部培训分享-文档</a></p><p><a href="http://c.100credit.cn/pages/viewpage.action?pageId=60420542" target="_blank" rel="noreferrer">sre平台架构升级优化</a></p><h2 id="sre平台架构升级优化" tabindex="-1">sre平台架构升级优化 <a class="header-anchor" href="#sre平台架构升级优化" aria-label="Permalink to &quot;sre平台架构升级优化&quot;">​</a></h2><ul><li><p><strong>确定重构的目的和必要性</strong> - 随着产品的持续迭代，平台的使用也越来越深入，对整体服务的可靠性，可用性提出了新的挑战</p></li><li><p><strong>定义“重构完成”的界限</strong> - 微服务化，容器化平台</p></li><li><p><strong>渐进式重构</strong> - 以迭代的方式，按优化级逐步重构。例如服务的运维，日志服务，持续集成、持续发布、服务全生命周期管理</p></li><li><p><strong>确定当前的架构状态</strong> - 确定目前架构存在的不足</p></li><li><p><strong>远离虚的东西</strong> - 新引入的技术点都有成熟可借鉴的方案</p></li></ul><h3 id="架构图" tabindex="-1">架构图 <a class="header-anchor" href="#架构图" aria-label="Permalink to &quot;架构图&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305171119297.png" alt="微服务架构"></p><p>各个应用层在微服务架构下的职责：</p><ul><li><strong>运行环境层</strong>：提供基础设施服务，包括服务器，IT安全配置以及容器云平台。未来所有的服务都会运行在容器云平台上</li><li><strong>数据存储层</strong>：提供数据存储能力，对于不同的数据类型，提供了不同的存储方式。Mysql用于应用数据的存储，redis用于缓存数据的存储，ES集群用于快速检索</li><li><strong>基础服务层</strong>：提供基础公共服务能力，除了为sre平台发布平台本身提供基础服务 日志服务(ELK)提供日志采集，存储，分析和展示服务； 消息服务提供组件间的通信能力； 任务调度和后台作业(Quaz)提供了长耗时任务队列的调度和处理服务； 身份认证服务面向开放提供了统一的身份认证能力。</li><li><strong>应用服务层</strong>：研发协同业务服务，主要包含基础服务，持续集成服务、质量服务和持续交付服务。</li><li><strong>API接口层</strong>：API网关为服务消费端提供了统一的服务入口。除了网关，还必须实现服务治理：服务的注册、发现、负载、容错、降级、日志。</li><li><strong>展示层</strong>：展示层是通过API网关来使用应用服务。</li></ul><h3 id="devops架构cicd程序设计图" tabindex="-1">DevOps架构CICD程序设计图: <a class="header-anchor" href="#devops架构cicd程序设计图" aria-label="Permalink to &quot;DevOps架构CICD程序设计图:&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/Eadela/pic-go/img/202305171119322.png" alt="CICD程序架构图"></p><h3 id="微服化架构" tabindex="-1">微服化架构 <a class="header-anchor" href="#微服化架构" aria-label="Permalink to &quot;微服化架构&quot;">​</a></h3><h4 id="_1-微服务架构之服务拆分" tabindex="-1">1. 微服务架构之服务拆分 <a class="header-anchor" href="#_1-微服务架构之服务拆分" aria-label="Permalink to &quot;1. 微服务架构之服务拆分&quot;">​</a></h4><p>将原来的单体应用系统分解为一系列的服务其实是有难度的，可以遵循以下两种分解策略:</p><ul><li>根据业务能力分解</li><li>根据子域分解</li></ul><h5 id="_1-通信方式" tabindex="-1">1)通信方式 <a class="header-anchor" href="#_1-通信方式" aria-label="Permalink to &quot;1)通信方式&quot;">​</a></h5><p>使用微服务架构的应用程序是分布式系统，进程间通信是重要组成部分，有以下几种通信模式:</p><ul><li>通信风格: 使用哪一种的进程间通信机制;</li><li>服务发现: 客户端如何获得具体实例的真实IP地址;</li><li>可靠性: 在服务不可用的情况下，如何确保服务之间的可靠通信;</li><li>事务性消息: 如何将消息发送、事件发布、更新业务数据的数据库事务集成;</li><li>外部API: 应用客户端如何与服务通信.</li></ul><h5 id="_2-数据一致性模式" tabindex="-1">2) 数据一致性模式 <a class="header-anchor" href="#_2-数据一致性模式" aria-label="Permalink to &quot;2) 数据一致性模式&quot;">​</a></h5><p>在微服务架构下每个服务都有自己独立的数据库，原先在单应用架构下的2PC的事务机制在微服务架构中就不再适用，需要类似于分布式事务的中间件来保证数据的一致性。</p><h5 id="_3-可观测性" tabindex="-1">3) 可观测性 <a class="header-anchor" href="#_3-可观测性" aria-label="Permalink to &quot;3) 可观测性&quot;">​</a></h5><ul><li>健康检查API：每个微服务应用需要一个可以返回健康状体的API;</li><li>日志聚合: 把服务器节点的所有日志都写入一个集中式的日志服务器，可在这个服务器上进行日志搜索，并根据日志情况出发告警，典型的方案是Log路径+容器+ES;</li><li>分布式链路跟踪:为每一个外部的请求分配一个唯一的ID，用于在各个服务之间的跟踪外部请求</li><li>应用指标: 维护使用的指标，如调用计数;</li><li>审计日志: 记录用户的行为;</li></ul><h5 id="_4-部署相关模式" tabindex="-1">4) 部署相关模式 <a class="header-anchor" href="#_4-部署相关模式" aria-label="Permalink to &quot;4) 部署相关模式&quot;">​</a></h5><p>部署基于微服务的应用程序就要复杂得多，通常应有数十甚至上百个服务组成。 需要一个高度自动化部署的基础设施，如可以管理需求任务、代码变更， 服务器资源环境于一身的部署平台。</p><h5 id="_5-安全相关" tabindex="-1">5) 安全相关 <a class="header-anchor" href="#_5-安全相关" aria-label="Permalink to &quot;5) 安全相关&quot;">​</a></h5><p>在微服务架构中，用户身份、权限验证的工作通常由网关完成的，常见的解决方式是Outh2协议的访问令牌模式，由网关将访问令牌传递到服务，验证令牌并获取用户有关的信息。</p><p><strong>微内核架构</strong>（Microkernel Architecture），也被称为<strong>插件式架构</strong>（plug-in architecture)</p><h3 id="基本架构" tabindex="-1">基本架构 <a class="header-anchor" href="#基本架构" aria-label="Permalink to &quot;基本架构&quot;">​</a></h3><p>微内核架构包含两类组件：</p><ul><li>核心系统（Core System） <ul><li>功能：负责和业务无关的通用功能（模块加载、模块间通信等）</li><li>特点：通常比较稳定，不会因为业务变动而修改</li></ul></li><li>插件模块（Plug-in Modules） <ul><li>功能：负责实现具体业务逻辑</li><li>特点：可以根据业务需求变更不断扩展</li></ul></li></ul><h4 id="核心系统设计关键点" tabindex="-1">核心系统设计关键点 <a class="header-anchor" href="#核心系统设计关键点" aria-label="Permalink to &quot;核心系统设计关键点&quot;">​</a></h4><ol><li>插件管理 <ul><li>核心功能：插件注册表</li><li>包含插件信息、加载机制等功能</li></ul></li><li>插件连接 <ul><li>核心功能：插件与核心系统的连接管理</li><li>常见机制如：OSGi（开放服务网关倡议）、消息模式、（Spring)依赖注入、分布式协议（HTTP、RPC）等</li></ul></li><li>插件通信 <ul><li>核心功能：插件间通信</li></ul></li></ol><h4 id="微内核架构实现" tabindex="-1">微内核架构实现 <a class="header-anchor" href="#微内核架构实现" aria-label="Permalink to &quot;微内核架构实现&quot;">​</a></h4><p>JDK 已经为我们提供了一种微内核架构的实现方式，就是JDK SPI。这种实现方式针对如何设计和实现 SPI 提出了一些开发和配置上的规范，很多框架都是使用这种规范，只不过在这基础上进行了增强和优化。</p><h4 id="同城双活架构" tabindex="-1">同城双活架构 <a class="header-anchor" href="#同城双活架构" aria-label="Permalink to &quot;同城双活架构&quot;">​</a></h4><p>同城双活是在同城或相近区域内建立两个机房。同城双机房距离比较近，通信线路质量较好，比较容易实现数据的同步复制 ，保证高度的数据完整性和数据零丢失。</p><p>同城两个机房各承担一部分流量，一般入口流量完全随机，内部RPC调用尽量通过就近路由闭环在同机房，相当于两个机房镜像部署了两个独立集群，数据仍然是单点写到主机房数据库，然后实时同步到另外一个机房。</p>',37),o=[t];function n(s,h,c,d,p,u){return l(),i("div",null,o)}const b=a(r,[["render",n]]);export{_ as __pageData,b as default};
