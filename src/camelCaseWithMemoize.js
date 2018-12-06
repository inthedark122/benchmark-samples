const Benchmark = require("benchmark");
const memoizeFast = require('fast-memoize');
const { camelCase, memoize } = require("lodash");

const suite = new Benchmark.Suite;
const value = "test_insert_value";
const memoizedValues = {};

const camelCaseMemoized = memoize(camelCase);
const camelCaseMemoizedFast = memoizeFast(camelCase);
const camelCaseMemoizedCustom = (value) => {
    if (memoizedValues[value]) {
        return memoizedValues[value];
    }

    const transfomedValue = camelCase(value);

    memoizedValues[value] = transfomedValue;

    return transfomedValue;
};


suite.add("CamelCase#default", function () {
    camelCase(value);
});

suite.add("CamelCase#memoize-lodash", function () {
    camelCaseMemoized(value);
})

suite.add("CamelCase#memoize-vanila", function () {
    camelCaseMemoizedCustom(value);
})

suite.add("CamelCase#memoize-fast", function () {
    camelCaseMemoizedFast(value);
})

suite.on('cycle', function (event) {
    console.log(String(event.target));
})

suite.on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})

suite.run({ async: true });