package com.amin0acids.antiignition.dao;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GetCoordinatesResponse {
    public double[] longitudes;
    public double[] latitudes;
    public long[] risks;
}
