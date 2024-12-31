# MCPM SDK

[![npm version](https://img.shields.io/npm/v/@mcpm/sdk.svg)](https://www.npmjs.com/package/@mcpm/sdk)
[![npm downloads](https://img.shields.io/npm/dm/@mcpm/sdk.svg)](https://www.npmjs.com/package/@mcpm/sdk)
[![Build Status](https://github.com/MCP-Club/mcpm/actions/workflows/test.yml/badge.svg)](https://github.com/MCP-Club/mcpm/actions)
[![GitHub license](https://img.shields.io/github/license/MCP-Club/mcpm.svg)](https://github.com/MCP-Club/mcpm/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/MCP-Club/mcpm.svg)](https://github.com/MCP-Club/mcpm/issues)
[![GitHub stars](https://img.shields.io/github/stars/MCP-Club/mcpm.svg)](https://github.com/MCP-Club/mcpm/stargazers)

A Node.js SDK for managing MCP projects programmatically.

## Highlights

- 🚀 **Programmatic MCP Management**: Manage MCP projects programmatically using our Node.js SDK
- 🔄 **Claude Integration**: Interact with Claude App programmatically using our SDK
- 🛠️ **Package Discovery**: Search and discover MCP packages from the community
- 🔌 **MCP Server Control**: Start and manage MCP servers programmatically
- 📝 **JSON Configuration**: Manage MCP projects through JSON configuration files

## Installation

```bash
npm install @mcpm/sdk
```

## Usage

```typescript
import { ClaudeHostService, registrySrv } from '@mcpm/sdk';

// Search for packages
const packages = await registrySrv.searchPackages('your-search-query');

// Work with Claude
const claudeSrv = new ClaudeHostService();
// ... use Claude service

// Start MCP server programmatically
import { MCPServer } from '@mcpm/sdk';
const server = new MCPServer();
await server.start();
```

## Configuration

- MCP projects are stored in JSON configuration files
- Claude App configuration is managed programmatically using our SDK

## Development

### Publish A new version

GitHub Actions will automatically publish a new version when a new tag is created

```bash
git tag v1.4.1
git push origin v1.4.1
```

## TODO

- [x] Add Remote MCP Discovery (A MCPHub for search and recommendation)
- [x] Auto Install MCP Servers For you
- [ ] A GUI for MCPM SDK

For more information, visit our [MCP.md](./docs/MCP.md).
