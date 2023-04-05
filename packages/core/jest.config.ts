// @ts-ignore
import { Config, createConfig } from '@umijs/test';

export default {
  displayName: 'core',
  ...createConfig(),
  collectCoverageFrom: ['./**/*.{ts,js,tsx,jsx}'],
  moduleDirectories: ['node_modules', '../../node_modules'],
} as Config.InitialOptions;
