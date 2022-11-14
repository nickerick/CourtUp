package backend.courtupapi.user;

import com.google.common.hash.Hashing;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;

public class PasswordUtility {

    public static String[] hashPassword(String password) {
        String passwordSalt = generateSalt();

        String hashedPassword = Hashing.sha256()
                .hashString(passwordSalt + password, StandardCharsets.UTF_8)
                .toString();

        return new String[] {hashedPassword, passwordSalt};
    }

    public static String hashPassword(String password, String passwordSalt) {
        String hashedPassword = Hashing.sha256()
                .hashString(passwordSalt + password, StandardCharsets.UTF_8)
                .toString();

        return hashedPassword;
    }

    private static String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte bytes[] = new byte[20];
        random.nextBytes(bytes);

        return bytes.toString();
    }

    public static boolean comparePasswords(String realPassword, String passwordSalt, String tryPassword) {
        String comparePassword = hashPassword(tryPassword, passwordSalt);

        if (realPassword.equals(comparePassword)) {
            return true;
        }

        return false;
    }

}
