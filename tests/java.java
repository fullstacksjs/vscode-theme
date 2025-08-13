package com.fullstacksjs.example;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

import com.oracle.svm.core.annotate.Inject;

/**
 * Comprehensive Java test class to showcase theme coloring
 * @author FullStacksJS
 * @version 1.0
 */
@SpringBootApplication
@Service
public class java extends BaseClass implements Runnable, Serializable {

    // Class variables (should be Magenta)
    @Inject
    private UserService userService;

    private static final String CONSTANT_VALUE = "Hello World";
    private final Logger logger = LoggerFactory.getLogger(java.class);
    private List<String> itemList;
    private Optional<LocalDate> createdDate;
    private boolean isActive;
    private int count;
    private double price;

    // Constructor
    public java() {
        this.itemList = new ArrayList<>();
        this.isActive = true;
        this.count = 0;
        this.price = 99.99;
    }

    // Method with parameters (parameters should be white/neutral)
    @Override
    public void run() {
        try {
            processData("sample data", 42, true);
        } catch (IllegalArgumentException e) {
            logger.error("Error processing data", e);
            throw new RuntimeException("Processing failed", e);
        } finally {
            cleanup();
        }
    }

    // Method with local variables (local variables should be white/neutral)
    private void processData(String inputData, int maxCount, boolean verbose) {
        // Local variables (should be white/neutral)
        String processedData = inputData.toUpperCase();
        int currentCount = 0;
        List<String> results = new ArrayList<>();
        LocalDate today = LocalDate.now();

        // Control flow (keywords should be orange)
        if (verbose && processedData != null) {
            System.out.println("Processing: " + processedData);
        }

        while (currentCount < maxCount) {
            for (char c : processedData.toCharArray()) {
                switch (c) {
                    case 'A':
                        results.add("Found A");
                        break;
                    case 'B':
                        results.add("Found B");
                        continue;
                    default:
                        // do nothing
                        break;
                }
            }
            currentCount++;
        }

        // More keywords and types
        assert results != null : "Results should not be null";

        if (results instanceof List) {
            this.itemList.addAll(results);
        }
    }

    // Generic method with annotations
    @SuppressWarnings("unchecked")
    public <T extends Comparable<T>> Optional<T> findMax(List<T> items) {
        // Local variables in generic method
        T maxItem = null;
        boolean foundAny = false;

        for (T item : items) {
            if (!foundAny || item.compareTo(maxItem) > 0) {
                maxItem = item;
                foundAny = true;
            }
        }

        return foundAny ? Optional.of(maxItem) : Optional.empty();
    }

    // Static method with various types
    public static synchronized void staticMethod() {
        // Primitive types (should be orange as keywords)
        byte byteVar = 127;
        short shortVar = 32767;
        int intVar = 2147483647;
        long longVar = 9223372036854775807L;
        float floatVar = 3.14f;
        double doubleVar = 3.141592653589793;
        char charVar = 'A';
        boolean boolVar = false;

        // Object types (should be white/neutral)
        String stringVar = "Hello";
        Integer integerVar = Integer.valueOf(42);
        Double doubleObjVar = Double.parseDouble("3.14");

        // Arrays
        int[] intArray = new int[10];
        String[] stringArray = {"one", "two", "three"};
        List<String>[] listArray = new List[5];
    }

    // Abstract and interface examples
    public abstract class AbstractExample {
        protected abstract void abstractMethod();

        public final void finalMethod() {
            // Implementation
        }
    }

    public interface InterfaceExample {
        String INTERFACE_CONSTANT = "constant";

        void interfaceMethod();

        default void defaultMethod() {
            System.out.println("Default implementation");
        }
    }

    // Enum example
    public enum Status {
        ACTIVE("Active"),
        INACTIVE("Inactive"),
        PENDING("Pending");

        private final String displayName;

        Status(String displayName) {
            this.displayName = displayName;
        }

        public String getDisplayName() {
            return displayName;
        }
    }

    // Exception handling
    private void cleanup() throws Exception {
        try {
            if (userService != null) {
                userService.cleanup();
            }
        } catch (Exception e) {
            throw new Exception("Cleanup failed", e);
        }
    }

    // Main method
    public static void main(String[] args) {
        java test = new java();

        try {
            test.run();
        } catch (RuntimeException e) {
            e.printStackTrace();
        }
    }
}
