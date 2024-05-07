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
    var p = findImage(captureScreen(), images.read("/sdcard/脚本/尘白禁区/res/解锁高级奖励.png"), {
        region: [0, 50],
        threshold: 0.9
    });

    if(p){
        break;  //找到图像后，跳出循环
    }else{
        click(236, 338);
        sleep(1000);  // 设置循环间隔为1秒
        attempts++;
        //如果没有找到图像，循环会继续，进行下一次截图
    }
    
}

click(754, 673);
sleep(2000);
click(122, 675);
sleep(2000);
click(958, 678);
sleep(2000);
click(122, 675);
sleep(2000);
click(1162, 678);
sleep(2000);
click(122, 675);
sleep(2000);
click(553, 680);
sleep(2000);
click(122, 675);
sleep(1000);

exit()

