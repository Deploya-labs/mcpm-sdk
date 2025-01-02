import { MCPServerConfigSource, StoragedMCPServer } from '../storage.js';

export interface MCPServerBootConfig {
  command: string;
  args?: string[];
  env?: {
    [key: string]: string;
  };
}

export interface MCPServerMap {
  [key: string]: MCPServerBootConfig;
}

export interface ClaudeConfig {
  mcpServers?: MCPServerMap;
}

export interface MCPServerWithStatus {
  info: StoragedMCPServer;
  enabled: boolean;
}

export interface IHostService {
  /**
   * Add a new MCP server to both storage and Claude config
   */
  addMCPServer(
    name: string,
    server: MCPServerBootConfig,
    source?: MCPServerConfigSource
  ): Promise<ClaudeConfig>;

  /**
   * Remove an MCP server from both storage and Claude config
   */
  removeMCPServer(name: string): Promise<void>;

  /**
   * Get all MCP servers from Claude config
   */
  getMCPServersInConfig(): Promise<MCPServerMap>;

  /**
   * Get all MCP servers with their enabled status
   */
  getAllMCPServersWithStatus(): Promise<MCPServerWithStatus[]>;

  /**
   * Disable an MCP server (remove from Claude config but keep in storage)
   */
  disableMCPServer(name: string): Promise<void>;

  /**
   * Enable an MCP server (add to Claude config from storage)
   */
  enableMCPServer(name: string): Promise<void>;

  /**
   * Get all disabled MCP servers
   */
  getDisabledMCPServers(): Promise<{
    [key: string]: StoragedMCPServer;
  }>;

  /**
   * Get all enabled MCP servers
   */
  getEnabledMCPServers(): Promise<{
    [key: string]: StoragedMCPServer;
  }>;

  /**
   * Clear all stored data
   */
  clearAllData(): void;

  /**
   * Restart Host application
   */
  restartHostApp(): Promise<void>;

  /**
   * Add MCPM itself as an MCP server
   */
  addMCPMSelfMCPServer(): Promise<void>;
}
