#include "clar.h"

void test_test__passes_one(void)
{
    cl_assert_equal_i(42, (21 + 21));
}

void test_test__passes_two(void)
{
    cl_assert_equal_i(99, (33 * 3));
}

void test_test__passes_three(void)
{
    cl_assert_equal_s("hello", "he" "llo");
}

void test_test__passes_four(void)
{
    cl_assert_equal_s("world", "world" "");
}

void test_test__fails_five(void)
{
    cl_assert_equal_i(42, (42 + 1));
}

void test_test__fails_six(void)
{
    cl_assert_equal_i(99, (99 - 1));
}

void test_test__fails_seven(void)
{
    cl_assert_equal_s("hello", "world" "");
}

void test_test__fails_eight(void)
{
    cl_assert_equal_s("world", "he" "llo");
}

void test_test__skips_nine(void)
{
    cl_skip();
    cl_assert_equal_i(42, 99);
}

void test_test__skips_ten(void)
{
    cl_skip();
    cl_assert_equal_i(72, 72);
}

int main(int argc, char **argv)
{
    return clar_test(argc, argv);
}
