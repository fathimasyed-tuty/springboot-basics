package com.fathima.springbootbackend.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class AppResponseDto {

    private String message;
    private String status;
}
