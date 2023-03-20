import http from 'http';
import path from 'path';
import url from 'url';
import fs from 'fs';

// 获取当前目录（相对路径）
const directory = process.cwd();

// 定义服务器地址和端口
const hostname = 'localhost';
const port = 18080;

// 创建本地服务器
const server = http.createServer((req, res) => {
  // 解析请求的URL
  const parsedUrl = url.parse(req.url);
  // 获取请求的文件路径
  const filePath = path.join(directory, parsedUrl.pathname);
  // 读取请求的文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 文件不存在或读取失败，返回404错误
      res.writeHead(404);
      res.end();
    } else {
      // 根据文件扩展名设置MIME类型
      let contentType;
      switch (path.extname(filePath)) {
        case '.html':
          contentType = 'text/html';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.js':
          contentType = 'text/javascript';
          break;
        default:
          contentType = 'application/octet-stream';
      }
      // 设置响应头
      res.setHeader('Content-Type', contentType);
      // 返回请求的文件内容
      res.end(data);
    }
  });
});

// 启动服务器
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Serving directory '${directory}'`);
});
