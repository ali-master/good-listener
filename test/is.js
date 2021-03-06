var is = require('../src/is');

describe('is', function() {
    before(function() {
        global.node = document.createElement('div');
        global.node.setAttribute('id', 'foo');
        global.node.setAttribute('class', 'foo');
        document.body.appendChild(global.node);

        global.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        global.svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
        global.svg.setAttribute('id', 'svg');
        global.svg.setAttribute('class', 'svg');
        document.body.appendChild(global.svg);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    describe('is.node', function() {
        it('should be considered as node', function() {
            assert.ok(is.node(document.getElementById('foo')));
            assert.ok(is.node(document.getElementsByTagName('div')[0]));
            assert.ok(is.node(document.getElementsByClassName('foo')[0]));
            assert.ok(is.node(document.querySelector('.foo')));
        });

        it('should not be considered as node', function() {
            // is.nodeList
            assert.notOk(is.node(document.getElementsByTagName('div')));
            assert.notOk(is.node(document.getElementsByClassName('foo')));
            assert.notOk(is.node(document.querySelectorAll('.foo')));

            // is.string
            assert.notOk(is.node('abc'));
            assert.notOk(is.node(new String('abc')));

            // is.svg
            assert.notOk(is.node(document.getElementById('svg')));
            assert.notOk(is.node(document.getElementsByTagName('svg')[0]));
            assert.notOk(is.node(document.getElementsByClassName('svg')[0]));
            assert.notOk(is.node(document.querySelector('.svg')));

            // is.fn
            assert.notOk(is.node(function () {}));

            // everything else
            assert.notOk(is.node(undefined));
            assert.notOk(is.node(null));
            assert.notOk(is.node(false));
            assert.notOk(is.node(true));
            assert.notOk(is.node([]));
            assert.notOk(is.node({}));
            assert.notOk(is.node(/a/g));
            assert.notOk(is.node(new RegExp('a', 'g')));
            assert.notOk(is.node(new Date()));
            assert.notOk(is.node(42));
            assert.notOk(is.node(NaN));
            assert.notOk(is.node(Infinity));
            assert.notOk(is.node(new Number(42)));
        });
    });

    describe('is.nodeList', function() {
        it('should be considered as nodeList', function() {
            assert.ok(is.nodeList(document.getElementsByTagName('div')));
            assert.ok(is.nodeList(document.getElementsByClassName('foo')));
            assert.ok(is.nodeList(document.querySelectorAll('.foo')));
        });

        it('should not be considered as nodeList', function() {
            // is.node
            assert.notOk(is.nodeList(document.getElementById('foo')));
            assert.notOk(is.nodeList(document.getElementsByTagName('div')[0]));
            assert.notOk(is.nodeList(document.getElementsByClassName('foo')[0]));
            assert.notOk(is.nodeList(document.querySelector('.foo')));

            // is.string
            assert.notOk(is.nodeList('abc'));
            assert.notOk(is.nodeList(new String('abc')));

            // is.svg
            assert.notOk(is.nodeList(document.getElementById('svg')));
            assert.notOk(is.nodeList(document.getElementsByTagName('svg')[0]));
            assert.notOk(is.nodeList(document.getElementsByClassName('svg')[0]));
            assert.notOk(is.nodeList(document.querySelector('.svg')));

            // is.fn
            assert.notOk(is.nodeList(function () {}));

            // everything else
            assert.notOk(is.nodeList(undefined));
            assert.notOk(is.nodeList(null));
            assert.notOk(is.nodeList(false));
            assert.notOk(is.nodeList(true));
            assert.notOk(is.nodeList([]));
            assert.notOk(is.nodeList({}));
            assert.notOk(is.nodeList(/a/g));
            assert.notOk(is.nodeList(new RegExp('a', 'g')));
            assert.notOk(is.nodeList(new Date()));
            assert.notOk(is.nodeList(42));
            assert.notOk(is.nodeList(NaN));
            assert.notOk(is.nodeList(Infinity));
            assert.notOk(is.nodeList(new Number(42)));
        });
    });

    describe('is.string', function() {
        it('should be considered as string', function() {
            assert.ok(is.string('abc'));
            assert.ok(is.string(new String('abc')));
        });

        it('should not be considered as string', function() {
            // is.node
            assert.notOk(is.string(document.getElementById('foo')));
            assert.notOk(is.string(document.getElementsByTagName('div')[0]));
            assert.notOk(is.string(document.getElementsByClassName('foo')[0]));
            assert.notOk(is.string(document.querySelector('.foo')));

            // is.nodeList
            assert.notOk(is.string(document.getElementsByTagName('div')));
            assert.notOk(is.string(document.getElementsByClassName('foo')));
            assert.notOk(is.string(document.querySelectorAll('.foo')));

            // is.svg
            assert.notOk(is.string(document.getElementById('svg')));
            assert.notOk(is.string(document.getElementsByTagName('svg')[0]));
            assert.notOk(is.string(document.getElementsByClassName('svg')[0]));
            assert.notOk(is.string(document.querySelector('.svg')));

            // is.fn
            assert.notOk(is.string(function () {}));

            // everything else
            assert.notOk(is.string(undefined));
            assert.notOk(is.string(null));
            assert.notOk(is.string(false));
            assert.notOk(is.string(true));
            assert.notOk(is.string([]));
            assert.notOk(is.string({}));
            assert.notOk(is.string(/a/g));
            assert.notOk(is.string(new RegExp('a', 'g')));
            assert.notOk(is.string(new Date()));
            assert.notOk(is.string(42));
            assert.notOk(is.string(NaN));
            assert.notOk(is.string(Infinity));
            assert.notOk(is.string(new Number(42)));
        });
    });

    describe('is.svg', function() {
        it('should be considered as svg', function() {
            assert.ok(is.svg(document.getElementById('svg')));
            assert.ok(is.svg(document.getElementsByTagName('svg')[0]));
            assert.ok(is.svg(document.getElementsByClassName('svg')[0]));
            assert.ok(is.svg(document.querySelector('.svg')));
        });

        it('should not be considered as svg', function() {
            // is.node
            assert.notOk(is.svg(document.getElementById('foo')));
            assert.notOk(is.svg(document.getElementsByTagName('div')[0]));
            assert.notOk(is.svg(document.getElementsByClassName('foo')[0]));
            assert.notOk(is.svg(document.querySelector('.foo')));

            // is.nodeList
            assert.notOk(is.svg(document.getElementsByTagName('div')));
            assert.notOk(is.svg(document.getElementsByClassName('foo')));
            assert.notOk(is.svg(document.querySelectorAll('.foo')));

            // is.string
            assert.notOk(is.svg('abc'));
            assert.notOk(is.svg(new String('abc')));

            // is.fn
            assert.notOk(is.svg(function () {}));

            // everything else
            assert.notOk(is.svg(undefined));
            assert.notOk(is.svg(null));
            assert.notOk(is.svg(false));
            assert.notOk(is.svg(true));
            assert.notOk(is.svg([]));
            assert.notOk(is.svg({}));
            assert.notOk(is.svg(/a/g));
            assert.notOk(is.svg(new RegExp('a', 'g')));
            assert.notOk(is.svg(new Date()));
            assert.notOk(is.svg(42));
            assert.notOk(is.svg(NaN));
            assert.notOk(is.svg(Infinity));
            assert.notOk(is.svg(new Number(42)));
        });
    });

    describe('is.fn', function() {
        it('should be considered as function', function() {
            assert.ok(is.fn(function () {}));
        });

        it('should not be considered as function', function() {
            // is.node
            assert.notOk(is.fn(document.getElementById('foo')));
            assert.notOk(is.fn(document.getElementsByTagName('div')[0]));
            assert.notOk(is.fn(document.getElementsByClassName('foo')[0]));
            assert.notOk(is.fn(document.querySelector('.foo')));

            // is.nodeList
            assert.notOk(is.fn(document.getElementsByTagName('div')));
            assert.notOk(is.fn(document.getElementsByClassName('foo')));
            assert.notOk(is.fn(document.querySelectorAll('.foo')));

            // is.string
            assert.notOk(is.fn('abc'));
            assert.notOk(is.fn(new String('abc')));

            // is.svg
            assert.notOk(is.fn(document.getElementById('svg')));
            assert.notOk(is.fn(document.getElementsByTagName('svg')[0]));
            assert.notOk(is.fn(document.getElementsByClassName('svg')[0]));
            assert.notOk(is.fn(document.querySelector('.svg')));

            // everything else
            assert.notOk(is.fn(undefined));
            assert.notOk(is.fn(null));
            assert.notOk(is.fn(false));
            assert.notOk(is.fn(true));
            assert.notOk(is.fn([]));
            assert.notOk(is.fn({}));
            assert.notOk(is.fn(/a/g));
            assert.notOk(is.fn(new RegExp('a', 'g')));
            assert.notOk(is.fn(new Date()));
            assert.notOk(is.fn(42));
            assert.notOk(is.fn(NaN));
            assert.notOk(is.fn(Infinity));
            assert.notOk(is.fn(new Number(42)));
        });
    });
});
