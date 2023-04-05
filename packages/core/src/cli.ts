#!/usr/bin/env node
import { cli } from 'cleye';
import startExecution, { ProfileOptions } from './';
import packJson from '../package.json';

const argv = cli({
    name: 'gdal2tiles-node',
    version: packJson.version,
    description: 'gdal2tiles-node',
    flags: {
        zoom: {
            type: String,
            alias: 'z',
        },
        profile: {
            type: String,
            alias: 'p',
        },
        input: {
            type: String,
            alias: 'i',
        },
        output: {
            type: String,
            alias: 'o',
        }

    }
});

const {
    input,
    output,
    zoom,
    profile
} = argv.flags;

if (input && output) {
    startExecution({
        input,
        output,
        zoom,
        profile: profile as ProfileOptions
    });
} else {
    console.info('请输入文件路径');
}





