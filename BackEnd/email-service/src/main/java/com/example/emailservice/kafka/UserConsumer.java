package com.example.emailservice.kafka;

import com.example.baseservice.dto.EmailEvent;
import com.example.emailservice.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.MessagingException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UserConsumer {

    @Autowired
    private EmailService emailService;
    private static final Logger LOGGER = LoggerFactory.getLogger(UserConsumer.class);
    @KafkaListener(
            topics = "${spring.kafka.topic.name}"
            , groupId = "${spring.kafka.consumer.group-id}"
    )

    public void consume(EmailEvent event) {

        LOGGER.info(String.format("User event received in email service => %s", event.toString( )));
    // send an email to the consumer
       emailService.sendMail(new MultipartFile[]{
               // Ajoutez ici les fichiers que vous souhaitez joindre à l'e-mail
       }, event.getEmail().getFrom(),event.getEmail().getTo(),event.getEmail().getCc(), event.getEmail().getSubject(),event.getEmail().getBody());
    }


}
