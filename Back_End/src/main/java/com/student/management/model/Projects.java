package com.student.management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import  java.util.*;

@Entity
public class Projects {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String projectTitle;
    private String projectDescription;
    private String startDate;
    private String endDate;
    private String projectID;

    @ManyToOne(cascade = CascadeType.ALL)
    private User user;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "projects")
    @JsonIgnore
    private Set<GroupMembers> groupMembers;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "projects")
    @JsonIgnore
    private Set<ProjectFiles> projectFiles;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProjectTitle() {
        return projectTitle;
    }

    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getProjectID() {
        return projectID;
    }

    public void setProjectID(String projectID) {
        this.projectID = projectID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<GroupMembers> getGroupMembers() {
        return groupMembers;
    }

    public void setGroupMembers(Set<GroupMembers> groupMembers) {
        this.groupMembers = groupMembers;
    }

    public Set<ProjectFiles> getProjectFiles() {
        return projectFiles;
    }

    public void setProjectFiles(Set<ProjectFiles> projectFiles) {
        this.projectFiles = projectFiles;
    }
}
