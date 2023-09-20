package com.examly.springapp.handler;

import org.springframework.http.HttpStatus;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ErrorResponse invalidArgumentResponse(MethodArgumentNotValidException e, WebRequest webRequest){
        List<String> errorList = new ArrayList<>();
        e.getBindingResult().getAllErrors()
                .forEach(objectError -> errorList.add(objectError.getDefaultMessage()));
        return new ErrorResponse(LocalTime.now().toString(), errorList.toString(), webRequest.getDescription(false));
    }

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    ErrorResponse invalidArgumentResponse(RuntimeException e, WebRequest webRequest){
        return new ErrorResponse(LocalTime.now().toString(), e.getMessage(), webRequest.getDescription(false));
    }
}
