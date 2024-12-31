import { exec } from 'child_process';
import { promisify } from 'util';
import { installNode, installUv } from '../utils/cmd';

const execAsync = promisify(exec);

interface Dependency {
  name: string;
  isInstalled: boolean;
  version: string | null;
}

export enum DependencyName {
  UX = 'UX',
  NPM = 'NPM',
}

export class DependencyService {
  async checkDependency(name: DependencyName): Promise<Dependency> {
    try {
      let command = '';

      switch (name) {
        case DependencyName.UX:
          command = 'ux --version';
          break;
        case DependencyName.NPM:
          command = 'npm --version';
          break;
        default:
          throw new Error(`Unknown dependency: ${name}`);
      }

      const { stdout } = await execAsync(command);
      return {
        name,
        isInstalled: true,
        version: stdout.trim(),
      };
    } catch (error) {
      return {
        name,
        isInstalled: false,
        version: null,
      };
    }
  }

  async installDependency(name: string): Promise<void> {
    switch (name) {
      case DependencyName.UX:
        await installUv();
        break;
      case DependencyName.NPM:
        await installNode();
        break;
      default:
        throw new Error(`Unknown dependency: ${name}`);
    }
  }
}

export const dependencyService = new DependencyService();
