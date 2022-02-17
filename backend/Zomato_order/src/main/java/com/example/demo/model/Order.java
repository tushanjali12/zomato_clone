package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="orders")
public class Order {
	
	@Id
	private String orderId;
	private String username;
	private String name;
	private double price;
	private double quantity;
	private double totalPrice;
	private String debitNo;
	private String address;
	public Order(String username, String name, double price, double quantity, double totalPrice, String debitNo,
			String address) {
		super();
		this.username = username;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.debitNo = debitNo;
		this.address = address;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getQuantity() {
		return quantity;
	}
	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	public double getTotalPrice(double price,double quantity) {
		totalPrice=price * quantity;
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public String getDebitNo() {
		return debitNo;
	}
	public void setDebitNo(String debitNo) {
		this.debitNo = debitNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
}
	
