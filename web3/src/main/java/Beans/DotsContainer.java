package Beans;

import Model.Dot;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

import java.io.Serializable;
import java.util.ArrayList;

@Named("dots")
@SessionScoped
public class DotsContainer implements Serializable {
    private ArrayList<Dot> dots = new ArrayList<>();
    public ArrayList<Dot> getDots() {return dots;}
    public void setDots(ArrayList<Dot> dots) {this.dots = dots;}
}