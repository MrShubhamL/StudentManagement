package com.student.management.service.impl;

import com.student.management.model.*;
import com.student.management.repository.*;
import com.student.management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private GroupRepository groupRepository;

    // Creating new user (Save new user in DB)
    @Override
    public User createUser(User user,Set<UserRole> userRole) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
        if(local!=null){
            System.out.println("User is already exist!.");
            throw new Exception("User already present! Please try again!");
        }
        else{
            // User create
            for(UserRole ur: userRole){
               roleRepository.save(ur.getRole());
            }
            user.getUserRole().addAll(userRole);
            local = this.userRepository.save(user);
        }
        return local;
    }

    @Override
    public User enabledUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }


    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserSkills addSkills(UserSkills skills) {
        return this.skillRepository.save(skills);
    }

    @Override
    public Projects createProject(Projects projects) {
        return this.projectRepository.save(projects);
    }

    @Override
    public Projects getProjectByUserId(Long id) {
        return this.projectRepository.getProjectsByUserId(id);
    }

    @Override
    public ProjectFiles addProjectFiles(ProjectFiles projectFiles) {
        return this.fileRepository.save(projectFiles);
    }

    @Override
    public GroupMembers addGroupMembers(GroupMembers groupMembers) {
        return this.groupRepository.save(groupMembers);
    }

    @Override
    public GroupMembers getGroupMembersByProjectId(Long id) {
        return this.groupRepository.getGroupMembersByProjectsId(id);
    }

    @Override
    public Set<ProjectFiles> getProjectFilesByProjectId(Long id) {
        return this.fileRepository.getProjectFilesByProjectsId(id);
    }

    @Override
    public Set<GroupMembers> getAllGroupMembersByProjectId(Long id) {
        return this.groupRepository.getAllGroupMembersByProjectsId(id);
    }


}
