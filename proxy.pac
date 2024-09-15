function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*youtube.com*") || shExpMatch(host, "*.googlevideo.com*") || shExpMatch(host, "*play.google.com*") || shExpMatch(host, "*yt3.ggpht.com*") || shExpMatch(host, "*medium.com*") || shExpMatch(host, "*cactusvpn.com*") ) {
        return "PROXY 13.60.223.96:4123";
    }

    return "DIRECT";

}
