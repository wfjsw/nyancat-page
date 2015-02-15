addr=window.location.hash;
switch(addr){
    case "#dynmap":
        location.href="http://nyancat.moe:8123";
        break;
    case "#joinus":
        location.href="http://shang.qq.com/wpa/qunwpa?idkey=0395c235106889a7ac7a18feed2689e33aced47afa2ac27b96d9c350e8947dd3";
        break;
    case "#status":
        location.href="http://status.nyanyanya.moe";
        break;
    case "#skin":
        location.href="http://skin.qaq.gd";
        break;
    case "#client":
        location.href="http://jsw3286.eu.org/nyancat-client/";
        break;
    default :
        document.writeln("<p>No target was provided. Exiting...</p>");
        window.close();
        break;
}