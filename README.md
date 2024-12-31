# MCPM SDK

[![npm version](https://img.shields.io/npm/v/@mcpm/sdk.svg)](https://www.npmjs.com/package/@mcpm/sdk)
[![npm downloads](https://img.shields.io/npm/dm/@mcpm/sdk.svg)](https://www.npmjs.com/package/@mcpm/sdk)
[![Build Status](https://github.com/MCP-Club/mcpm/actions/workflows/test.yml/badge.svg)](https://github.com/MCP-Club/mcpm/actions)
[![GitHub license](https://img.shields.io/github/license/MCP-Club/sdk.svg)](https://github.com/MCP-Club/mcpm/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/MCP-Club/sdk.svg)](https://github.com/MCP-Club/mcpm/issues)
[![GitHub stars](https://img.shields.io/github/stars/MCP-Club/sdk.svg)](https://github.com/MCP-Club/mcpm/stargazers)

A powerful Node.js SDK for managing MCP projects and interacting with Claude AI programmatically.

## Highlights

- 🎮 **Core MCP Operations**: Comprehensive APIs for managing MCP projects
- 🤖 **Claude AI Integration**: Seamless integration with Claude AI for intelligent project assistance
- 📦 **Dependency Management**: Smart dependency resolution and management
- 💾 **Storage Services**: Efficient storage solutions for MCP projects
- 🔄 **Project Utilities**: Helper functions for common MCP operations
- 🛠️ **Extensible Architecture**: Easy to extend and customize for your needs

## Installation

```bash
npm install @mcpm/sdk
```

## Usage

```typescript
import { 
  ClaudeService, 
  DependencyService,
  StorageService 
} from '@mcpm/sdk';

// Initialize services
const claudeService = new ClaudeService();
const dependencyService = new DependencyService();
const storageService = new StorageService();

// Work with Claude AI
await claudeService.chat('Help me optimize my command');

// Manage dependencies
await dependencyService.checkDependency('your-package');

// Handle storage operations
await storageService.saveProject('project-name', projectData);
```

## Core Services

- **Claude Service**: Interact with Claude AI for intelligent assistance
- **Dependency Service**: Manage project dependencies efficiently
- **Storage Service**: Handle project storage and retrieval
- **Display Utils**: Format and display information consistently

## Development

### Publishing New Versions

GitHub Actions will automatically publish a new version when a new tag is created:

```bash
git tag v1.4.1
git push origin v1.4.1
```

## Roadmap

- [ ] Add more Claude AI capabilities
- [ ] Enhance dependency resolution
- [ ] Implement caching mechanisms
- [ ] Add more utility functions
- [ ] Improve error handling and logging

For more information about MCP, visit our [MCP Documentation](./docs/MCP.md).
