//Dados 5 materias y 3 alumnos:
//ingresar los datos por teclado de todos los objetos.
//Guardar todos estos datos en un archivo de texto.
//Mostrar por pantalla los datos del archivo
// (las 5 materias de cada alumno,
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        // Crear alumnos y materias
        alumno[] alumnos = new alumno[3];
        materia[] materias = new materia[5];
        for (int i = 0; i < 5; i++) {
            System.out.print("Ingrese el nombre de la materia " + (i+1) + ": ");
            String nombreMateria = scanner.nextLine();
            System.out.print("Ingrese el nombre del profesor de la materia " + (i+1) + ": ");
            String nombreProfesor = scanner.nextLine();
            materias[i] = new materia(nombreMateria, nombreProfesor);
        }

        // Pedir datos para cada alumno y escribirlos en el archivo
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("datos.txt"))) {
            for (int i = 0; i < 3; i++) {
                System.out.println("Datos del alumno " + (i+1) + ":");
                System.out.print("Ingrese el nombre del alumno: ");
                String nombreAlumno = scanner.nextLine();
                System.out.print("Ingrese el apellido del alumno: ");
                String apellidoAlumno = scanner.nextLine();
                System.out.print("Ingrese la edad del alumno: ");
                int edadAlumno = scanner.nextInt();
                scanner.nextLine(); // Limpiar el buffer del scanner

                alumnos[i] = new alumno(nombreAlumno, apellidoAlumno, edadAlumno, 5);

                for (int j = 0; j < 5; j++) {
                    alumnos[i].agregarMateria(materias[j]);
                    System.out.print("Ingrese la calificación de la materia " + materias[j].getNombre() + " para el alumno " + alumnos[i].getNombre() + ": ");
                    double calificacion = scanner.nextDouble();
                    scanner.nextLine(); // Limpiar el buffer del scanner
                    writer.write("Alumno " + (i+1) + ", Materia " + materias[j].getNombre() + ": " + calificacion + "\t");
                }
                writer.write("\n");
            }
            System.out.println("Datos guardados en el archivo.");
        } catch (IOException e) {
            System.err.println("Error al escribir en el archivo: " + e.getMessage());
        }

        // Mostrar los datos del archivo por pantalla
        System.out.println("Datos del archivo:");
        try (Scanner fileScanner = new Scanner("datos.txt")) {
            while (fileScanner.hasNextLine()) {
                System.out.println(fileScanner.nextLine());
            }
        }
    }
}