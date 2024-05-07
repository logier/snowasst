/*
"ui";
ui.layout(
    `<vertical padding="16">
        <text w="auto" text="设备分辨率：${device.width}*${device.height}" />
        <text w="auto" text="当前版本：${app.versionName}"/>
        <checkbox id="start" text="开始游戏"/>
        <button id="ok" text="确定"/>
    </vertical>`
);



requestScreenCapture();

ui.ok.on("click", ()=>{

    if (ui.start.checked){
        auto();
        setScreenMetrics(1280, 720);
        if(device.sdkInt>28){
            threads.start(function () {
                packageName('com.android.systemui').text('立即开始').waitFor();
                text('立即开始').click();
            });
        }

        if (!requestScreenCapture(true)) {
            toast("请求截图失败");
            exit()
        }
    
        app.launchApp('尘白禁区')

        var attempts = 0;
        while(attempts < 100){
            //截图并找图
            var p = findImage(captureScreen(), images.read("/sdcard/脚本/尘白助手/res/适龄提示.png"), {
                region: [0, 50],
                threshold: 0.9
            });

            if(p){
                log("开始游戏:");
                click(644, 609);
                break;  //找到图像后，跳出循环
            }else{
                log("等待游戏启动");
                sleep(1000);  // 设置循环间隔为1秒
                attempts++;
                //如果没有找到图像，循环会继续，进行下一次截图
            }
            
        }     
    }


});
*/

"ui";

ui.layout(
    <vertical padding="16">
        <button id="click_me" text="启动脚本" w="auto" style="Widget.AppCompat.Button.Colored"/>
    </vertical>
);



ui.click_me.on("click", ()=>{

    toast("启动尘白禁区");

    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/启动游戏.js");
    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/返回主界面.js");

    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/好友赠送.js");
    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/返回主界面.js");

    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/购买每日物资.js");
    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/返回主界面.js");
    
    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/领取邮件.js");
    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/返回主界面.js");

    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/夜阑凭证.js");
    engines.execScriptFile("/sdcard/脚本/尘白禁区/apps/返回主界面.js");

    exit()

});


