package com.taxiapp.chatbox.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.client.RestTemplate;

import com.taxiapp.chatbox.models.ChatMessage;
import com.taxiapp.chatbox.models.UserDetails;

@Controller
public class ChatController {
	
	@Autowired
	RestTemplate restTemplate;

	/*-------------------- Group (Public) chat--------------------*/
	@MessageMapping("/sendMessage")
	@SendTo("/topic/pubic")
	public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
		return chatMessage;
	}

	@MessageMapping("/addUser")
	@SendTo("/topic/pubic")
	public ChatMessage addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
		// Add user in web socket session
		ResponseEntity<UserDetails> user = restTemplate.getForEntity("http://authentication/api/auth/signin", UserDetails.class);
		System.out.println(user);
		headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
		return chatMessage;
	}

	/*--------------------Private chat--------------------*/
	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@MessageMapping("/sendPrivateMessage")
	// @SendTo("/queue/reply")
	public void sendPrivateMessage(@Payload ChatMessage chatMessage) {
		simpMessagingTemplate.convertAndSendToUser(chatMessage.getReceiver().trim(), "/reply", chatMessage);
		// return chatMessage;
	}

	@MessageMapping("/addPrivateUser")
	@SendTo("/queue/reply")
	public ChatMessage addPrivateUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
		// Add user in web socket session
		headerAccessor.getSessionAttributes().put("private-username", chatMessage.getSender());
		return chatMessage;
	}
}
