package com.amin0acids.antiignition.repositories;

import com.amin0acids.antiignition.models.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CoordinateRepo extends JpaRepository<Coordinate, Long> { //second parameter is id type
    Optional<Coordinate> findByCoordinate(Integer lon, Integer lat);
    Optional<List<Coordinate>> findByLong(Integer lon);
    Optional<List<Coordinate>> findByLat(Integer lat);
    Optional<List<Coordinate>> findByRisk(Float risk);
    }
