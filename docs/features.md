---
sidebar_position: 2
---

# 功能概览

kit 提供命令行工具、脚本组装、运维管理三大核心能力。

## 命令行工具

kit 内置跨平台的常用命令，解决 Windows/Linux 脚本兼容性问题：

| 命令 | 说明 |
|------|------|
| `info` | 查看系统信息 |
| `mkdir` | 创建目录 |
| `rm` | 删除文件/目录 |
| `cp` | 复制文件 |
| `mv` | 移动文件 |
| `zip` | 压缩/解压 |
| `md5` | 计算 MD5 |
| `readJson` | 读取 JSON 文件 |
| `writeJson` | 写入 JSON 文件 |

## 远程操作

| 命令 | 说明 |
|------|------|
| `scp` | 跨主机文件传输 |
| `remoteShell` | SSH 远程执行命令 |

## 模块管理

kit 可作为模块管理器，从远程仓库安装、升级、卸载工具：

```shell
# 安装模块
kit install myapp

# 指定版本安装
kit install myapp@1.0

# 查看已安装版本
kit list myapp

# 切换版本
kit use myapp@1.0

# 回滚到上一个版本
kit rollback myapp

# 删除版本
kit remove myapp@1.0
```

## 脚本组装

kit 支持通过脚本文件（`kitx.js`）组合各种能力，实现工作流自动化：

```js
// kitx.js
async function main() {
    console.log("开始部署...");
    mkdir("./dist");
    cp("./src/*", "./dist/");
    scp("./dist/", "server:/app/");
    remoteShell({host: "server"}, "cd /app && restart.sh");
}
```

运行脚本：

```shell
kit run
```
