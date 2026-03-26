import java.util.*;

public class Anagrams {
    public static List<String> anagrams(String input) {
        if (input.length() <= 1){
            return List.of(input); 
        }
        
        List<String> result = new ArrayList<>();
        
        for (int i = 0; i < input.length(); i++) {
            char current = input.charAt(i);
            String rest = input.substring(0, i) + input.substring(i + 1);
            
            for (String sub : anagrams(rest)) {
                result.add(current + sub);
            }
        }
        
        return result; 
    }
}