var sayHello = (language) => {
    if (language == 'chinese') {
        return '你好，世界！'
    }
    if (language == 'japanese') {
        return 'こんにちは世界!';
    }
    return 'Hello World!';
}

module.exports = sayHello;
