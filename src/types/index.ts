import { z } from 'zod';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';

// Define Zod schemas for MCP server management
export const MCPServerConfigSchema = z.object({
  command: z.string(),
  args: z.array(z.string()),
});

export const AddServerArgumentsSchema = z.object({
  name: z.string(),
  config: MCPServerConfigSchema,
});

export const RemoveServerArgumentsSchema = z.object({
  name: z.string(),
});

export const EnableDisableServerArgumentsSchema = z.object({
  name: z.string(),
});

export const SearchPackagesArgumentsSchema = z.object({
  query: z.string().optional(),
});

export const InstallPackageArgumentsSchema = z.object({
  name: z.string(),
  parameters: z.record(z.string()).optional(),
});

// Export types inferred from schemas
export type MCPServerConfig = z.infer<typeof MCPServerConfigSchema>;
export type AddServerArguments = z.infer<typeof AddServerArgumentsSchema>;
export type RemoveServerArguments = z.infer<typeof RemoveServerArgumentsSchema>;
export type EnableDisableServerArguments = z.infer<
  typeof EnableDisableServerArgumentsSchema
>;
export type SearchPackagesArguments = z.infer<
  typeof SearchPackagesArgumentsSchema
>;
export type InstallPackageArguments = z.infer<
  typeof InstallPackageArgumentsSchema
>;

export type MCPServer = Server;
