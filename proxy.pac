function FindProxyForURL(url, host) {
    // Если URL начинается с "http" и хост в списке, используем указанный прокси
    if (shExpMatch(host, "*youtube.com*") || shExpMatch(host, "*.googlevideo.com*") || shExpMatch(host, "*play.google.com*") || shExpMatch(host, "*yt3.ggpht.com*") || shExpMatch(host, "*googleads*") ) {

        return "PROXY 51.20.82.160:4123";
    }
    // В противном случае, не использовать прокси
    return "DIRECT";

}
