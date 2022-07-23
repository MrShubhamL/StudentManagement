package com.student.management.service;

import com.student.management.model.*;

import  java.util.*;

public interface UserService {
    // Creating new user
    public User createUser(User user, Set<UserRole> userRole) throws Exception;

    public User enabledUser(User user);
    // Get user by username
    public User getUser(String username);

    //Delete user by id
    public void deleteUser(Long userId);

    // getAll User
    public List<User> getAllUsers();

    public UserSkills addSkills(UserSkills skills);

    public Projects createProject(Projects projects);

    public Projects getProjectByUserId(Long id);

    public ProjectFiles addProjectFiles(ProjectFiles projectFiles);

    public GroupMembers addGroupMembers(GroupMembers groupMembers);

    public  GroupMembers getGroupMembersByProjectId(Long id);

    public Set<ProjectFiles> getProjectFilesByProjectId(Long id);

    public Set<GroupMembers> getAllGroupMembersByProjectId(Long id);
}
