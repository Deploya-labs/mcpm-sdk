export { ClaudeHostService } from './services/claude.js';
export type { MCPServerWithStatus } from './services/claude.js';
export { registrySrv, RegistryService } from './services/registry.js';
export type { PackageInfo } from './services/registry.js';
export { startMCPServer } from './mcp.js';

// Export types
export * from './types/index.js';

// Re-export core functionality
export * from './utils/display.js';
export * from './utils/formatter.js';
