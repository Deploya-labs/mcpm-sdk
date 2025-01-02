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
   * This includes both servers from storage and Claude config
   * If a server is in Claude config but not in storage, it will be added to storage
   * @returns Array of MCP servers with their enabled status
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
   * Update parameters of an existing MCP server
   * @param name Name of the MCP server to update
   * @param paramValues New parameter values to apply
   * @throws Error if server not found or parameter validation fails
   */
  updateMCPServerParams(
    name: string,
    paramValues: Record<string, string>
  ): Promise<void>;

  /**
   * Get a specific MCP server with its enabled status by name
   * @param name The name of the MCP server to get
   * @returns The MCP server with its enabled status, or null if not found
   */
  getMCPServerWithStatus(name: string): Promise<MCPServerWithStatus | null>;

  /**
   * Install a package with parameters
   * @param name Name of the package to install
   * @param paramValues Parameters required for installation
   */
  installPackage(
    name: string,
    paramValues: Record<string, string>
  ): Promise<void>;

  /**
   * Add MCPM itself as an MCP server
   */
  addMCPMSelfMCPServer(): Promise<void>;
}
