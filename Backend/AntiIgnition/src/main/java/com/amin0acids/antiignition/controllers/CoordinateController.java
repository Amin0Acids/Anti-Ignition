package com.amin0acids.antiignition.controllers;

import com.amin0acids.antiignition.models.*;
import com.amin0acids.antiignition.dao.*;
import com.amin0acids.antiignition.services.*;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("api/coordinate")
public class CoordinateController {
    
    private final CoordinateService coordinateService;

    @Autowired
    public CoordinateController(CoordinateService coordinateService) {
        this.coordinateService = coordinateService;
    }

    @GetMapping("/getCoordinates")
    public ResponseEntity<GetCoordinatesResponse> getCoordinates() {
        return ResponseEntity.ok(coordinateService.getCoordinates());
    }

    @GetMapping("/getRiskLevel/{lon}/{lat}") 
    public ResponseEntity<GetRiskLevelResponse> getRisk(@PathVariable Integer lon, @PathVariable Integer lat) {
        return ResponseEntity.ok(coordinateService.getRiskLevel(lon, lat));
    }
}
