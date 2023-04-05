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
    const pyProg = spawn('python', ['gdal2tiles.py', '-l', '-p', `${profile}`, '${profile}', ` ${zoom}`, input, output], {
        cwd: path.join(__dirname)
    });

    pyProg.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pyProg.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

export default startExecution;


