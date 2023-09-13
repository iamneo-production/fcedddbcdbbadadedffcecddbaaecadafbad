package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gift.ordering.system.entity.Admin;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{

}
