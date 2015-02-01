addr=window.location.hash;
switch(addr){
    case "#dynmap":
        location.href="http://nyancat.moe:8123";
        break;
    case "#joinus":
        location.href="http://jq.qq.com/?_wv=1027&k=YFoxV4";
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