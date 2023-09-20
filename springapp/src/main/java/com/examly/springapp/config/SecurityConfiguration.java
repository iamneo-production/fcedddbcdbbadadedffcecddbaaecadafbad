package com.examly.springapp.config;

import com.examly.springapp.service.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {


    private final UserServiceImpl userServiceImpl;

    public SecurityConfiguration(UserServiceImpl userServiceImpl){
        this.userServiceImpl = userServiceImpl;
    }

    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeRequests(auth ->
//                    auth.antMatchers("/admin/signup", "/admin/login",
//                                    "/user/signup", "/user/login").permitAll()
//                        .anyRequest().authenticated()
//                )
//                .userDetailsService(userServiceImpl)
//                .httpBasic(Customizer.withDefaults());
//        return http.build();
        http
                .csrf().disable()
                .authorizeHttpRequests()
//                .antMatchers("/v3/api-docs/**",
//                        "/swagger-ui/**",
//                        "/swagger-ui.html").permitAll()
                .anyRequest().permitAll()
                .and()
                .httpBasic();
        return http.build();
    }

}
