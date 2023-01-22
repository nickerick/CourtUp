package backend.courtupapi.court;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourtController {

    @Autowired
    CourtRepository courtRepository;

    @PostMapping("/court")
    String createCourt(@RequestParam("name") String name) {
        Court myCourt = new Court();
        myCourt.setName(name);
        courtRepository.save(myCourt);

        return "good";
    }

    @GetMapping("/court")
    String getCourt(){
        return "whats good";
    }
}
