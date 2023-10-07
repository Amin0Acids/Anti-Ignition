package com.amin0acids.antiignition.models;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Coordinate {
    private Double longitude; //x
    private Double latitude; //y
    private Float riskLevel; //number   
}
