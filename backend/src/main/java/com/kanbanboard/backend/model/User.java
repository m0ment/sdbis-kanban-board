package com.kanbanboard.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
@TypeAlias("user")
public class User {

    @Id
    private String id;

    private String username;

    private String password;

    private String firstname;

    private String lastname;
}
