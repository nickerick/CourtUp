package backend.courtupapi.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class UserController  {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/user")
    public ResponseEntity<String> createUser(@RequestBody UserAccessForm userAccessForm) {
        if (userRepository.findByEmail(userAccessForm.getEmail()) != null) {
            return new ResponseEntity<>("Email already exists.", HttpStatus.CONFLICT);
        }

        if (userRepository.findByUsername(userAccessForm.getUsername()) != null) {
            return new ResponseEntity<>("Username already exists.", HttpStatus.CONFLICT);
        }

        if (userAccessForm.getEmail() == null || userAccessForm.getUsername() == null || userAccessForm.getPassword() == null) {
            return new ResponseEntity<>("Missing fields.", HttpStatus.BAD_REQUEST);
        }

        // Salting + Hashing password
        String[] passwordInfo = PasswordUtility.hashPassword(userAccessForm.getPassword());

        User newUser = new User(userAccessForm.getEmail(), userAccessForm.getUsername(), passwordInfo[0], passwordInfo[1]);
        userRepository.save(newUser);

        return new ResponseEntity<>("user " + newUser.getId() + " created.", HttpStatus.OK);
    }

    @PostMapping("/user/login")
    public ResponseEntity<String> login(@RequestBody UserAccessForm userAccessForm) {
        User requestedUser = userRepository.findByEmail(userAccessForm.getEmail());

        if (requestedUser == null) {
            return new ResponseEntity<>("Invalid Credentials", HttpStatus.UNAUTHORIZED);
        }

        if (!PasswordUtility.comparePasswords(requestedUser.getPassword(), requestedUser.getPassSalt(), userAccessForm.getPassword())) {
            return new ResponseEntity<>("Invalid pas", HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>("{\"msg\": \"bruh\"}", HttpStatus.OK);
    }

}
