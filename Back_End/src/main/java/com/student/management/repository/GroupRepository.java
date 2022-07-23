package com.student.management.repository;

import com.student.management.model.GroupMembers;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;
public interface GroupRepository extends JpaRepository<GroupMembers, Long> {
    public GroupMembers getGroupMembersByProjectsId(Long id);

    public  Set<GroupMembers> getAllGroupMembersByProjectsId(Long id);
}
