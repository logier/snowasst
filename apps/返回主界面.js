setScreenMetrics(1280, 720);
auto();

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
requestScreenCapture();

var attempts = 0;
while(attempts < 100){

    //截图并找图
    var p = findImage(captureScreen(), images.read("/sdcard/脚本/尘白禁区/res/设置终端.png"), {
        region: [0, 50],
        threshold: 0.9
    });

    if(p){
        log("进入主界面");
        click(1223, 60);
        sleep(1000); 
        break;  //找到图像后，跳出循环
    }else{
        log("关闭可能的弹窗");
        click(1228, 33);
        sleep(1000);  // 设置循环间隔为1秒
        attempts++;
        //如果没有找到图像，循环会继续，进行下一次截图
    }
    
}