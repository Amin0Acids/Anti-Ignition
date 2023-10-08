package com.amin0acids.antiignition.dao;

import java.util.List;

// import com.amin0acids.antiignition.models.Coordinate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GetCoordinatesResponse {
    //private List<Coordinate> coordinates;
    private List<Long> ids;
    private List<Double> longitudes;
    private List<Double> latitudes;
    private List<Float> risks;
}
