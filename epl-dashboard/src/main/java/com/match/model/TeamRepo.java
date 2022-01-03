package com.match.model;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepo extends JpaRepository<Team, Integer> {
  Optional<Team> findByName(String name);
}
