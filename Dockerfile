# 指定基础镜像
FROM node:10.21.0

# 配置环境变量
ENV NODE_ENV production

# 这个是容器中的文件目录
RUN mkdir -p /usr/src/www

# 设置工作目录
WORKDIR /usr/src/www

# 遇到下一个WORKDIR的命令的工作目录均为/usr/src/www

# 拷贝所有源代码到工作目

COPY . ./

# 服务端依赖

RUN cd ./server \
  && npm i --production --registry=https://registry.npm.taobao.org

# 设置服务端工作目录

# WORKDIR相当于 cd xxx
WORKDIR /usr/src/www/server/

# 暴露容器端口
EXPOSE 7001

# RUN npm start 的工作目录是/usr/src/www/server/

CMD npm start

