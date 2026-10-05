# Cowork Studio · Sistema de Reservas

Template de sistema de reservas para un espacio de coworking, desarrollado con HTML, CSS, JavaScript nativo y Tailwind CSS vía CDN.

## Stack

- **HTML5** semántico
- **CSS3** con variables personalizadas en `css/styles.css`
- **Tailwind CSS** vía CDN (`cdn.tailwindcss.com?plugins=forms,container-queries`)
- **JavaScript** vanilla (sin frameworks)
- **localStorage** para persistencia de datos
- Iconos **SVG** inline (sin dependencias externas de fuentes de iconos)

## Paleta de colores

| Token | Color | Uso |
|---|---|---|
| `--color-primary` | `#2563eb` | Azul corporativo principal |
| `--color-primary-light` | `#3b82f6` | Hover / acento |
| `--color-primary-dark` | `#1d4ed8` | Variante oscura |
| `--color-accent` | `#64748b` | Texto secundario |
| `--color-bg-dark` | `#0f172a` | Fondo principal |
| `--color-bg-card` | `#1e293b` | Fondo de tarjetas |

## Estructura

```
cowork-01/
├── index.html              Pantalla de inicio
├── servicios.html          Listado de servicios con filtros
├── galeria.html            Galería masonry + lightbox
├── precios.html            Planes y precios + comparativa + FAQ
├── horario-clases.html     Workshops, mentorías y eventos
├── horarios.html           Horario semanal + feriados
├── contacto.html           Formulario + ubicación + horarios
├── reserva.html            Wizard de reserva (4 pasos)
├── confirmacion.html       Confirmación de reserva creada
├── pago.html               Selección y formulario de pago
├── pago-confirmado.html    Confirmación de pago + comprobante
├── inicio-sesion.html      Iniciar sesión
├── registro.html           Crear cuenta
├── recuperar-password.html Reset de contraseña (3 pasos)
├── terminos.html           Términos y condiciones
├── privacidad.html         Política de privacidad
├── perfil.html             Mi perfil + historial de reservas
├── detalle-reserva.html    Detalle de reserva + anular + pagar
├── main.js                 Lógica compartida (Auth, Reservas, Clases, UI)
└── css/
    └── styles.css           Estilos personalizados
```

## Cómo usar

1. Abre `index.html` en cualquier navegador moderno.
2. Para probar el flujo completo, inicia sesión con una de las cuentas de prueba o crea una nueva.

### Cuentas de prueba

| Email | Contraseña | Reservas precargadas |
|---|---|---|
| `felipe@test.com` | `123456` | 4 reservas (confirmada pagada, pendiente, completada, anulada) |
| `constanza@test.com` | `123456` | Sin reservas |

> Las cuentas y datos se crean automáticamente la primera vez que se carga cualquier página (almacenados en `localStorage`).

## Flujo de reserva

```
Inicio → Registro/Login → reserva.html (4 pasos)
                              ↓
                         confirmacion.html
                              ↓
                           pago.html
                              ↓
                     pago-confirmado.html
                              ↓
                          perfil.html
                              ↓
                     detalle-reserva.html
                       (anular | pagar)
```

### Wizard de reserva

1. **Servicio** — elige uno de los 9 disponibles
2. **Espacio** — se muestra solo si el servicio lo requiere (salas, oficinas, eventos)
3. **Fecha y hora** — slots generados según horario del día
4. **Confirmar** — resumen final + creación de reserva

## Modelo de datos (localStorage)

| Clave | Descripción |
|---|---|
| `cw_users` | Usuarios registrados |
| `cw_session` | Sesión activa (expira en 24h) |
| `cw_reservas` | Reservas del sistema |
| `cw_reserva_draft` | Borrador en el wizard de reserva |
| `cw_reserva_actual` | ID de la reserva creada (última) |
| `cw_clases_inscritas` | Cupos ocupados por clase |
| `cw_clases_inscritas_users` | Inscritos por clase (array) |
| `cw_theme` | Preferencia de tema (dark / light) |
| `cw_redirect` | URL destino post-login |

## Estados de reserva

- `pendiente` → creada, sin pagar
- `confirmada` → pagada o pendiente de pago próxima
- `completada` → fecha pasada y no anulada
- `anulada` → cancelada por el usuario

## Estados de pago

- `pendiente` → por pagar
- `pagado` → con método de pago registrado

## Servicios incluidos

- Hot Desk · Diario
- Hot Desk · Mensual
- Escritorio Dedicado
- Oficina Privada · 1 persona
- Oficina Privada · 4 personas
- Sala de Reuniones · Pequeña
- Sala de Reuniones · Grande
- Sala de Eventos
- Oficina Virtual

## Planes

- **Day Pass** — CLP$ 8.900 / día
- **Flexible** — CLP$ 89.900 / mes
- **Dedicado** — CLP$ 159.900 / mes
- **Equipo** — CLP$ 549.900 / mes

## Clases y eventos

6 sesiones precargadas (workshops, mentorías, networking, charla, wellness). Inscripción con control de cupos; un usuario puede inscribirse y liberar su cupo.

## Características técnicas

- **Responsive** — mobile-first con menú hamburguesa
- **Tema oscuro/claro** con toggle en el header
- **Auth guard** automático (`UI.requireAuth`)
- **Persistencia** automática en `localStorage`
- **Barra de progreso** animada en wizards
- **Generador automático de slots** según horario del día
- **Badges de estado** consistentes entre páginas
- **Toasts y modales** reutilizables (`UI.toast`, `UI.modal`)
- **Validación de formularios** nativa HTML5 + lógica JS

## Personalización rápida

### Cambiar colores

Edita las variables en `css/styles.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-primary-light: #3b82f6;
  ...
}
```

Y los valores correspondientes en la configuración de Tailwind al inicio de cada HTML:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#2563eb',
          'primary-light': '#3b82f6',
          ...
        }
      }
    }
  }
</script>
```

### Agregar más servicios

Edita el array `SERVICIOS` en `main.js`.

### Cambiar planes

Edita el array `PLANES` en `main.js`.

### Cambiar horarios

Edita los objetos `HORARIOS` y `HORARIOS_OFICINAS` en `main.js`.

## Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas 2 versiones)
- Mobile: iOS 14+ / Android 10+
- Requiere JavaScript habilitado y `localStorage` disponible

## Notas

- **Sin build step** — todo funciona abriendo el HTML directamente
- **Sin backend** — los datos viven en el navegador
- Para producción se recomienda integrar con un backend real y reemplazar el storage local por llamadas HTTP