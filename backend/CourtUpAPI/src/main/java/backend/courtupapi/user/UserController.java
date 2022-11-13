package backend.courtupapi.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController  {

    @PostMapping("/user")
    public String createUser(String email, String username, String password) {

        return "bruh";
    }

}
