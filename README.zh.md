# MCPM SDK

[![npm version](https://img.shields.io/npm/v/@mcpm/sdk.svg)](https://www.npmjs.com/package/@mcpm/sdk)
[![npm downloads](https://img.shields.io/npm/dm/@mcpm/sdk.svg)](https://www.npmjs.com/package/@mcpm/sdk)
[![Build Status](https://github.com/MCP-Club/mcpm/actions/workflows/test.yml/badge.svg)](https://github.com/MCP-Club/mcpm/actions)
[![GitHub license](https://img.shields.io/github/license/MCP-Club/sdk.svg)](https://github.com/MCP-Club/mcpm/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/MCP-Club/sdk.svg)](https://github.com/MCP-Club/mcpm/issues)
[![GitHub stars](https://img.shields.io/github/stars/MCP-Club/sdk.svg)](https://github.com/MCP-Club/mcpm/stargazers)

一个强大的 Node.js SDK，用于管理 MCP 项目并以编程方式与 Claude AI 交互。

简体中文 | [English](./README.md)

## 特性

- 🎮 **核心 MCP 操作**：全面的 MCP 项目管理 API
- 🤖 **Claude AI 集成**：与 Claude AI 无缝集成，提供智能项目辅助
- 📦 **依赖管理**：智能的依赖解析和管理
- 💾 **存储服务**：高效的 MCP 项目存储解决方案
- 🔄 **项目工具**：常用 MCP 操作的辅助函数
- 🛠️ **可扩展架构**：易于扩展和定制以满足您的需求

## 安装

```bash
npm install @mcpm/sdk
```

## 使用方法

```typescript
import { 
  ClaudeService, 
  DependencyService,
  StorageService 
} from '@mcpm/sdk';

// 初始化服务
const claudeService = new ClaudeService();
const dependencyService = new DependencyService();
const storageService = new StorageService();

// 使用 Claude AI
await claudeService.chat('帮我优化这个命令');

// 管理依赖
await dependencyService.checkDependency('your-package');

// 处理存储操作
await storageService.saveProject('project-name', projectData);
```

## 核心服务

- **Claude 服务**：与 Claude AI 交互以获取智能辅助
- **依赖服务**：高效管理项目依赖
- **存储服务**：处理项目存储和检索
- **显示工具**：统一格式化和显示信息

## 开发

### 发布新版本

当创建新标签时，GitHub Actions 将自动发布新版本：

```bash
git tag v1.4.1
git push origin v1.4.1
```

## 路线图

- [ ] 增加更多 Claude AI 功能
- [ ] 增强依赖解析
- [ ] 实现缓存机制
- [ ] 添加更多实用函数
- [ ] 改进错误处理和日志记录

更多关于 MCP 的信息，请访问我们的 [MCP 文档](./docs/MCP.md)。
