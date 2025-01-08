package Beans;


import ManageBeans.AreaChecker;
import ManageBeans.CordsValidator;
import ManageBeans.DataBaseManager;
import Model.Dot;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.transaction.Transactional;

import java.io.Serializable;

@Named("mainBean")
@SessionScoped
public class MainBean implements Serializable {

    @Inject
    CordsValidator cordsValidator;

    @Inject
    DotsContainer dotsContainer;

    @Inject
    AreaChecker areaChecker;

    @Inject
    DataBaseManager dataBaseManager;

    private double x;
    private double y;
    private double r;

    public void setX(double x) {
        System.out.println("X set to " + x);
        this.x = x;
    }
    public void setY(double y) {
        System.out.println("Y set to " + y);
        this.y = y;
    }
    public void setR(double r) {
        System.out.println("R set to " + r);
        this.r = r;
    }

    public double getX() {return this.x;}
    public double getY() {return this.y;}
    public double getR() {return this.r;}

    @Transactional
    public String submit() throws Exception {
        System.out.println("Submit initiated");
        System.out.println(this.x);
        System.out.println(this.y);
        System.out.println(this.r);
        if (cordsValidator.validate(x,y,r)){
            Dot dot = new Dot(x,y,r, areaChecker.isInTheSpot(x,y,r));
            dataBaseManager.addPoint(dot);
            dotsContainer.getDots().add(dot);
            return null;
        }
        System.out.println("Error while submit");
        return null;
    }
}
