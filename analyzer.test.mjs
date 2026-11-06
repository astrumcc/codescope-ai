import assert from 'node:assert/strict';
import { analyze } from './analyzer.mjs';
const report = analyze('def f(items=[]):\n    eval("1")\n    except:\n        pass # TODO');
assert.equal(report.lineCount, 4);
assert.deepEqual(report.findings.map(f => f.message), [
  'Mutable default argument', 'Review dynamic code execution',
  'Bare except catches unexpected exceptions', 'Unfinished work marker'
]);
assert.deepEqual(analyze('print("ok")').findings, []);
assert.equal(analyze('x = 1  ').findings[0].line, 1);
console.log('ALL_TESTS_PASSED');
