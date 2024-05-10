 
var data = [  
    {"title":"密码管理","describe":"“密码管理”是一款安全、便捷的密码管理工具，旨在帮助用户解决密码过多、难以记忆和管理的难题,且支持github 2FA认证"
    ,"apkPath":"./apk/passwordManager.apk"},  
    {"title":"连点器","describe":"连点器”是一款专为需要自动化点击操作的用户设计的高效工具。不论您是在游戏中需要重复点击某个位置，还是在日常使用中需要进行大量的点击操作，这款“连点器”都能助您一臂之力。",
    "apkPath":"./apk/clickDevice.apk"} , 
    {"title":"尺子", "describe":"“尺子”是一款专为现代移动设备用户设计的实用测量工具应用。其实就是一把尺子",
    "apkPath":"./apk/rule.apk"} , 
    {"title":"BlackBox64","describe":"只支持64位应用。黑盒BlackBox，是一款虚拟引擎，可以在Android上克隆、运行虚拟应用，拥有免安装运行能力。黑盒可以掌控被运行的虚拟应用，做任何想做的事情。支持xposed模块哦。",
    "apkPath":"./apk/BlackBox64.apk"} , 
    {"title":"BlackBox32","describe":"只支持32位应用。黑盒BlackBox，是一款虚拟引擎，可以在Android上克隆、运行虚拟应用，拥有免安装运行能力。黑盒可以掌控被运行的虚拟应用，做任何想做的事情。支持xposed模块哦。",
    "apkPath":"./apk/BlackBox32.apk"} , 
    {"title":"隐藏图","describe":"利用图像透明度,实现图片在黑白背景显示两张不同的图片。",
    "apkPath":"./apk/hideImg.apk"} , 
    {"title":"电池查看助手","describe":"可以查看当前电池实时的功耗,还可以计算手机电池容量。",
    "apkPath":"./apk/batteryHelper.apk"} , 
    {"title":"tiktok模块","describe":"xposed模块。解除tiktok应用对国内sim卡禁用限制。",
    "apkPath":"./apk/xposed_tiktok.apk"} , 
    {"title":"位置模拟模块","describe":"xposed模块。实现虚拟位置功能。",
    "apkPath":"./apk/xposed_location.apk"} , 
    {"title":"activity查看模块","describe":"xposed模块。查看应用的activity、布局、view信息、dialog、fragment。",
    "apkPath":"./apk/xposed_activity.apk"} , 
    {"title":"LSPatch","describe":"免rootxp模块框架APP。",
    "apkPath":"./apk/lspatch.apk"} , 
    {"title":"文件复制","describe":"一些应用的文件无法通过文件管理器范问 如qq、微信等,可通过将文件分享到本应用,然后就可将文件复制到可范问的文件夹下。",
    "apkPath":"./apk/fileCopy.apk"} , 
];  
  
function addListItems(data) {    
    var list = document.getElementById('data-list');    
    
    // 清空现有列表项（如果有的话）    
    while (list.firstChild) {    
        list.removeChild(list.firstChild);    
    }    
    
    data.forEach(function(item) {    
        var listItem = document.createElement('li');    
    
        // 创建标题和描述元素    
        var titleElement = document.createElement('span');    
        titleElement.className = 'title';    
        titleElement.textContent = item.title;    
    
        var describeElement = document.createElement('span');    
        describeElement.className = 'describe';    
        describeElement.textContent = item.describe;    
    
        // 创建下载按钮    
        var downloadButton = document.createElement('button');
        downloadButton.className='download-btn'    
        downloadButton.textContent = '下载';    
          
        // 添加点击事件监听器到下载按钮  
        if (item.apkPath) { // 确保 apkPath 存在  
            downloadButton.addEventListener('click', function() {  
                // 创建隐藏的a标签来触发下载  
                var a = document.createElement('a');  
                a.href = item.apkPath; // 设置下载链接  
                a.download = item.title+'.apk'; // 设置下载的文件名，这里可以根据需要更改  
                a.style.display = 'none'; // 隐藏a标签  
                document.body.appendChild(a); // 将a标签添加到body中  
                a.click(); // 模拟点击a标签来触发下载  
                document.body.removeChild(a); // 下载后移除a标签  
            });  
        } else {  
            // 如果 apkPath 为空，则禁用按钮或隐藏它  
            downloadButton.disabled = true;  
            // 或者 downloadButton.style.display = 'none';  
        }  
    
        // 将标题、描述和下载按钮添加到列表项中    
        listItem.appendChild(titleElement);    
        listItem.appendChild(document.createElement('br')); // 可选，添加换行    
        listItem.appendChild(describeElement);    
        listItem.appendChild(document.createElement('br')); // 可选，在描述和按钮之间添加换行  
        listItem.appendChild(downloadButton);    
    
        // 将列表项添加到列表中    
        list.appendChild(listItem);    
    });    
}    
  
// 调用函数来添加列表项    
addListItems(data);