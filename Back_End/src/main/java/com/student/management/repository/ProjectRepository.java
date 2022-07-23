package com.student.management.repository;

import com.student.management.model.Projects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Projects, Long> {
    public Projects getProjectsByUserId(Long id);
}
