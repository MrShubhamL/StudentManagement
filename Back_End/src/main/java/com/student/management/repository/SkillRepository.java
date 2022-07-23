package com.student.management.repository;

import com.student.management.model.UserSkills;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<UserSkills, Long> {
}
