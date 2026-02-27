# Ejercicio 1

## Crea una carpeta ```PEC5_Ej_Teor```, dentro de esta carpeta crea un documento markdown ```PEC5_Ej1_respuestas_teoria.md``` y responde a cada una de las siguientes preguntas:

### ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

Un **formulario dirigido por *template*** es un formulario asíncrono y simple. La configuración se realiza mayormente en el archivo HTML, utiliza directivas como ```ngModel``` para enlazar datos bidireccionalmente, las validaciones se definen en la plantilla y es ideal para formularios sencillos, pequeños y rápidos. Requiere de ```FormsModule```.

Un **formulario reactivo** es un formulario síncrono y estructurado con TypeScript. Se crea y gestiona en el archivo TypeScript, proporciona un control explícito y directo sobre los estados y valores del formulario, las validaciones se manejan en el componente, haciéndolo más escalable y fácil de probar y es ideal para formularios complejos, dinámicos o que necesitan reactividad. Requiere de ```FormGroup```, ```FormControl```, ```FormArray``` y ```FormBuilder```.

### ¿Qué son, para qué sirven y cómo se utilizan las directivas ```ngModel``` y ```ngModelChange```?

```ngModel``` es una directiva fundamental en Angular que permite el enlazado de datos bidireccional entre la vista y el componente. Se utiliza en formularios para sincronizar automáticamente el valor de una variable con un elemento del formulario.

```ngModelChange``` es un evento de salida de Angular, específico para la directiva ```ngModel```, que se emite cuando el valor del modelo cambia.

### ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

Las siguientes clases permiten cambiar el estilo de un control basado en su estado:

* **```ng-touched``` / ```ng-untouched```:** El control ha sido visitado / no visitado.

* **```ng-dirty``` / ```ng-pristine```:** El valor del control ha cambiado / no ha cambiado.

* **```ng-valid``` / ```ng-invalid```:** El valor del control es válido / inválido.

### ¿Qué ventajas aportan los ```FormGroup``` en la composición de formularios?

Un ```FormGroup``` es una clase fundamental en los formularios reactivos que agrupa múltiples ```FormControl``` en un único objeto. Permite gestionar, validar y rastrear el estado de todo el formulario como una unidad.

* **Ventajas:**
  * **Agrupación lógica:** Une campos relacionados bajo un mismo contenedor.
  
  * **Gestión de estado:** Proporciona propiedades para comprobar si el grupo es válido, si ha sido tocado o para obtener todos sus valores.
  
  * **Validación conjunta:** Permite aplicar reglas de validación al conjunto completo de campos.
  
  * **Uso con ```FormBuilder```:** Se crea utilizando ```FormBuilder``` para simplificar la sintaxis, permitiendo definir controles con valores iniciales y validadores.
  
  * **Estructura:** El ```FormGroup``` mapea los controles a un objeto, donde cada campo es un ```FormControl``` u otro ```FormGroup``` anidado.