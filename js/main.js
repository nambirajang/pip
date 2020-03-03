function HandleOnClick(obj) {
    var vid_elm = document.getElementById("vidwindow1");
    var chatpan = document.getElementById("chatpan1");
    var vidsource= document.getElementById("videosource");
                    
    if( (obj.id == "BBBButton") || (obj.id == "EDButton") ||(obj.id == "GDButton") ) {
        console.log("Handle URL!!");
        vid_elm.pause();
        switch(obj.id)
        {
            case "BBBButton":
                vidsource.src = "BigBuckBunny.mp4"
                vidsource.type = 'video/mp4; pip=false;'
                break;
            
            case "EDButton":
                vidsource.src = "car_20130125_18.mp4"
                vidsource.type = 'video/mp4; pip=false;'
                break;
                
            case "GDButton":
                vidsource.src = "eye.mp4";
                vidsource.type = 'video/mp4; pip=false;'
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
    else if( (obj.id == "TopButton") || (obj.id == "MidButton") ||(obj.id == "BottomButton") ) {
        vid_elm.pause();
        switch(obj.id)
        {
            case "TopButton":
                chatpan.style.top = "10px";
                chatpan.style.right = "30px";
                break;
            
            case "MidButton":
                chatpan.style.top = "220px";
                chatpan.style.right = "30px";
                break;
                
            case "BottomButton":
                chatpan.style.top = "430px";
                chatpan.style.right = "30px";
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
    else if( (obj.id == "320Button") || (obj.id == "160Button") ) {
        vid_elm.pause();
        switch(obj.id)
        {
            case "320Button":
                vid_elm.width = 320;
                vid_elm.height = 180;
                break;
            
            case "160Button":
                vid_elm.width = 160;
                vid_elm.height = 90;
                break;
        }
        vid_elm.load();
        vid_elm.currentTime = 0;
        vid_elm.play();
    }
}
