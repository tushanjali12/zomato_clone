package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;



@RestController
public class OrderController {

	private final OrderRepository orderRepository;
	
	public OrderController(OrderRepository orderRepository) {
		this.orderRepository=orderRepository;
	}
	@Autowired
	public OrderService service;
	
	@CrossOrigin(origins = "http://localhost:3000")

	@GetMapping("/orders")
	public List<Order> getOrders(){
		return orderRepository.findAll();
	}
	@CrossOrigin(origins = "http://localhost:3000")

	@PostMapping("/order/create")
	public String createProduct(@RequestBody Order order) {
		Order insertedOrder = orderRepository.insert(order);
		return "Order Placed By "+ insertedOrder.getUsername();
	}
	@CrossOrigin(origins = "http://localhost:3000")

	@DeleteMapping("/delete/{orderId}")
	public void deleteCart(@PathVariable String orderId) {
		 orderRepository.deleteById(orderId);
		
	}
	@CrossOrigin(origins = "http://localhost:3000")

	@GetMapping("/order/{username}")
	public List<Order> getCartByUsername(@PathVariable String username){
		return service.findByUsername(username);
	}

	
	
	
}
