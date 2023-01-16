import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PersonTest {

    private Person testPerson;
    private static final String EXPECTED_NAME = "Jon Snow"; //constant


    @BeforeEach
    void setUp() {
        testPerson = new Person("Jon Snow", "jon@noghtwatch.org", "The Wall");
    }

    @Test
    void getName() {
        String expectedName = "Jon Snow";
        assertEquals(expectedName, testPerson.getName());
    }

    @Test
    void getEmail() {
        String expectedEmail = "jon@noghtwatch.org";
        assertEquals(expectedEmail, testPerson.getEmail());
    }

    @Test
    void getAddress() {
        String expectedAddress = "The Wall";
        assertEquals(expectedAddress, testPerson.getAddress());
    }
}