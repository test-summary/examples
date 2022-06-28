# -*- coding: utf-8 -*-

import unittest


class TestStringMethods(unittest.TestCase):
    def test_upper(self):
        self.assertEqual("foo".upper(), "FOO")

    def test_isupper(self):
        self.assertTrue("FOO".isupper())
        self.assertTrue("Foo".isupper())


if __name__ == "__main__":
    unittest.main()
