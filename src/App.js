import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './components/TabPanel';
import BaseInfo from './components/BaseInfo';
import Process from './components/Process';
import File from './components/File';
import Net from './components/Net';
import Extension from './components/Extension';
import LoginDialog from './components/LoginDialog';

function fillTabProps(group, index) {
  return {
    id: `${group}-tab-${index}`,
    'aria-controls': `${group}-tabpanel-${index}`,
  };
}

function App() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const group = "uranus";

  const changeCurrentTab = (event, newTab) => {
    setCurrentTab(newTab);
  };

  const tabs = [
    { label: "概览", page: <BaseInfo /> },
    { label: "进程防护", page: <Process /> },
    { label: "文件防护", page: <File /> },
    { label: "网络防护", page: <Net /> },
    { label: "扩展功能", page: <Extension /> },
  ]

  return (
    <Box sx={{ width: '100%' }}>

      <LoginDialog />

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={changeCurrentTab}>
          {tabs.map((item, idx) => (<Tab label={item.label} {...fillTabProps(group, idx)} />))}
        </Tabs>
      </Box>

      {tabs.map((item, idx) => (<TabPanel group={group} value={currentTab} index={idx}> {item.page} </TabPanel>))}

    </Box>
  );
}

export default App;
