package ManageBeans;

import Model.Dot;

public class AreaChecker {

    private boolean isTriangle(Dot dot) {
        double equation = -dot.getR() / 2 * dot.getX() - dot.getR() / 2;
        return !(dot.getY() < 0) && !(dot.getX() < 0) && !(dot.getY() > equation);
    }

    private boolean isCircle(Dot dot) {
        return ( dot.getY() <=0 && dot.getX() >= 0 && Math.sqrt(dot.getY() * dot.getY() + dot.getX() * dot.getX()) <= dot.getR()/2);
    }

    private boolean isRectangle(Dot dot) {
        return (dot.getY() <= 0 && dot.getX() <=0 && dot.getX() >= -dot.getR() && dot.getY() >= -dot.getR()/2);
    }

    public boolean isInTheSpot(Dot dot) throws Exception {
        return isCircle(dot) || isTriangle(dot) || isRectangle(dot);
    }
}