package com.marcelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marcelo.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
