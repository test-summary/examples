# -*- coding: utf-8 -*-

import time


def test_slow_passing():
    time.sleep(2)

    assert True
