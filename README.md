# gdal2tiles-node

## What

将图片切割成leafletjs可用的瓦片图

## Use

 - 安装python3
 - 安装gdal
 - npx gdal2tiles-node@@latest -p=raster -z=0-5 -i=./demo.jpg -o=./opu

 推荐：使用conda管理python环境

 > macOS 自带python3

 1. 下载安装conda，「官网下载即可，傻瓜式安装」
 2. 创建conda环境，`conda create --name myenv`
 3. 查看环境，`conda env list`
 4. 激活环境，`conda activate myenv`
 5. 安装gdal，`conda install gdal`

 ## options

 - i: input 输入文件 eg: -i=./demo.jpg
 - o: output 输出文件夹 eg: -o=./opu
 - z: zoom 缩放级别 eg: -z=0-5
 - p: profile 瓦片类型 eg: -p=raster

MIT
