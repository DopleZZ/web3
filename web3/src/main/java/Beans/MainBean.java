package Beans;


import ManageBeans.AreaChecker;
import ManageBeans.CordsValidator;
import ManageBeans.DataBaseManager;
import Model.Dot;
import jakarta.annotation.ManagedBean;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.transaction.Transactional;

@Named("mainBean")
@ManagedBean
public class MainBean {

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

    public void setX(double x) {this.x = x;}
    public void setY(double y) {this.y = y;}
    public void setR(double r) {this.r = r;}

    public double getX() {return this.x;}
    public double getY() {return this.y;}
    public double getR() {return this.r;}

    @Transactional
    public String submit() throws Exception {
        if (cordsValidator.validate(x,y,r)){
            Dot dot = new Dot(x,y,r, areaChecker.isInTheSpot(x,y,r));
            dataBaseManager.addPoint(dot);
            dotsContainer.getDots().add(dot);
        }
        return null;
    }
}
