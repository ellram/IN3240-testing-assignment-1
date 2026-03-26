import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class anagramTest {

    @Test
    void testSingleLetter() {
        assertEquals(List.of("a"), Anagrams.anagrams("a"));
    }
    
    @Test
    void twoLetters() {
        List<String> result = Anagrams.anagrams("ab");
        assertTrue(result.contains("ab"));
        assertTrue(result.contains("ba"));
        assertEquals(2, result.size());
    }
    
    @Test 
    void threeLetters() {
        List<String> result = Anagrams.anagrams("abc");
        assertEquals(6, result.size());
        assertTrue(result.contains("abc"));
        assertTrue(result.contains("cba"));
    }
       
    @Test
    void fourLetters() { 
        List<String> result = Anagrams.anagrams("brio");
        assertEquals(24, result.size());
    }
}
