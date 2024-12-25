package ManageBeans;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;
import java.io.Serializable;


@Named("validator")
@SessionScoped
public class CordsValidator implements Serializable {

    public boolean validateX(double x){
        return x >= -4 && x <= 4;
    }

    public boolean validateY(double y){
        return y >= -5 && y <= 3;
    }

    public boolean validateR(double r) {
        double[] validR = {1, 1.5, 2, 2.5, 3};
        for (double val : validR) {
            if (r == val) {
                return true;
            }
        }
        return false;
    }

    public boolean validate(double x, double y, double r){
        return validateX(x) && validateY(y) && validateR(r);
    }
}
