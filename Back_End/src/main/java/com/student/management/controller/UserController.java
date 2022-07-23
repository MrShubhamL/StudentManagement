package com.student.management.controller;

import com.student.management.helper.OTPSender;
import com.student.management.model.*;
import com.student.management.service.EmailService;
import com.student.management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.security.Principal;
import java.time.LocalDate;
import java.util.*;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController{
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @Autowired
    private OTPSender otpSender;

    @Autowired
    private HttpSession session;

    // Craeting user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        LocalDate date = LocalDate.now();
        user.setProfile("student.jpg");
        user.setDate(date.toString());

        String studId = "STUD-" + user.getContact();
        user.setStudentId(studId);
        //ecoding password with BCryptPasswordEncoder
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));

        Set<UserRole> userRoleSet = new HashSet<>();
        Role role = new Role();

        role.setRoleId(1L);
        role.setRoleName("STUDENT");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        userRoleSet.add(userRole);
        boolean b = this.otpSender.sendOtp(user.getEmail());
        if(!b){
            throw new Exception("Email not valid please try again!");
        }
        else{
            return this.userService.createUser(user,userRoleSet);
        }
    }

    @PostMapping("/verify-otp/{otp}")
    public User verifyOTP(@PathVariable String otp, Principal principal) throws Exception{
        String username = principal.getName();
        User user = this.userService.getUser(username);
        user.setEnabled(true);
        boolean b = this.otpSender.verifyOTP(otp);
        if (!b){
            throw new Exception("OTP Not Verified Successfully");
        }
        else{
            return this.userService.enabledUser(user);
        }
    }



    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username){
        return this.userService.getUser(username);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){

        this.userService.deleteUser(userId);
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers(){
        return this.userService.getAllUsers();
    }
    
//    @PostMapping("/skills")
//    public UserSkills addSkills(@RequestBody UserSkills skills, Principal principal){
//        String username = principal.getName();
//        User user = userService.getUser(username);
//        return  this.userService.addSkills(skills,user);
//    }

    @PostMapping("/skills/")
    public UserSkills addSkills(@RequestBody UserSkills skills ,Principal principal){
        String username = principal.getName();
        User user = this.userService.getUser(username);
        skills.setUser(user);
        return this.userService.addSkills(skills);
    }

    @PostMapping("/createProject/")
    public Projects createProject(@RequestBody Projects projects, Principal principal) throws Exception {
        String username = principal.getName();
        User user = userService.getUser(username);
        String pro = "PRO-2022-";
        projects.setProjectID(pro + projects.getProjectTitle());
        projects.setUser(user);

        Projects currentProject = this.userService.getProjectByUserId(user.getId());
        if(currentProject == null || currentProject.getUser().getId() != user.getId()){
            return this.userService.createProject(projects);
        }
        else if(currentProject.getUser().getId() == user.getId()){
            throw new Exception("Project already created");
        }
        else{
            return this.userService.createProject(projects);
        }
    }

    @PostMapping(value = "/addFiles/")
    public ProjectFiles addFiles(@RequestBody ProjectFiles files, Principal principal){
        LocalDate date = LocalDate.now();
        files.setDate(date.toString());
        String username = principal.getName();
        User user = this.userService.getUser(username);
        Projects project = this.userService.getProjectByUserId(user.getId());
        files.setProjects(project);
        return this.userService.addProjectFiles(files);
    }

    @PostMapping("/addMembers/")
    public GroupMembers addGroupMember(@RequestBody GroupMembers members, Principal principal) throws Exception{
        String memberPRN = members.getMemberPRNNumber();
        char c1 = memberPRN.charAt(16);
        char c2 = memberPRN.charAt(17);
        char c3 = memberPRN.charAt(18);
        char c4 = memberPRN.charAt(19);

        String d = String.valueOf(c1) + String.valueOf(c2)
                + String.valueOf(c3) + String.valueOf(c4);

        String pro = "STUD22-" + d;


        members.setMemberID(pro);

        String username = principal.getName();
        User user = this.userService.getUser(username);
        Projects project = this.userService.getProjectByUserId(user.getId());
        members.setProjects(project);

        return this.userService.addGroupMembers(members);

    }

    @GetMapping("/project-status/")
    public Projects getProjectStatus(Principal principal){
        String username = principal.getName();
        User user = this.userService.getUser(username);
        return this.userService.getProjectByUserId(user.getId());
    }

    @GetMapping("/project-files/")
    public Set<ProjectFiles> getProjectFiles(Principal principal){
        String username = principal.getName();
        User user = this.userService.getUser(username);
        Projects projects = this.userService.getProjectByUserId(user.getId());
        return this.userService.getProjectFilesByProjectId(projects.getId());
    }

    @GetMapping("/project-members/")
    public Set<GroupMembers> getAllGroupMembers(Principal principal){
        String username = principal.getName();
        User user = this.userService.getUser(username);
        Projects projects = this.userService.getProjectByUserId(user.getId());
        return this.userService.getAllGroupMembersByProjectId(projects.getId());
    }
    
}
