package com.student.management.model;

import javax.persistence.*;

@Entity
public class GroupMembers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String memberName;
    private String memberContact;
    private String memberPRNNumber;
    private String memberEmail;
    private String memberID;

    @ManyToOne(cascade = CascadeType.ALL)
    private Projects projects;

    public GroupMembers() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberContact() {
        return memberContact;
    }

    public void setMemberContact(String memberContact) {
        this.memberContact = memberContact;
    }

    public String getMemberPRNNumber() {
        return memberPRNNumber;
    }

    public void setMemberPRNNumber(String memberPRNNumber) {
        this.memberPRNNumber = memberPRNNumber;
    }

    public String getMemberEmail() {
        return memberEmail;
    }

    public void setMemberEmail(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public String getMemberID() {
        return memberID;
    }

    public void setMemberID(String memberID) {
        this.memberID = memberID;
    }

    public Projects getProjects() {
        return projects;
    }

    public void setProjects(Projects projects) {
        this.projects = projects;
    }
}
