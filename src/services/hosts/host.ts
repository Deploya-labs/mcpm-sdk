import { MCPServerConfigSource } from '../storage.js';
import {
  ClaudeConfig,
  IHostService,
  MCPServerBootConfig,
  MCPServerMap,
  MCPServerWithStatus,
} from './base.js';
import { StoragedMCPServer } from '../storage.js';
import { ClaudeHostService } from './claude.js';

export enum HostType {
  CLAUDE = 'Claude',
}

export class HostService implements IHostService {
  constructor(private readonly hostSrv: IHostService) {}

  static getInstanceByType(type: HostType): IHostService {
    switch (type) {
      case HostType.CLAUDE:
        return new HostService(new ClaudeHostService());
      default:
        throw new Error(`Unknown host type: ${type}`);
    }
  }

  async addMCPServer(
    name: string,
    server: MCPServerBootConfig,
    source?: MCPServerConfigSource
  ): Promise<ClaudeConfig> {
    return this.hostSrv.addMCPServer(name, server, source);
  }

  async removeMCPServer(name: string): Promise<void> {
    return this.hostSrv.removeMCPServer(name);
  }

  async getMCPServersInConfig(): Promise<MCPServerMap> {
    return this.hostSrv.getMCPServersInConfig();
  }

  async getAllMCPServersWithStatus(): Promise<MCPServerWithStatus[]> {
    return this.hostSrv.getAllMCPServersWithStatus();
  }

  async disableMCPServer(name: string): Promise<void> {
    return this.hostSrv.disableMCPServer(name);
  }

  async enableMCPServer(name: string): Promise<void> {
    return this.hostSrv.enableMCPServer(name);
  }

  async getDisabledMCPServers(): Promise<{
    [key: string]: StoragedMCPServer;
  }> {
    return this.hostSrv.getDisabledMCPServers();
  }

  async getEnabledMCPServers(): Promise<{
    [key: string]: StoragedMCPServer;
  }> {
    return this.hostSrv.getEnabledMCPServers();
  }

  clearAllData(): void {
    return this.hostSrv.clearAllData();
  }

  async restartHostApp(): Promise<void> {
    return this.hostSrv.restartHostApp();
  }

  async addMCPMSelfMCPServer(): Promise<void> {
    return this.hostSrv.addMCPMSelfMCPServer();
  }
}
