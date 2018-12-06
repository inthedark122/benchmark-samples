# Run benchmark

## Info PC

All tests run on MacBook

| Name | Value |
| ---- | ----  |
| Processor | 2.9 GHz Intel Core i7 |

## Results

### CamelCase from lodash

```
CamelCase#default x 1,143,078 ops/sec ±0.60% (86 runs sampled)
CamelCase#memoize-lodash x 31,354,557 ops/sec ±0.66% (83 runs sampled)
CamelCase#memoize-vanila x 132,497,678 ops/sec ±0.61% (88 runs sampled)
CamelCase#memoize-fast x 1,750,271 ops/sec ±0.58% (89 runs sampled)
Fastest is CamelCase#memoize-vanila
```