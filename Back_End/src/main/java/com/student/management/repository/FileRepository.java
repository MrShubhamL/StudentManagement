package com.student.management.repository;

import com.student.management.model.ProjectFiles;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;
public interface FileRepository extends JpaRepository<ProjectFiles, Long> {
    public Set<ProjectFiles> getProjectFilesByProjectsId(Long id);
}
