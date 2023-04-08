import { spawn } from 'child_process';
import path from 'path';

export type ProfileOptions = 'mercator' | 'geodetic' | 'raster'

type Options = {
    input: string;
    output: string;
    zoom?: string;
    profile?: 'mercator' | 'geodetic' | 'raster';
}

const startExecution = ({ input, output, zoom, profile }: Options) => {

    const pyProg = spawn('python', ['gdal2tiles.py', '-l', '-p', `${profile}`, '-z', `${zoom}`, `${path.resolve(process.cwd(),input)}`, `${path.resolve(process.cwd(),output)}`], {
        cwd: path.join(__dirname)
    });

    pyProg.stderr.on('data', (data) => {
        console.error(`出现错误: ${data}`);
    });

    pyProg.on('close', () => {
        console.log(`程序已关闭`);
    });
};

export default startExecution;


