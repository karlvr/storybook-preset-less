import { Configuration, RuleSetCondition } from 'webpack';

interface Options {
  styleLoaderOptions?: object | false;
  cssLoaderOptions?: object | false;
  lessLoaderOptions?: object | false;
  rule?: RuleSetCondition;
}

declare interface PresetLess {
  webpack: (config?: Configuration, options?: Options) => Configuration;
}

export = PresetLess;
