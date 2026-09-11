---
sidebar_position: 1
---

# 安装

kit 是一个跨平台命令行工具，支持以下平台：

| 平台 | 架构 | 说明 |
|------|------|------|
| Windows | x86_64 | `kit.exe` |
| Linux | x86_64 | 现代 glibc（Ubuntu 20.04+） |
| Linux | x86_64 | Kylin V10 低版本 glibc |

## 下载

前往首页下载对应平台的二进制文件：

- **Windows**: [kit.exe](https://pub-98ee77ce79984c2cad0dc1c300901158.r2.dev/data/windows/kit.exe)
- **Linux (现代 glibc)**: [kit](https://pub-98ee77ce79984c2cad0dc1c300901158.r2.dev/data/linux/kit)
- **Linux (Kylin V10)**: [kit.zip](https://pub-98ee77ce79984c2cad0dc1c300901158.r2.dev/data/kylin/kit.zip)

下载后将可执行文件添加到系统 `PATH` 中即可使用。

## 远程仓库

kit 支持从远程仓库安装和管理模块。配置仓库地址：

```shell
kit config remoteServer http://baishe.fullstack.club:5244/dav
kit config remoteAuth cheney@722V587
```

### 信雅达内部仓库

```shell
kit config remoteServer http://172.16.17.230:5244/dav
kit config remoteAuth kit@kitkit
```

## 验证

配置完成后，运行以下命令验证仓库连接：

```shell
kit remote
```
