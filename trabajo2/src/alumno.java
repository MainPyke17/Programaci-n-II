import java.util.ArrayList;
import java.util.List;

public class alumno {
    private String nombre;
    private String apellido;
    private int edad;
    private int numero_materia;
    private List <materia> materias;

    public alumno(String nombre, String apellido, int edad, int numero_materia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.numero_materia = numero_materia;
        this.materias = materias;
        this.materias = new ArrayList<>();
    }

    public void agregarMateria (materia materia){
        materias.add(materia);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getNumero_materia() {
        return numero_materia;
    }

    public void setNumero_materia(int numero_materia) {
        this.numero_materia = numero_materia;
    }

    public List<materia> getMaterias() {
        return materias;
    }

    public void setMaterias(List<materia> materias) {
        this.materias = materias;
    }
}
