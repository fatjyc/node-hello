var assert = require('assert');
var sayHello = require('../lib/hello');


describe('SayHello', function() {
    describe('chinese', function() {
        it('chinese return chinese', function () {
            assert.equal('你好，世界！', sayHello('chinese'))
        });
    });
    describe('japanese', function() {
        it('japanese return japanese', function () {
            assert.equal('こんにちは世界!', sayHello('japanese'))
        });
    });
    describe('english', function() {
        it('english return english', function () {
            assert.equal('Hello World!', sayHello('english'))
        });
    });
    describe('others', function() {
        it('others return english', function () {
            assert.equal('Hello World!', sayHello('javascript'))
        });
    });
});