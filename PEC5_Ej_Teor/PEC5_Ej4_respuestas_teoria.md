# Ejercicio 4

## Crea un documento de texto ```PEC5_Ej4_respuestas_teoria``` y responde a cada uno de los siguientes puntos:

### ¿Qué son, para qué sirven y cómo se utilizan ```FormControl```, ```FormGroup``` y ```FormBuilder```?

* **```FormControl```:** Realiza un seguimiento del valor y el estado de validación de un control de formulario individual.
  ```typescript
  const fc = new FormControl('text');
  ```

* **```FormGroup```:** Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de ```FormControl```.
  ```typescript
  const form = new FormGroup({
    first: new FormControl('first'),
    last: new FormControl('last')
  });
  ```

* **```FormBuilder```:** Crea un ```AbstractControl``` a partir de una configuración especificada por el usuario.
  ```typescript
  let fb = new FormBuilder();
  let c = fb.control('text');
  ```

### Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

| Validador | Explicación |
| --------- | ----------- |
| ```min``` | Validador que requiere que el valor del control sea mayor o igual al número proporcionado. |
| ```max``` | Validador que requiere que el valor del control sea menor o igual al número proporcionado. |
| ```required``` | Validador que requiere que el control tenga un valor no vacío. |
| ```requiredTrue``` | Validador que requiere que el valor del control sea verdadero. Este validador se usa comúnmente para casillas de verificación obligatorias. |
| ```email``` | Validador que requiere que el valor del control pase una prueba de validación de correo electrónico.
| ```minlength``` | Validador que requiere que la cantidad de elementos en el valor del control sea mayor o igual a la longitud mínima proporcionada. |
| ```maxlength``` | Validador que requiere que la cantidad de elementos en el valor del control sea menor o igual a la longitud máxima proporcionada. |
| ```pattern``` | Validador que requiere que el valor del control coincida con un patrón de expresión regular. |
| ```nullValidator``` | Validador que no realiza ninguna operación. |
| ```compose``` | Compone varios validadores en una sola función que devuelva la unión de los mapas de error individuales para el control proporcionado. |
| ```composeAsync``` | Compone varios validadores asincrónicos en una sola función que devuelva la unión de los objetos de error individuales para el control proporcionado. |

### ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos? 

* **```.ng-valid```:** El campo cumple con las validaciones.

* **```.ng-invalid```:** El campo no cumple con las validaciones.

* **```.ng-pending```:** El campo tiene una validación asíncrona en marcha.

* **```.ng-disabled```:**  El campo está deshabilitado.

* **```.ng-enabled```:**  El campo está habilitado.

* **```.ng-pristine```:** El valor del campo no se ha modificado.

* **```.ng-dirty```:** El valor del campo se ha modificado.

* **```.ng-untouched```:** El campo nunca ha sido enfocado.
  
* **```.ng-touched```:** El campo ha sido enfocado (focus).