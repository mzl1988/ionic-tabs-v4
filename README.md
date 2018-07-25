#ionic-tabs

## ionic v4 安装

* npm i -g ionic@rc
* ionic config set -g features.project-angular true 以启用离子角4项目

## 安装Cordova

* npm install -g cordova
* cordova -version 查看版本号

## Homebrew is “the missing package manager for macOS”.
* 安装前请看https://gradle.org/install/#with-a-package-manager
* brew install gradle

## 创建项目

* ionic start ionic-tabs tabs --type=angular


## 在浏览器中运行
* ionic serve

## 主题化

Ionic App支持主题风格。要改变主题，只需要调整src/theme/variables.scss文件中的$colors

## plugin 安装 https://cordova.apache.org/plugins/

安装cordova插件的时候用ionic cordova plugin add ...的方式添加，这样会在package.json中添加这个插件的条目，如果有人clone了你的项目想在本地运行，可以用ionic state restore它会根据cordovaPlugins条目安装对应的插件。如果直接用cordova plugin add 安装则不会更新package.json。
删除用 ionic cordova plugin remove

## 兼容android4.0
* cordova-plugin-crosswalk-webview

## platform 平台

* ionic cordova platform add android
* ionic cordova platform add ios

## 移除平台

* ionic cordova platform remove android
* ionic cordova platform remove ios

## emulate 将Ionic项目部署到模拟器或仿真器上

emulate命令将App部署到特定的平台设备上。你也可以通过在特定的模拟器上添加--livereload选项运行live reload。live reload功能类似ionic serve，但是不是使用标准的浏览器来开发和调试，编译后的hybrid应用本身会监控任何文件改变并在需要的时候重新载入App。这降低了针对小改动需要频繁重新编译App的需求。然而任何插件的改变将导致完全的重新编译。为使live reload能够正常工作，开发机和模拟器必须在一个相同的本地网络中，并且设备必须支持web sockets。

* ionic cordova emulate android --lc --address 192.168.xx.xx
* ionic cordova emulate android --lc --livereload --address 192.168.xx.xx --port 6228 --livereload-port 35700 --dev-logger-port 53700

## run 在连接的设备上运行Ionic项目

run命令将应用部署到指定的设备上。你可以通过添加--livereload选项在指定的平台设备上运行live reload。live reload功能类似ionic serve，但是不是使用标准的浏览器来开发和调试，编译后的hybrid应用本身会监控任何文件改变并在需要的时候重新载入App。这降低了针对小改动需要频繁重新编译App的需求。然而任何插件的改变将导致完全的重新编译。为使live reload能够正常工作，开发机和模拟器必须在一个相同的本地网络中，并且设备必须支持web sockets。

* ionic cordova run android --lc --livereload
* ionic cordova run android --lc --address 192.168.xx.xx --port 6228 --livereload

## 制作签名文件(.keystore文件)
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias

## build

* 打包debug调试版（生成的apk就是debug调试版本） ionic cordova build android --prod
* 打包release发布版（release版本是必须有签名才能在手机上运行） ionic cordova build android --prod --release --buildConfig
* ionic cordova build ios —prod 再用xcode导出

## info

* ionic info 列出用户的Ionic运行环境信息

## 远程调试——Android和Chrome

Chrome DevTools开发者工具是调试应用的有力工具。当你使用ionic serve命令在浏览器中运行应用的时候，DevTools可以用来检查元素，查看console日志，分析应用或其他更多功能。
DevTools除了可以在浏览器中调试应用，还可以用来远程调试物理设备甚至Genymotion模拟器中的应用。首先，我们需要安装adb。安装后一旦设备连接上，或Android模拟器运行起来的时候，你可以运行下面的命令来查看设备列表：
$ adb devices
然后在Chrome中打开chrome://inspect/#devices来查看Android设备。注意，也许需要改变设备的设置来允许USB调试。注意你可以使用Chrome来调试应用，就像在浏览器中那样！

## Using ngx-translate
* https://ionicframework.com/docs/developer-resources/ng2-translate/
* https://github.com/ngx-translate/core

## 脚手架
＄ionic generate
? What would you like to generate? 
❯ page 
  component 
  service 
  module 
  class 
  directive 
  guard

# 生命周期
* ionViewLoaded 页面加载完毕触发。该事件发生在页面被创建成 DOM 的时候，且仅仅执行一次。如果页面被缓存（Ionic默认是缓存的）就不会再次触发该事件。该事件中可以放置初始化页面的一些事件。
* ionViewWillEnter 即将进入一个页面变成当前激活页面的时候执行的事件。
* ionViewDidEnter 进入了一个页面且变成了当前的激活页面，该事件不管是第一次进入还是缓存后进入都将执行。
* ionViewWillLeave 将要离开了该页面之后变成了不是当前激活页面的时候执行的事件。
* ionViewDidLeave 在页面完成了离开该页面并变成了不是当前激活页面的时候执行的事件。
* ionViewWillUnload 在页面销毁和页面中有元素移除之前执行的事件。
* ionViewDidUnload 在页面销毁和页面中有元素移除之后执行的事件。
# ionic-tabs-v4
