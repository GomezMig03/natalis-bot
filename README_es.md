# Natalis Bot

Natalis Bot es un bot de Discord diseñado para enviar notificaciones de cumpleaños a los miembros de tu servidor. Está optimizado para su implementación a través de GitHub Actions, pero también puede alojarse en otros servicios.

## Features

- Detecta y publica notificaciones de cumpleaños en tu servidor.
- Capacidad de configurar canales y roles para anuncios de cumpleaños
- Personalización del horario de notificaciones mediante GitHub Actions.

## Implementacin del bot

### Prerequisitos

1. **Crear el bot the discord:** Dirgete al [Discord Developer Portal](https://discord.com/developers) para crear tu bot e invítalo a tu servidor. Asegúrate de que tenga permisos para:
    - Enviar mensajes en el canal deseado.
    - Mencionar los roles para notificaciones de cumpleaños.

2. **Hacer *fork* del repositorio:**
    - Haz clic en el botón "Fork" en la esquina superior derecha del repositorio para obtener tu propia copia.
    - Si deseas que el fork sea privado, descarga el repositorio haciendo clic en "Code" > "Download ZIP", o usa Git clonándolo con el siguiente comando en tu terminal:
      ```
      git clone https://github.com/GomezMig03/natalis-bot.git
      ```
    - Si usas este último método, tendrás que volver a subirlo a github en privado.

Nota: en Open-Source, un *fork* se refiere esencialmente a una copia de un proyecto (siguiendo su licencia) en la que se van a hacer cambios. 

3. **Configura GitHub Actions:**
    - Activa GitHub Actions en tu *fork*.
    - Agrega tu token del bot como un GitHub Secret con el nombre DISCORD_TOKEN.
    - (Opcional) Ajusta el horario de ejecución en el archivo de workflow si deseas personalizar la hora de verificación de cumpleaños.

### Configuración

1. **Editar config.json:** Personaliza la configuración del bot según las necesidades de tu servidor:
    - Canales: Agrega los ID(s) de los canales donde aparecerán los mensajes de cumpleaños.
    - Roles: Especifica los ID(s) de los roles que serán mencionados en las notificaciones.
    - Cumpleaños: Lista los nombres de los miembros y sus fechas de cumpleaños en el formato proporcionado para asegurar notificaciones precisas.

#### Ejemplo de un config.json
```
{
  "channels": ["676404642664428570", "5054535634091872758"],
  "roles": ["1054891617226572869", "1317612856744531210"],
  "birthdays": [
    {"name": "Miguel", "month": 7, "day": 12},
    {"name": "Linus", "month": 12, "day": 28},
    {"name": "Richard", "month": 3, "day": 16}
  ],
  "lastSeparator": "y",
  "singular": "%roles% ¡Hoy es el cumple de %names%! ¡Dadles algo de amor!",
  "plural": "%roles% Hoy es un gran da para %names%. ¡Su cumpleaños! ¡Vamos a felicitarlos!"
}
```

2. **Desplegar el bot:** Con GitHub Actions activado, el bot se ejecutará automáticamente según el horario definido en el *workflow*. Si decides alojarlo en otro lugar, simplemente sigue las pautas de despliegue de la plataforma elegida.

## Notas

- Si tienes problemas, revisa los logs de GitHub Actions y asegúrate de que los permisos en Discord estén correctamente configurados.
- Si encuentras un fallo, por favor publica un issue en este repositorio.
- Se requiere al menos Node.js 18.20. De forma predeterminada, GitHub Actions usa Node.js 20.
- Cualquier modificación en el código debe ser distribuida bajo la licencia MPL 2.0. Para más detalles, consulta la [sección sobre la licencia MPL 2.0](https://github.com/GomezMig03/natalis-bot?tab=MPL-2.0-1-ov-file) o el [archivo LICENSE](https://github.com/GomezMig03/natalis-bot/blob/main/LICENSE) de este repositorio.
- Modificar solo config.json y no index.mjs u otros archivos fuente no requiere redistribuir los cambios bajo MPL 2.0.
