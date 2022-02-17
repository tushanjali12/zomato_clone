package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.models.UserModel;
import com.example.demo.models.UserRepository;

@Service
public class UserService implements UserDetailsService  {
	
	@Autowired
	private UserRepository userRepository;
	

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		 UserModel foundedUser = userRepository.findByEmail(email);
		 if(foundedUser == null) return null;
		 
		 String name = foundedUser.getEmail();
		 String pwd = foundedUser.getPassword();
		 
		return new User(name, pwd, null);
	}

}
