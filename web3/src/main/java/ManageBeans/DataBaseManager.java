package ManageBeans;

import Model.Dot;
import jakarta.enterprise.context.SessionScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.io.IOException;
import java.io.Serializable;
import java.util.List;

@SessionScoped
public class DataBaseManager implements Serializable {

    @PersistenceContext(unitName = "db")
    private EntityManager em;

    public void addPoint(Dot dot) throws IOException {
        em.persist(dot);
    }

    public List<Dot> getAllPoints() {
        try {
            return em.createQuery("SELECT p FROM Dot p", Dot.class).getResultList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}