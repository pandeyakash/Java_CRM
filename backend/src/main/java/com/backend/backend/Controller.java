package com.backend.backend;

import java.util.HashMap;

import com.backend.backend.Customer.Customer;
import com.backend.backend.Customer.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "/api")
public class Controller {
    
    @Autowired
    private CustomerRepository customerRepository;

    @RequestMapping(method = RequestMethod.GET, path = "/list")
    public @ResponseBody ResponseEntity<?> getCustomerList(){
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("customerList", customerRepository.findAll());
        return new ResponseEntity<>(hashMap, HttpStatus.valueOf(200));
    }

    @RequestMapping(value="/add", method=RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> requestMethodName(@RequestBody HashMap<String, String> body) {
        HashMap<String, Object> hashMap = new HashMap<>();
        try{
            customerRepository.save(new Customer(body.get("firstName"), body.get("lastName"), body.get("email"), body.get("company")));

            hashMap.put("message", "Success");
            return new ResponseEntity<>(hashMap, HttpStatus.valueOf(200));
        } catch (Exception e) {
            hashMap.put("message", "Internal Server Error");
            return new ResponseEntity<>(hashMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
