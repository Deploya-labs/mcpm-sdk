export { ClaudeHostService } from './services/claude.js';
export type { MCPServerWithStatus } from './services/claude.js';
export { dependencyService, DependencyService } from './services/dependency.js';
export { registrySrv, RegistryService } from './services/registry.js';
export type { PackageInfo } from './services/registry.js';
export { startMCPServer } from './mcp.js';

// Export types
export * from './mcp.js';
export * from './types/index.js';
export * from './services/storage.js';
export * from './services/claude.js';

// Re-export utilities
export * from './utils/display.js';
