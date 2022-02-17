package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.AuthenticationRequest;
import com.example.demo.models.AuthenticationResponse;
import com.example.demo.models.UserModel;
import com.example.demo.models.UserRepository;

@RestController
public class AuthController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/subs")
	private ResponseEntity<?>  subscribeClient(@RequestBody AuthenticationRequest authenticateRequest){
		String email= authenticateRequest.getEmail();
		String password= authenticateRequest.getPassword();
		String firstName= authenticateRequest.getFirstName();
		String lastName= authenticateRequest.getLastName();
		
		UserModel userModel = new UserModel();
		userModel.setEmail(email);
		userModel.setPassword(password);
		userModel.setFirstName(firstName);
		userModel.setLastName(lastName);
		try {
			userRepository.save(userModel);
			
		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error during client subscription" + email ));
			
		}
		
		
		return ResponseEntity.ok(new AuthenticationResponse("Successful Subscription for client" + email ));
		
	}
		
		
	
	
	
	@PostMapping("/auth")
	private ResponseEntity<?>  authenticateClient(@RequestBody AuthenticationRequest authenticateRequest){
		
		String email= authenticateRequest.getEmail();
		String password= authenticateRequest.getPassword();
		
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
			
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error during client Authentication" + email));
		}
		
		return ResponseEntity.ok(new AuthenticationResponse("Successful Subscription for client" + email ));
	
	
	
	

}
}
