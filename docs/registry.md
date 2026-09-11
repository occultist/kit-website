---
sidebar_position: 3
---

# Registry 配置管理

kit 可对接 [Registry](https://git.honor3.com/Fullstack/registry) 配置管理中心，通过命令行管理微服务配置。

## 配置连接

使用 `kit config` 设置 Registry 地址和认证信息：

```shell
# 设置 Registry 服务地址
kit config registryUrl http://your-registry-host:8008

# 设置认证 Token（Registry 设置中获取）
kit config registryToken your-token-here
```

验证连接：

```shell
kit registry list
```

## 查看项目

```shell
# 列出所有项目
kit registry list

# 输出示例：
# ID                    名称                      维度
# proj-abc-123          CommonExternalService     IDC=✓ Env=✓ Group=✓
# proj-def-456              OrderService              IDC=✗ Env=✓ Group=✓
```

## 管理配置

`kit registry config` 支持查看和修改配置项。

### 查看配置

```shell
# 查看整个项目的所有配置
kit registry config CommonExternalService

# 查看指定路径下的配置
kit registry config CommonExternalService:data/windows

# 获取单个配置值
kit registry config CommonExternalService:CF_R2_BUCKET
```

### 设置配置值

```shell
kit registry config CommonExternalService:CF_R2_BUCKET new-value
```

### 路径语法

`project:path` 中的 `path` 对应配置的路径前缀：

| 语法 | 含义 |
|------|------|
| `project` | 整个项目 |
| `project:data` | 路径以 `data` 开头的配置 |
| `project:data/windows` | 路径以 `data/windows` 开头的配置 |
| `project:data/windows/kit.exe` | 精确匹配单个配置 |

## 导入导出

### 导出

```shell
# 导出整个项目到文件
kit registry export CommonExternalService ./backup.json

# 仅导出指定路径下的配置
kit registry export CommonExternalService:data/windows ./backup-windows.json
```

导出文件包含项目名、路径、时间戳和配置列表：

```json
{
  "project": "CommonExternalService",
  "path": "data/windows",
  "exportedAt": "2026-09-11T02:00:00Z",
  "configs": [
    {
      "key": "kit.exe",
      "value": "https://pub-xxx.r2.dev/data/windows/kit.exe",
      "type": "string",
      "description": "Windows 二进制下载地址"
    }
  ]
}
```

### 导入

```shell
# 从备份文件导入
kit registry import CommonExternalService ./backup.json

# 导入到指定路径下
kit registry import CommonExternalService:data ./backup.json
```

导入规则：
- 已存在的 key → 更新值
- 不存在的 key → 新增
- 远程有但本地没有的 → 保留不动
