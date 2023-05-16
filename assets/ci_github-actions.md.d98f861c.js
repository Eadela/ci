import{_ as s,o as a,c as n,N as l}from"./chunks/framework.6be76822.js";const h=JSON.parse('{"title":"GitHub Actions","description":"","frontmatter":{},"headers":[],"relativePath":"ci/github-actions.md"}'),p={name:"ci/github-actions.md"},o=l(`<h1 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub Actions&quot;">​</a></h1><blockquote><p>GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。</p></blockquote><h2 id="基本认识" tabindex="-1">基本认识 <a class="header-anchor" href="#基本认识" aria-label="Permalink to &quot;基本认识&quot;">​</a></h2><p><a href="https://docs.github.com/zh/actions/learn-github-actions" target="_blank" rel="noreferrer">中文文档</a></p><h2 id="yaml组件语法介绍" tabindex="-1"><a href="https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions" target="_blank" rel="noreferrer">YAML组件语法介绍</a> <a class="header-anchor" href="#yaml组件语法介绍" aria-label="Permalink to &quot;[YAML组件语法介绍](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)&quot;">​</a></h2><h3 id="工作流-yml" tabindex="-1">工作流-yml <a class="header-anchor" href="#工作流-yml" aria-label="Permalink to &quot;工作流-yml&quot;">​</a></h3><p>工作流程是一个可配置的自动化过程，它将运行一个或多个作业。由 YAML 文件定义，储库的 <code>.github/workflows</code> 目录中。</p><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><p>事件是存储库中触发工作流程运行的特定活动。</p><h3 id="作业" tabindex="-1">作业 <a class="header-anchor" href="#作业" aria-label="Permalink to &quot;作业&quot;">​</a></h3><p>作业是工作流中在同一运行器上执行的一组步骤。</p><h3 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h3><p>操作是用于 GitHub Actions 平台的自定义应用程序，它执行复杂但经常重复的任务。</p><h3 id="运行程序" tabindex="-1">运行程序 <a class="header-anchor" href="#运行程序" aria-label="Permalink to &quot;运行程序&quot;">​</a></h3><p>运行程序是触发工作流时运行工作流的服务器。</p><h2 id="cicd场景" tabindex="-1">CICD场景 <a class="header-anchor" href="#cicd场景" aria-label="Permalink to &quot;CICD场景&quot;">​</a></h2><ul><li>dev分支，自动部署到测试机</li><li>master分支，自动化测试</li><li>v*.*.*格式的tag，自动上线（支持回滚）</li><li>...</li></ul><h3 id="本次应用场景" tabindex="-1">本次应用场景 <a class="header-anchor" href="#本次应用场景" aria-label="Permalink to &quot;本次应用场景&quot;">​</a></h3><p>自动build，并发布到pages服务器</p><p>触发条件：提交代码到master分支</p><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.github/workflows/**</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">docs/**</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">package/**</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6.0.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm install</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm build</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">github_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.GITHUBTOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">publish_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span></code></pre></div><ol><li>触发条件 <strong><code>on</code></strong></li></ol><p>push - git push</p><p>branches - 改动分支</p><p>paths - 代码改动在paths范围内</p><ol start="2"><li><p>任务 <strong><code>jobs</code></strong></p></li><li><p>步骤 <strong><code>steps</code></strong> 可定义，也可以第三方</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 直接使用 uses 第三方</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 name 和 uses 第三方</span></span>
<span class="line"><span style="color:#A6ACCD;">- name: Use Node.js   </span></span>
<span class="line"><span style="color:#A6ACCD;">  uses: acitons/setup-node@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">  with: node-version: 16 </span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 name 和 run</span></span>
<span class="line"><span style="color:#A6ACCD;">- name: print node version</span></span>
<span class="line"><span style="color:#A6ACCD;">  run: |             # 自定义控制台命令  | 多行</span></span>
<span class="line"><span style="color:#A6ACCD;">    node -v</span></span>
<span class="line"><span style="color:#A6ACCD;">    npm -v</span></span>
<span class="line"><span style="color:#A6ACCD;"># 直接使用 run</span></span>
<span class="line"><span style="color:#A6ACCD;">- run: npm i</span></span>
<span class="line"><span style="color:#A6ACCD;">- run: npm run lint</span></span>
<span class="line"><span style="color:#A6ACCD;">- run: npm run test</span></span></code></pre></div><h3 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h3><ul><li>认识Github Actions</li><li>使用Github Actions构建，并部署</li></ul><h4 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h4><p><code>page-build-deployment</code>工作流程是由 GitHub Pages 生成的，用于在您的存储库中创建或更新 GitHub Pages 站点。 有关详细信息，请参阅“<a href="https://docs.github.com/cn/pages" target="_blank" rel="noreferrer">GitHub Pages</a>”。</p>`,32),e=[o];function t(c,r,i,D,C,y){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{h as __pageData,F as default};
