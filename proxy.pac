function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*youtube.com*") || shExpMatch(host, "*.googlevideo.com*") || shExpMatch(host, "*play.google.com*") || shExpMatch(host, "*yt3.ggpht.com*") || shExpMatch(host, "*medium.com*") || shExpMatch(host, "*cactusvpn.com*") ) {
        return "PROXY 51.20.98.76:4123";
    }

    return "DIRECT";

}
