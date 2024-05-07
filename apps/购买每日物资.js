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
    var p = findImage(captureScreen(), images.read("/sdcard/脚本/尘白禁区/res/供应站推荐.png"), {
        region: [0, 50],
        threshold: 0.9
    });

    if(p){
        log("供应站");
        click(39, 369);
        break;  //找到图像后，跳出循环
    }else{
        sleep(1000);  // 设置循环间隔为1秒
        click(107, 336);
        attempts++;
        //如果没有找到图像，循环会继续，进行下一次截图
    }
    
}

var attempts = 0;
while(attempts < 100){

    //截图并找图
    var p = findImage(captureScreen(), images.read("/sdcard/脚本/尘白禁区/res/每日物资配给箱.png"), {
        region: [0, 50],
        threshold: 0.9
    });

    if(p){
        log("供应站");
        click(262, 357);
        break;  //找到图像后，跳出循环
    }else{
        sleep(1000);  // 设置循环间隔为1秒
        click(39, 373);
        attempts++;
        //如果没有找到图像，循环会继续，进行下一次截图
    }
    
}

var attempts = 0;
while(attempts < 100){

    //截图并找图
    var p = findImage(captureScreen(), images.read("/sdcard/脚本/尘白禁区/res/配给箱购买.png"), {
        region: [0, 50],
        threshold: 0.9
    });

    if(p){
        log("供应站");
        click(970, 549);
        break;  //找到图像后，跳出循环
    }else{
        sleep(1000);  // 设置循环间隔为1秒
        click(262, 357);
        attempts++;
        //如果没有找到图像，循环会继续，进行下一次截图
    }
    
}

exit()