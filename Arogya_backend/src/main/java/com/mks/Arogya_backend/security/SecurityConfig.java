package com.mks.Arogya_backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf
                        .disable() // Disable CSRF for this example
                )
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/login").permitAll() // Allow login without authentication
                        .anyRequest().authenticated() // Secure other endpoints
                );

        return http.build();
    }
}
