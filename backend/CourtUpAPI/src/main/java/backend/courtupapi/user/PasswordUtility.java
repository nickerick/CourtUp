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

    private static String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte bytes[] = new byte[20];
        random.nextBytes(bytes);

        return bytes.toString();
    }

}
