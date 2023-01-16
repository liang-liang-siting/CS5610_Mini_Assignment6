import java.time.LocalDate;

/**
 * Class person starts information about a person's name, email, and address. All fields
 * are started as Strings.
 */
public class Person {

    private String name;
    private String email;
    private String address;
    //private LocalDate birthday;

    /**
     * Constructor for data type Person.
     * @param name - String name
     * @param email - String email
     * @param address - String address
     */

    public Person(String name, String email, String address) {
        this.name = name;
        this.email = email;
        this.address = address;
        //this.birthday = LocalDate.of(1984, 1, 1);
    }

    /**
     *
     * @return name, as a String
     */
    public String getName() {
        return name;
    }

    /**
     *
     * @return email, as a String
     */

    public String getEmail() {
        return email;
    }

    /**
     *
     * @return address, as a String
     */

    public String getAddress() {
        return address;
    }


}
