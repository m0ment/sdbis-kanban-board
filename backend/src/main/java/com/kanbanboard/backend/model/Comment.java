package com.kanbanboard.backend.model;

import com.kanbanboard.backend.model.base.AbstractDocument;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Calendar;
import java.util.Date;

@Document(collection = "comments")
public class Comment extends AbstractDocument {

    @DBRef
    private final User user;

    private String text;

    private final Date creationDate;

    @PersistenceConstructor
    Comment(User user, String text, Date creationDate) {
        this.user = user;
        this.text = text;
        this.creationDate = creationDate;
    }

    public Comment(User user, String text) {
        this(user, text, Calendar.getInstance().getTime());
    }

    public User getUser() {
        return user;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreationDate() {
        return creationDate;
    }
}
