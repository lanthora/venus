function Net(props) {
  return (
    <pre> {`
      Net.js
      
      状态:
        1. 运行模式(未启动/运行中)

      操作:
        1. 配置网络防护策略(可配置端口,地址,协议,TCP握手阶段,不包含数据报文的TCP)

      这个功能的使用流程:
        1. 配置网络防火墙
        2. 修改运行模式
        3. 命中的策略进入日志,查看日志
      `} </pre>
  )
}

export default Net;
