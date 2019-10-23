import * as inspect from 'unist-util-inspect';

const node = {
    type: 'node',
    data: {
        string: 'string',
        number: 1,
        object: {
            key: 'value'
        },
        array: [],
        boolean: true,
        null: null
    },
    position: {
        start: {
            line: 1,
            column: 1,
            offset: 0
        },
        end: {
            line: 1,
            column: 4,
            offset: 0
        },
        indent: [1]
    }
};

inspect(node);
