package backend.courtupapi.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class UserController  {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/user")
    public ResponseEntity<String> createUser(@RequestBody UserAccessForm userAccessForm) {

        User newUser = new User(userAccessForm.getEmail(), userAccessForm.getUsername(), userAccessForm.getPassword(), "f");
        userRepository.save(newUser);

        return new ResponseEntity<>("user " + newUser.getId() + " created", HttpStatus.OK);
    }

}
