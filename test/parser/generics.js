'use strict';

var test = require('tape');

var parse = require('../../parser.js');

test('foo : Object<String, String>', function t(assert) {
    var content = 'foo : Object<String, String>';
    var result = parse(content).statements[0];

    assert.equal(result.type, 'assignment');
    assert.equal(result.identifier, 'foo');
    assert.deepEqual(result.typeExpression, {
        type: 'genericLiteral',
        value: {
            type: 'typeLiteral',
            line: 1,
            loc: {
                start: {
                    line: 1,
                    column: 6
                },
                end: {
                    line: 1,
                    column: 12
                }
            },
            concreteValue: null,
            isGeneric: false,
            genericIdentifierUUID: null,
            builtin: true,
            name: 'Object',
            _raw: null
        },
        generics: [{
            type: 'typeLiteral',
            line: 1,
            loc: {
                start: {
                    line: 1,
                    column: 13
                },
                end: {
                    line: 1,
                    column: 19
                }
            },
            concreteValue: null,
            isGeneric: false,
            genericIdentifierUUID: null,
            builtin: true,
            name: 'String',
            _raw: null
        }, {
            type: 'typeLiteral',
            line: 1,
            loc: {
                start: {
                    line: 1,
                    column: 21
                },
                end: {
                    line: 1,
                    column: 27
                }
            },
            concreteValue: null,
            isGeneric: false,
            genericIdentifierUUID: null,
            builtin: true,
            name: 'String',
            _raw: null
        }],
        _raw: null
    });

    assert.end();
});
