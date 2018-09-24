function validateRequest(requestObj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    let patternUri = /^[A-Za-z0-9\.]+$/g;
    let messagePattern = /[\\\<\&\>\'\"]+/g;

    if (!requestObj.hasOwnProperty('method') || validMethods.indexOf(requestObj.method) < 0) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!requestObj.hasOwnProperty('uri') || requestObj.uri === '' || !patternUri.test(requestObj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!requestObj.hasOwnProperty('version') || validVersion.indexOf(requestObj.version) < 0) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!requestObj.hasOwnProperty('message') || messagePattern.test(requestObj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObj;
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
});
