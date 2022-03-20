import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Ignore;

public class test
{
    @Test
    public void passesTestOne()
    {
        assertEquals(42, (21 + 21));
    }

    @Test
    public void passesTestTwo()
    {
        assertEquals(99, (33 * 3));
    }

    @Test
    public void passesTestThree()
    {
        assertEquals("hello", "he" + "llo");
    }

    @Test
    public void passesTestFour()
    {
        assertEquals("world", "world" + "");
    }

    @Test
    public void failsTestFive()
    {
        assertEquals(42, (42 + 1));
    }

    @Test
    public void failsTestSix()
    {
        assertEquals(99, (99 - 1));
    }

    @Test
    public void failsTestSeven()
    {
        assertEquals("hello", "wo" + "rld");
    }

    @Test
    public void failsTestEight()
    {
        assertEquals("world", "hello" + "");
    }

    @Test @Ignore
    public void skipsTestNine()
    {
        assertEquals(42, 99);
    }

    @Test @Ignore
    public void skipsTestTen()
    {
        assertEquals(72, 72);
    }
}
