package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.entity.Theme;

@Repository
public interface ThemeRepository extends JpaRepository<Theme, Integer> {
}
