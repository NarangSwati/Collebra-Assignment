import path from 'path';
import fs from 'fs';
import { chain, omit, merge } from 'lodash';
import mainConf from '../testconfigs/config.json';


const config = chain([{}])
  .map(conf => {
    conf.testDir = path.resolve(`${__dirname}/..`);
    return conf;
  })
  .map(conf => {
    const localConfPath = path.join(conf.testDir, '..', 'testconfigs', 'config.local.json');
    return fs.existsSync(localConfPath)
      ? merge(conf, mainConf, JSON.parse(fs.readFileSync(localConfPath)))
      : merge(conf, mainConf);
  })
  .map(c => {
    // Read the endpoints as per specified environment
    const DEFAULT_ENV = c.env;
    const env = process.env.NODE_ENV || DEFAULT_ENV;

    if (!c.endpoints[env]) {
      logger.error(`${env} is not a supported environment, typo?`);
      throw new Error(
        `'${env}' is not a valid/supported environment, use one of [${Object.keys(c.endpoints)}] instead.`
      );
    }

    const conf = {
      env,
      endpoints: c.endpoints[env],
      paths: c.paths
    };

    merge(conf, conf.endpoints, omit(c, ['endpoints', 'env']));

    console.log(`Currently running against: ${conf.env}`);
    return conf;
  })
  .value()[0];

export { config };
