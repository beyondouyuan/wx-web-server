docker部署

- 打包静态文件 cd client && npm i && npm run build
- 构建镜像 docker build -t wx-web-server:v1 .
- 运行容器 docker run --name wx-web-server -p 7001:7001 -d wx-web-server:v1