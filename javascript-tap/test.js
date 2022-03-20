const tap = require('tap')

tap.equal(42, 21 + 21, "passes test one");
tap.equal(99, 33 * 3, "passes test two");
tap.equal("hello", "he" + "llo", "passes test three");
tap.equal("world", "world" + "", "passes test four");

tap.equal(42, 42 + 1, "fails test five");
tap.equal(99, 99 - 1, "fails test six");
tap.equal("hello", "world" + "", "fails test seven");
tap.equal("world", "he" + "llo", "fails test eight");

tap.test("skips test nine", { skip: true }, child => { tap.equal(42, 99); child.end() })
tap.test("skips test ten", { skip: true }, child => { tap.equal(72, 72); child.end() })
