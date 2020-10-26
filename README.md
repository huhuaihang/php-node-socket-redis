# php-node-socket-redis
php redis发布 soket.io做websocket服务器 nodejs 订阅 推送消息到前台

环境要求 安装npm 包 windows 直接下载安装 linux yum 或者 apt 安装 npm redis-server 安装服务器端redis服务 安装 php-redis 扩展服务

目录 front 前台index.html 页面接收推送消息 node app.js nodejs 运行 socket服务 php index.php redis 发布消息

进入 front目录安装 npm install sokcet.io npm install 进入 node目录安装 forever 进程守护
npm install forever
启动js forever start app.js 进入 php目录 php index.hphp chat '实时消息：又有新用户下单了请及时处理'
