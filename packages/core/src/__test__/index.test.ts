import { execa } from 'execa';
import path from 'path';

describe('gdal2tiles-node', () => {
  it('no parameters', async () => {
    const { stdout } = await execa('ts-node', [`${path.join(__dirname, '../cli.ts')}`]);
    expect(stdout).toBe('请输入输入和输出路径');    
  });

  it('no input parameter', async () => {
    const { stdout } = await execa('ts-node', [`${path.join(__dirname, '../cli.ts')}`,"-i='./'"]);
    expect(stdout).toBe('请输入输入和输出路径');    
  });

  it('no out parameter', async () => {
    const { stdout } = await execa('ts-node', [`${path.join(__dirname, '../cli.ts')}`,"-o='./'"]);
    expect(stdout).toBe('请输入输入和输出路径');    
  });
});