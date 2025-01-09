package Model;
import java.io.IOException;
import jakarta.persistence.*;

@Entity
@Table(name="dots")
public class Dot {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    @Column(nullable = false)
    private double x;

    @Column(nullable = false)
    private double y;

    @Column(nullable = false)
    private double r;

    @Column(nullable = false)
    private boolean status;



    public Dot(double x, double y, double r, boolean status) throws IOException {
        this.x = x;
        this.y = y;
        this.r = r;
        this.status = status;
        System.out.println("New dot created");
    }

    public Dot() {
    }


    public double getX() {
        return x;
    }
    public double getY() {
        return y;
    }
    public double getR() {
        return r;
    }
    public boolean getStatus(){
        return this.status;
    }

    public void setX(double x){this.x=x;}
    public void setY(double y){this.y=y;}
    public void setR(double r){this.r=r;}
    public void setStatus(boolean status){
        this.status = status;
    }



    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", status=" + status +
                '}';
    }
}