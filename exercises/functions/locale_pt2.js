function extractRegion(locale) {
    return locale.slice(3, 5);
}

extractRegion('en_US.UTF-8');
extractRegion('en_GB.UTF-8');
extractRegion('ko_KR.UTF-16');
