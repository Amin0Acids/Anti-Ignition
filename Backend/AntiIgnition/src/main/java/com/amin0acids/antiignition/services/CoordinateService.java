package com.amin0acids.antiignition.services;

import java.util.List;
import com.amin0acids.antiignition.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amin0acids.antiignition.dao.*;
import com.amin0acids.antiignition.models.Coordinate;

@Service
public class CoordinateService {
    private final CoordinateRepo coordinateRepo;

    @Autowired
    public CoordinateService(CoordinateRepo coordinateRepo) {
        this.coordinateRepo = coordinateRepo;
    }

    public GetCoordinatesResponse getCoordinates() {
        return GetCoordinatesResponse.builder()
                    .
        //coordinateRepo.findAll();
    }

    public SendCoordinateResponse sendCoordinate(SendCoordinateRequest sendCoordinateRequest) {
        // send coordinates to repo
        return SendCoordinateResponse.builder().isSuccessful(true);
    }

    public GetRiskLevelResponse getRiskLevel(Coordinate coordinate) {
        Long risk = coordinateRepo.findByRisk
        return GetRiskLevelResponse.builder().
    }
}
