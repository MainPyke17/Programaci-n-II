import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //Lista de materias
        List<materia> materias = new ArrayList<>();

        System.out.print("Ingresar el numero de materia:");
        int numMaterias = scanner.nextInt();
        scanner.nextLine();

        for (int i = 0; i < numMaterias; i++){
            System.out.println("Ingrese los datos de las materias" + (i + 1) + ":");
            System.out.print("Id:");
            int id = scanner.nextInt();
            scanner.nextLine();
            System.out.print("Nombre:");
            String nombre = scanner.nextLine();
            System.out.print("Numero de alumnos:");
            int numero_alumnos = scanner.nextInt();
            scanner.nextLine();

            materia materia = new materia(id,nombre,numero_alumnos);
            for (int j = 0; j < numero_alumnos; j++) {
                System.out.print("Ingrese el nombre del alumno" + (j + 1) + ":");
                String nombreAlumno = scanner.nextLine();
                System.out.print("Ingrese el apellido del alumno" + (j + 1) + ":");
                String apellidoAlumno = scanner.nextLine();
                materia.agregarAlumno(new alumno(nombreAlumno, apellidoAlumno));
            }
            materias.add(materia);
        }
        scanner.close();

        for (materia materia : materias) {
            System.out.println("Id materia:" + materia.getId());
            System.out.println("Nombre de la materia:" + materia.getNombre());
            System.out.println("Numero de alumnos" + materia.getNumero_alumnos());
            for (alumno alumno : materia.getAlumnos()) {
                System.out.println("- " + alumno.getNombre() + "" + alumno.getApellido());
            }
            System.out.println();
        }
    }
}