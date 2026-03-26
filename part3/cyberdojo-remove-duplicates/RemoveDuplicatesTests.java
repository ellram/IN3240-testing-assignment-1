//TESTS for RemoveDuplicates()

//I began by writing a test for the simplest case (empty list). After resolving initial compilation issues, the test failed because the method returned null. I then implemented the minimal functionality required to pass the test by returning an empty list.
//TEST 1: return an empty list when given an empty list

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*;

public class RemoveDuplicatesTest {
    @Test
    void emptyListReturnsEmptyList() {
        assertEquals(List.of(), RemoveDuplicates.remove(List.of()));
    }
}

// Initial test failed
public class RemoveDuplicates {
    public static List<Integer> remove(List<Integer> nlist) {
        return null;
    }
}

// test PASSED after changes to remove()

public class RemoveDuplicates {
    public static List<Integer> remove(List<Integer> nlist) {
        return List.of();
    }
}


//I added a test for lists without duplicates. To satisfy this requirement, I returned the input list directly, which was the simplest solution that made the test pass.
//TEST 2: Function returns the same list if there are no duplicates

@Test
    void listWithoutDuplicatesReturnsSameList() {
        assertEquals(List.of(1, 2),
            RemoveDuplicates.remove(List.of(1, 2)));
    }

// initial test, failed
public class RemoveDuplicates {
    public static List<Integer> remove(List<Integer> nlist) {
        return List.of();
    }
}

// test PASSED after changes to remove()

public class RemoveDuplicates {
    public static List<Integer> remove(List<Integer> nlist) {
        return nlist;
    }
}


//I introduced a test case containing duplicate elements. The test failed, as expected, since the implementation returned the input list. I then updated the implementation to remove duplicates while maintaining the elements’ original order. The result was then converted back to a list. The test passed. Please note that I had a couple of compilation errors here before the test passed and therefore have a few amber cycles.
//TEST 3: The function removes duplicate elements from the list and preserves order of elements.

    @Test
    void removesDuplicatesTest() {
        assertEquals(List.of(1, 2),
                     RemoveDuplicates.remove(List.of(1, 1, 2, 2)));
    }

// failed

public class RemoveDuplicates {
    public static List<Integer> remove(List<Integer> nlist) {
        return nlist;
    }
}


// test PASSED after changes to remove()

public class RemoveDuplicates {
    public static List<Integer> remove(List<Integer> nlist) {
        return new ArrayList<>(new LinkedHashSet<>(nlist));
    }
}
