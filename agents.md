# 项目协作说明

## 用户偏好

- 用户叫：技术爬爬虾。
- 用户擅长：Python、Java。
- 用户对 CSS 不熟。遇到网页样式问题时，需要用大白话解释：少说术语，多说明“这段样式管页面哪一块”“改它会看到什么变化”。

## 项目概览

- 项目名称：`pet_care`。
- 当前页面主题：泡泡爪宠物洗护店。
- 项目类型：宠物洗护店单页展示和预约页面。
- 技术栈：Next.js、React、TypeScript、纯 CSS。
- 主要用途：展示宠物洗护服务、流程、价格、店内环境、客户评价，并提供一个静态预约表单。
- 当前表单只是前端演示：点击提交按钮会弹出提示，不会真的提交到后端。

## 运行命令

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 构建项目：`npm run build`
- 启动构建后服务：`npm run start`

## 目录结构

- `app/page.tsx`：首页入口，按顺序组合所有页面模块。
- `app/layout.tsx`：Next.js 根布局，设置页面中文语言和元信息。
- `app/globals.css`：全站样式文件，页面所有视觉效果基本都在这里。
- `app/components/StaticSections.tsx`：大部分静态页面模块，包括导航、首屏、服务、流程、价格、图库、评价、页脚等。
- `app/components/Environment.tsx`：店内环境展示区，组合轮播图和门店信息卡。
- `app/components/EnvironmentCarousel.tsx`：店内环境轮播图，有自动播放、上一张、下一张、圆点和缩略图切换。
- `app/components/Booking.tsx`：预约区域，包含门店信息和预约表单。
- `index.html`：独立静态 HTML 版本，内容和样式与 Next.js 页面高度相似，可作为静态页面参考。
- `.idea/`：JetBrains IDE 配置文件。
- `.next/`、`node_modules/`：构建产物和依赖目录，通常不要手动改。

## 页面模块顺序

首页在 `app/page.tsx` 中按这个顺序渲染：

1. `Header`：顶部固定导航。
2. `Hero`：首屏大图和主标题。
3. `HeroStrip`：门店亮点条。
4. `Services`：服务项目卡片。
5. `Process`：洗护流程。
6. `Pricing`：价格套餐。
7. `Gallery`：图片展示区。
8. `Environment`：店内环境轮播和门店信息。
9. `Reviews`：客户评价轮播。
10. `Booking`：预约表单。
11. `Footer`：页脚。

## 样式维护提示

- 这个项目没有使用 Tailwind、CSS Modules 或 UI 组件库，主要靠 `app/globals.css` 里的 class 名控制样式。
- `:root` 里放的是全站颜色和尺寸变量。大白话说，这里像“调色盘”和“常用尺寸表”，比如主文字色、浅色背景、按钮颜色、圆角大小。
- `.hero` 控制首屏大图区域；想换首页大背景图，主要看这里的 `background`。
- `.nav`、`.site-header` 控制顶部导航；如果导航太挤、太高、太低，通常改这里。
- `.section-inner` 控制每一块内容的最大宽度；它像页面中间那条“内容安全区”。
- `.services-grid`、`.price-grid`、`.booking-layout`、`.environment-layout` 这类名字通常控制布局几列。大白话说，页面是横着排还是竖着排，主要看这些。
- `@media (max-width: 920px)` 和 `@media (max-width: 640px)` 是手机和平板适配。大白话说，屏幕变窄后，这些规则会把多列内容改成单列，避免挤成一团。
- `.button` 是通用按钮样式，很多地方复用。改它会影响页面里大多数按钮。
- `.review-track` 使用 CSS 动画做评价横向滚动；`.carousel` 相关样式配合 React 状态做店内环境轮播。

## 代码特点

- `StaticSections.tsx` 中很多模块用 `dangerouslySetInnerHTML` 渲染静态 HTML 字符串。这能快速迁移静态页面，但后续维护时要小心 HTML 字符串里的引号和标签闭合。
- `EnvironmentCarousel.tsx` 是客户端组件，使用 `useState` 和 `useEffect` 管理当前图片和自动播放。
- `Booking.tsx` 也是客户端组件，因为它需要调用 `window.alert`。
- 页面图片主要来自 Unsplash 远程链接。
- 项目开启了 TypeScript 严格模式：`tsconfig.json` 中 `strict` 为 `true`。

## 修改建议

- 如果只是改文案，优先找对应组件里的中文文本。
- 如果改首页展示顺序，改 `app/page.tsx` 里的组件顺序。
- 如果改样式，优先在 `app/globals.css` 中按 class 名搜索。
- 如果要接真实后端预约，需要从 `Booking.tsx` 入手，把当前 `window.alert` 替换为表单提交逻辑。
- 如果要保留 Next.js 版本和 `index.html` 静态版本一致，修改时要记得同步两边，否则两个入口会长得不一样。

## 注意事项

- 不要手动修改 `node_modules/` 和 `.next/`。
- 中文文件建议使用 UTF-8 编码保存，避免终端或编辑器显示乱码。
- 项目当前没有测试脚本，验证主要依赖 `npm run build` 和浏览器查看页面。
