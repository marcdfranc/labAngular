package com.marcelo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.marcelo.model.Course;
import com.marcelo.repository.CourseRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;

@Validated
@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

	private final CourseRepository courseRepository;	
	
	@GetMapping
	public List<Course> list() {
		return courseRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Course> findById(@PathVariable Long id) {
		return courseRepository.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.OK)
	public long create(@RequestBody @Valid Course course) {
		return courseRepository.save(course).getId();
		// return ResponseEntity.status(HttpStatus.OK).body(courseRepository.save(course).getId());
	}
	
	@PutMapping("/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public ResponseEntity<Void> update(@PathVariable @NotNull @Positive Long id, @RequestBody Course course) {
		course.setId(id);
		if (courseRepository.findById(id).isPresent()) {
			courseRepository.save(course);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();	
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public ResponseEntity<Void> delete(@PathVariable @NotNull @Positive Long id) {
		return courseRepository.findById(id)
			.map(course -> {
				courseRepository.delete(course);
				return ResponseEntity.ok().<Void>build();
			}).orElse(ResponseEntity.notFound().build());
	}
}
