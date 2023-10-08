package com.amin0acids.antiignition.models;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) //idk what type it's supposed to be
    private Long id; 
    @ManyToOne
    private Double longitude; //x
    private Double latitude; //y
    private Float riskLevel; //number   


}
