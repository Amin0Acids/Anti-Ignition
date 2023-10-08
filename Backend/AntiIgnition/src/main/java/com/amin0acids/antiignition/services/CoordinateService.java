package com.amin0acids.antiignition.services;

import java.util.ArrayList;
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
        List<Coordinate> coordinates = coordinateRepo.findAll();
        // to return list of coordinates
        List<Long> ids = new ArrayList<>();
        List<Double> lons = new ArrayList<>();
        List<Double> lats = new ArrayList<>();
        List<Float> risks = new ArrayList<>();
        for (Coordinate coord : coordinates) {
            ids.add(coord.getId());
            lons.add(coord.getLongitude());
            lats.add(coord.getLatitude());
            risks.add(coord.getRiskLevel());
        }
        return GetCoordinatesResponse.builder()
                .ids(ids)
                .longitudes(lons)
                .latitudes(lats)
                .risks(risks)
                .build();
    }

    public SendCoordinateResponse sendCoordinate(SendCoordinateRequest sendCoordinateRequest) {
        // send coordinates to repo
        
        return SendCoordinateResponse.builder()
                .isSuccessful(true)
                .build();
    }

    public GetRiskLevelResponse getRiskLevel(Double lon, Double lat) {
        Coordinate coord = coordinateRepo.findByCoordinate(lon, lat).orElseThrow();
        Float risk = coord.getRiskLevel();
        return GetRiskLevelResponse.builder()
                .riskLevel(risk)
                .build();
    }
}
