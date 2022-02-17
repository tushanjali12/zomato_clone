package com.example.demo.service;
import java.util.List;

import com.example.demo.model.Order;


public interface OrderService {

	public List<Order> findAll();
	public List<Order> findByUsername(String username);
}
