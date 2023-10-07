package com.amin0acids.antiignition.repositories;

import com.amin0acids.antiignition.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoordinateRepo 
    extends JpaRepository<Coordinate, Long> { //second parameter is id type
}
