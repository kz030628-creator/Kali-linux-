import { useState } from "react";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const pasos = [
    {
      numero: 1,
      titulo: "Descargar la Imagen de VirtualBox para Kali Linux",
      descripcion:
        "El primer paso es obtener la imagen oficial de Kali Linux que ya está preparada para VirtualBox. Esto nos ahorra tener que instalarlo desde cero. Iremos directamente a la sección de descargas de máquinas virtuales del sitio oficial.",
      url: "https://www.kali.org/get-kali/#kali-virtual-machines",
      detalles: [
        "Ve al sitio web oficial de Kali Linux.",
        "Busca la sección 'Virtual Machines' o usa el enlace directo provisto.",
        "Selecciona la imagen para 'VirtualBox' (no VMWare o Hyper-V).",
        "Asegúrate de descargar la versión de 64-bit, que es la estándar hoy en día.",
        "El archivo será grande (varios GB), así que ten paciencia.",
      ],
      imagenPlaceholder: "Página de descargas de Kali Linux con la opción de VirtualBox resaltada.",
    },
    {
      numero: 2,
      titulo: "Importar la Máquina Virtual en VirtualBox",
      descripcion:
        "Una vez descargado el archivo (que tendrá una extensión .ova), no tienes que crearlo, sino 'importarlo'. VirtualBox sabe cómo configurar todo automáticamente a partir de este archivo.",
      detalles: [
        "Abre VirtualBox.",
        "Ve al menú 'Archivo' y selecciona 'Importar servicio virtualizado...'.",
        "En el asistente, haz clic en el icono de la carpeta para buscar el archivo .ova que descargaste.",
        "Selecciona el archivo y haz clic en 'Abrir' y luego en 'Siguiente'.",
      ],
      imagenPlaceholder: "Asistente de importación de VirtualBox seleccionando el archivo .ova de Kali.",
    },
    {
      numero: 3,
      titulo: "Revisar la Configuración de la Máquina Virtual",
      descripcion:
        "Antes de finalizar la importación, VirtualBox te mostrará un resumen de la configuración de la máquina virtual (RAM, procesadores, etc.). Aquí puedes hacer ajustes si lo consideras necesario.",
      detalles: [
        "Verifica la cantidad de RAM asignada. Se recomienda al menos 2GB (2048 MB), pero 4GB (4096 MB) es ideal si tu equipo lo permite.",
        "Puedes ajustar el número de núcleos de CPU. 2 núcleos es un buen punto de partida.",
        "No cambies la configuración del disco duro.",
        "Haz clic en el botón 'Importar' para comenzar el proceso.",
      ],
      imagenPlaceholder: "Pantalla de configuración de la importación en VirtualBox.",
    },
    {
      numero: 4,
      titulo: "Iniciar la Máquina Virtual de Kali Linux",
      descripcion:
        "Una vez que VirtualBox termine de importar, verás la nueva máquina 'Kali Linux' en la lista del panel izquierdo. ¡Es hora de encenderla por primera vez!",
      detalles: [
        "Selecciona 'Kali-Linux...' en el panel izquierdo de VirtualBox.",
        "Haz clic en el botón verde 'Iniciar' en la barra de herramientas superior.",
        "Se abrirá una nueva ventana y verás el proceso de arranque de Kali Linux.",
        "Puede que aparezcan algunas notificaciones de VirtualBox sobre la captura del teclado o el ratón. Simplemente acéptalas.",
      ],
      imagenPlaceholder: "VirtualBox con Kali Linux seleccionado y el botón 'Iniciar' resaltado.",
    },
    {
      numero: 5,
      titulo: "Ingresar con las Credenciales por Defecto",
      descripcion:
        "Kali Linux te pedirá un nombre de usuario y una contraseña para iniciar sesión. Desde las versiones más recientes, las credenciales por defecto han cambiado a un usuario estándar por seguridad.",
      detalles: [
        "Las credenciales por defecto son:",
        "Usuario: kali",
        "Contraseña: kali",
        "Escribe 'kali' en ambos campos y presiona Enter.",
        "¡Felicidades, has iniciado sesión en el escritorio de Kali Linux!",
      ],
      imagenPlaceholder: "Pantalla de inicio de sesión (login) de Kali Linux.",
    },
    {
      numero: 6,
      titulo: "Actualizar el Sistema",
      descripcion:
        "Lo primero que debes hacer siempre en una nueva instalación de Kali (o cualquier Linux) es actualizar la lista de paquetes y el sistema en sí. Esto asegura que tengas las últimas herramientas y parches de seguridad.",
      detalles: [
        "Abre una ventana de terminal (el icono negro en la barra de tareas).",
        "Escribe el siguiente comando para actualizar la lista de paquetes: sudo apt update",
        "Cuando te pida la contraseña, es 'kali'.",
        "Luego, para actualizar los paquetes, escribe: sudo apt full-upgrade -y",
        "El '-y' al final acepta automáticamente las preguntas, facilitando el proceso.",
      ],
      imagenPlaceholder: "Terminal de Kali Linux ejecutando los comandos de actualización.",
    },
    {
      numero: 7,
      titulo: "Instalar las 'Guest Additions' de VirtualBox (Recomendado)",
      descripcion:
        "Las 'Guest Additions' son un conjunto de controladores y utilidades que mejoran enormemente la experiencia. Permiten cosas como el redimensionamiento de pantalla, copiar y pegar entre tu PC y Kali, y arrastrar y soltar archivos.",
      detalles: [
        "Con Kali ya actualizado, abre una terminal.",
        "Ejecuta el siguiente comando para instalar las herramientas necesarias: sudo apt install -y virtualbox-guest-x11",
        "Una vez que termine, reinicia la máquina virtual.",
        "Para reiniciar, puedes usar el comando: sudo reboot",
        "Después de reiniciar, la resolución de pantalla debería ajustarse automáticamente.",
      ],
      imagenPlaceholder: "Comando para instalar las Guest Additions en la terminal de Kali.",
    },
    {
      numero: 8,
      titulo: "¡Explora y Aprende!",
      descripcion:
        "¡Lo has logrado! Ahora tienes una instalación de Kali Linux completamente funcional dentro de VirtualBox. Este es tu laboratorio de seguridad personal para aprender y experimentar de forma segura.",
      detalles: [
        "Navega por el menú de aplicaciones para ver la enorme cantidad de herramientas disponibles.",
        "Comienza con herramientas básicas como 'nmap', 'metasploit-framework' o 'wireshark'.",
        "Recuerda: Utiliza estas herramientas de forma ética y legal. Solo en sistemas y redes que tengas permiso para probar.",
        "Consulta la documentación oficial en kali.org para aprender a usar las herramientas.",
      ],
      imagenPlaceholder: "Escritorio de Kali Linux con el menú de aplicaciones abierto.",
    },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* ──────── NAVBAR ──────── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 p-1">
                <img src="/images/kali-logo.png" alt="Kali Dragon" className="h-full w-full object-contain" />
            </div>
            <span className="hidden text-sm font-medium text-slate-600 sm:inline">
              Guía de Kali Linux por Kevin Zelaya
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 sm:text-sm">
            <a href="#inicio" className="transition-colors hover:text-sky-600">
              Inicio
            </a>
            <a href="#pasos" className="transition-colors hover:text-sky-600">
              Pasos
            </a>
            <a href="#despedida" className="transition-colors hover:text-sky-600">
              Despedida
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
        {/* ──────── HERO / CARÁTULA ──────── */}
        <section id="inicio" className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Columna izquierda – Información */}
            <div className="space-y-6">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                Guía de Ciberseguridad Ética
              </span>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Instalando Kali Linux
              </h1>

              <p className="text-lg text-slate-600">
                Una guía paso a paso para importar y configurar Kali Linux en VirtualBox. Tu laboratorio personal para el aprendizaje de la ciberseguridad.
              </p>

              {/* Datos del estudiante */}
              <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-5">
                <h2 className="mb-3 text-sm font-semibold text-slate-500">
                  PRESENTADO POR:
                </h2>
                <div className="space-y-2 text-sm">
                  <p><strong className="font-medium text-slate-900">Nombre:</strong> Kevin Estuardo Zelaya Gálvez</p>
                  <p><strong className="font-medium text-slate-900">Grado:</strong> 5to. Bachillerato en Computación</p>
                  <p><strong className="font-medium text-slate-900">Sección:</strong> "B"</p>
                </div>
              </div>
            </div>

            {/* Columna derecha – Logotipo */}
            <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-100 p-4">
              <div className="flex h-56 w-56 items-center justify-center rounded-lg bg-gray-800 p-4 shadow-sm">
                <img
                  src="/images/kali-logo.png"
                  alt="Logo de Kali Linux"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ──────── PASOS DE INSTALACIÓN ──────── */}
        <section id="pasos" className="py-16 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Guía Paso a Paso
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600">
              Sigue estos pasos para tener Kali Linux funcionando en VirtualBox. Haz clic en un número para ver los detalles.
            </p>
          </div>

          {/* Indicador de pasos */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {pasos.map((paso, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  activeStep === i
                    ? "scale-110 bg-blue-700 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-200"
                }`}
                title={paso.titulo}
              >
                {paso.numero}
              </button>
            ))}
          </div>

          {/* Contenedor del paso activo */}
          <div className="min-h-[500px] rounded-2xl bg-white p-6 shadow-md transition-all duration-300 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contenido textual del paso */}
              <div className="prose prose-slate max-w-none">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                  Paso {pasos[activeStep].numero}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {pasos[activeStep].titulo}
                </h3>
                <p className="text-slate-600">
                  {pasos[activeStep].descripcion}
                </p>

                {pasos[activeStep].url && (
                  <a
                    href={pasos[activeStep].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 no-underline transition-colors hover:bg-blue-100"
                  >
                    Visitar: {pasos[activeStep].url}
                  </a>
                )}

                <h4 className="font-semibold text-slate-700">Instrucciones detalladas:</h4>
                <ul className="text-slate-600">
                  {pasos[activeStep].detalles.map((detalle, idx) => (
                    <li key={idx}>{detalle}</li>
                  ))}
                </ul>
              </div>

              {/* Espacio para imagen de guía */}
              <div className="flex flex-col items-center justify-center rounded-xl border-4 border-dashed border-slate-200 bg-slate-50/70 p-4">
                <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-slate-200 text-2xl">
                    📷
                    </div>
                  <p className="mt-4 text-sm font-semibold text-slate-700">
                    Espacio para imagen de guía
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    ({pasos[activeStep].imagenPlaceholder})
                  </p>
                </div>
              </div>
            </div>

            {/* Navegación entre pasos */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 transition-all hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Anterior
              </button>
              <span className="text-xs text-slate-500">
                Paso {activeStep + 1} de {pasos.length}
              </span>
              <button
                onClick={() =>
                  setActiveStep(Math.min(pasos.length - 1, activeStep + 1))
                }
                disabled={activeStep === pasos.length - 1}
                className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          </div>
        </section>

        {/* ──────── DESPEDIDA ──────── */}
        <section id="despedida" className="py-16 sm:py-20">
          <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center text-white shadow-lg sm:p-12">
            <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/50" />
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tu Laboratorio está Listo
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-300">
              ¡Excelente trabajo! Has instalado Kali Linux en un entorno virtual seguro. Ahora posees una de las herramientas más poderosas para el aprendizaje en ciberseguridad. Úsala con sabiduría, ética y curiosidad.
            </p>
            
            <p className="mx-auto mt-4 text-sm text-slate-400">
              Recuerda que el conocimiento es poder. El camino del pentesting ético es un aprendizaje constante. ¡Sigue explorando, sigue aprendiendo y mantén la curiosidad!
            </p>

            <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/80">
              <p>Guía elaborada por: <strong className="font-medium text-white">Kevin Estuardo Zelaya Gálvez</strong></p>
              <p>5to. Bachillerato en Computación - Sección "B"</p>
            </div>
          </div>
        </section>

      </main>

      {/* ──────── FOOTER ──────── */}
      <footer className="border-t border-slate-200 py-6 text-center">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Kevin Estuardo Zelaya Gálvez. Guía con fines educativos sobre ciberseguridad ética.
        </p>
      </footer>
    </div>
  );
}

export default App;
