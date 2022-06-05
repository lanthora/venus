import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "./components/TabPanel"


function fillTabProps(group, index) {
  return {
    id: `${group}-tab-${index}`,
    'aria-controls': `${group}-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const group = "sample";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="概览" {...fillTabProps(group, 0)} />
          <Tab label="进程防护" {...fillTabProps(group, 1)} />
          <Tab label="文件防护" {...fillTabProps(group, 2)} />
          <Tab label="网络防护" {...fillTabProps(group, 3)} />
          <Tab label="扩展功能" {...fillTabProps(group, 4)} />
        </Tabs>
      </Box>
      <TabPanel group={group} value={value} index={0}>
        <pre>{`
          系统基本状态:
            1. CPU内存使用率
            2. 当前用户信息

          进程防护基本状态:
            1. 运行模式(未启动/入侵检测/入侵防御)
            2. 受审计进程数,点击跳转到进程审计日志

          进程防护基本状态:
            1. 运行模式(未启动/运行中)
            2. 受审计文件数(跳转文件审计日志)/文件相关的总策略数(跳转文件策略)
            
          网络防护基本状态:
            1. 运行模式(未启动/运行中)
            2. 网络防火墙策略数(跳转网络策略)
          `}</pre>
      </TabPanel>
      <TabPanel group={group} value={value} index={1}>
        <pre>{`
          状态:
            1. 运行模式(未启动/入侵检测/入侵防御),当状态切换到防御时,所有不在信任列表中的进程将无法执行

          操作:
            1. 显示进程相关信息(工作目录,进程路径,启动参数)
            2. 执行次数,最后一次执行时间,放行/阻止(根据检测还是防御在底层执行的动作)
            3. 处理状态(未处理/信任/忽略),可以根据处理状态筛选

          这个功能的使用流程:
            1. 开启入侵检测模式
            2. 运行一段时间(至少一个业务周期)
            3. 根据审计日志,人工审核命令,将处理状态设置为信任或者忽略.
            4. 开启入侵防御模式
          `}</pre>
      </TabPanel>
      <TabPanel group={group} value={value} index={2}>
        <pre>{`
          状态:
            1. 运行模式(未启动/检测/防御)

          操作:
            1. 配置文件防护策略
            2. 显示被命中的文件防护策略(文件路径,文件系统信息,i节点信息,时间,命中的策略)

          这个功能的使用流程:
            1. 配置文件策略
            2. 根据场景设置文件行为检测或防御
            3. 命中的策略进入日志,查看日志
          `}</pre>
      </TabPanel>
      <TabPanel group={group} value={value} index={3}>
        <pre>{`
          状态:
            1. 运行模式(未启动/运行中)

          操作:
            1. 配置网络防护策略(可配置端口,地址,协议,TCP握手阶段,不包含数据报文的TCP)

          这个功能的使用流程:
            1. 配置网络防火墙
            2. 修改运行模式
            3. 命中的策略进入日志,查看日志
          `}</pre>
      </TabPanel>
      <TabPanel group={group} value={value} index={4}>
        <pre>{`
          操作:
            1. 配置 Telegram Bot 机器人,上报日志.列表显示已经配置的 Bot 以及运行状态
          `}</pre>
      </TabPanel>
    </Box>
  );
}
