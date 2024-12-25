package ManageBeans;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;
import java.io.Serializable;

@Named("checker")
@SessionScoped
public class AreaChecker implements Serializable {

    private boolean isTriangle(double x, double y, double r) {
        double equation = -r / 2 * x - r / 2;
        return !(y < 0) && !(x < 0) && !(y > equation);
    }

    private boolean isCircle(double x, double y, double r) {
        return (y <=0 && x >= 0 && Math.sqrt(y * y + x * x) <= r/2);
    }

    private boolean isRectangle(double x, double y, double r) {
        return (y <= 0 && x <=0 && x >= -r && y >= -r/2);
    }

    public boolean isInTheSpot(double x, double y, double r) throws Exception {
        return isCircle(x,y,r) || isTriangle(x,y,r) || isRectangle(x,y,r);
    }
}