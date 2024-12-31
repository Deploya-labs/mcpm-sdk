import { StoragedMCPServer } from '../services/storage.js';

export const stringifyServerToTitle = (server: StoragedMCPServer): string => {
  return `${server.name} (${[
    server.appConfig.command,
    ...(server.appConfig.args ?? []),
  ]
    .filter(Boolean)
    .join(' ')})`;
};
