import { MCPServerBootConfig } from '../services/hosts/base.js';
import { MCPServerConfig } from '../types/index.js';
import { makeParamsReplacer } from './string.js';

/**
 * Process package info and parameters into a boot config
 * @param packageInfo The package info containing command configuration
 * @param paramValues The parameter values to replace in the command
 * @returns Processed boot config with parameters replaced
 */
export function processPackageInfoToBootConfig(
  commandInfo: MCPServerConfig,
  paramValues: Record<string, string>
): MCPServerBootConfig {
  const replacer = makeParamsReplacer(paramValues);

  // Process commandInfo args, replacing parameters with their values
  const processedArgs = commandInfo?.args?.map(replacer);
  const processedEnv = commandInfo.env
    ? Object.fromEntries(
        Object.entries(commandInfo.env).map(([key, value]) => [
          key,
          replacer(value),
        ])
      )
    : undefined;

  return {
    command: replacer(commandInfo.command),
    args: processedArgs,
    env: processedEnv,
  };
}
