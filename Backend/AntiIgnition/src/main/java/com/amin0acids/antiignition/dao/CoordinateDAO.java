package com.amin0acids.antiignition.dao;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CoordinateDAO {
    private long id;
    private Double longitude;
    private Double latitude;
    private Float risk;
}
