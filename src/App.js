import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "./components/TabPanel"
import BaseInfo from "./components/BaseInfo"
import Process from "./components/Process"
import File from "./components/File"
import Net from "./components/Net"
import Extension from "./components/Extension"


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
        <BaseInfo />
      </TabPanel>
      <TabPanel group={group} value={value} index={1}>
        <Process />
      </TabPanel>
      <TabPanel group={group} value={value} index={2}>
        <File />
      </TabPanel>
      <TabPanel group={group} value={value} index={3}>
        <Net />
      </TabPanel>
      <TabPanel group={group} value={value} index={4}>
        <Extension />
      </TabPanel>
    </Box>
  );
}
