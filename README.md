# Welcome to jiligulu

叽里咕噜是噼里啪啦的控制中心。  
通过使用叽里咕噜，您可以：  

* 管理评论
* 管理文章
* 编辑文章
* 客制化用户信息
* 查看统计信息
* 操作往期备份

jiligulu基于vue开发，使用vuetify构建UI。
它可以独立到本地运行：

* 通过浏览器启动
* 由Electron部署的app

也可以部署到pilipala服务器，成为网络应用（类似于Wordpress的后台方式）

jiligulu与pilipala的通信是安全的，它基于2048位RSA加密通信，每次会话均有基于时间戳的密钥握手。
