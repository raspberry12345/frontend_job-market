package com.example.demo.favorite;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/favorite")
public class favoriteController {

    @GetMapping
    public void setFavorite(@RequestParam int id){
        System.out.println(id);
    }
}
