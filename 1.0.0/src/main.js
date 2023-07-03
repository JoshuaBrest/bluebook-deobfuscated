(() => {
    chrome.runtime.onMessageExternal.addListener(function (request, iHaveNoIdea, reply) {
        return fn(async () => {
            if ('get-web-app-url' === request.type) {
                const url = await fetch('https://chromebook-api.app.collegeboard.org/api.json')
                    .then((d) => d.json())
                    .url;
                
                reply({ url });
            } else if ('get-memory-info' === request.type) {
                reply(yield chrome.system.memory.getInfo());
            } else if ('get-device-info' === request.type) {
                const serialNumber = yield new Promise((resolve) => {
                    chrome.enterprise.deviceAttributes.getDeviceSerialNumber((serialNumber) => {
                        resolve(serialNumber || 'N/A');
                    });
                });
                const deviceData = {
                    version: chrome.runtime.getManifest().version,
                    serialNumber: serialNumber,
                    platform: yield chrome.runtime.getPlatformInfo(),
                    memory: yield chrome.system.memory.getInfo(),
                    display: yield chrome.system.display.getInfo(),
                    currentTime: Date.now(),
                    timezone: new Date().getTimezoneOffset().toString(),
                }
                reply(deviceData);
            } else if ('call-restart' == request.type) {
                chrome.runtime.restart();
            } else if ('check-kiosk' == request.type) {
                iHaveNoIdea({});
                // I don't think they implemented this
                // NOTE: ^^^
                reply({
                    message: !0
                });
            } else if ('get-serial-number' === request.type) {
                const serialNumber = yield new Promise((resolve) => {
                    chrome.enterprise.deviceAttributes.getDeviceSerialNumber((serialNumber) => {
                        resolve(serialNumber);
                    });
                });
                
                reply(serialNumber || null);
            } else {
                // I think this is for invalid messages
                reply({
                   message: 'N/A',
                });
            }
        });
    });
})();
