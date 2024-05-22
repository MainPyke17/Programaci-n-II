import java.util.ArrayList;
import java.util.List;

public class materia {
    private int id;
    private String nombre;
    private int numero_alumnos;
    private List <alumno> alumnos;

    public materia(int id, String nombre, int numero_alumnos) {
        this.id = id;
        this.nombre = nombre;
        this.alumnos = alumnos;
        this.numero_alumnos = numero_alumnos;
        this.alumnos = new ArrayList<>();
    }

    public void agregarAlumno(alumno alumno){
        alumnos.add(alumno);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getNumero_alumnos() {
        return numero_alumnos;
    }

    public void setNumero_alumnos(int numero_alumnos) {
        this.numero_alumnos = numero_alumnos;
    }

    public List<alumno> getAlumnos() {
        return alumnos;
    }

    public void setAlumnos(List<alumno> alumnos) {
        this.alumnos = alumnos;
    }
}
