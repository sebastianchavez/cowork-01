const STORAGE_KEYS = {
  USERS: 'cw_users',
  SESSION: 'cw_session',
  RESERVAS: 'cw_reservas',
  RESERVA_DRAFT: 'cw_reserva_draft',
  RESERVA_ACTUAL: 'cw_reserva_actual',
  PAGO_DRAFT: 'cw_pago_draft',
  CLASES: 'cw_clases_inscritas',
  THEME: 'cw_theme'
};

const SERVICIOS = [
  { id: 'cw1', categoria: 'hot-desk', nombre: 'Hot Desk · Diario', descripcion: 'Escritorio flexible en zona compartida, uso por un día completo.', duracion: 480, precio: 8900, imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', capacidad: 1, unidad: 'día' },
  { id: 'cw2', categoria: 'hot-desk', nombre: 'Hot Desk · Mensual', descripcion: 'Acceso ilimitado a escritorios compartidos durante 30 días.', duracion: 43200, precio: 89900, imagen: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', capacidad: 1, unidad: 'mes' },
  { id: 'cw3', categoria: 'hot-desk', nombre: 'Escritorio Dedicado', descripcion: 'Tu propio escritorio asignado 24/7 con locker personal.', duracion: 43200, precio: 159900, imagen: 'https://images.unsplash.com/photo-1631193816258-28b44b21e78b?w=800&q=80', capacidad: 1, unidad: 'mes' },
  { id: 'cw4', categoria: 'oficina', nombre: 'Oficina Privada · 1 persona', descripcion: 'Oficina cerrada y amueblada para una persona, con cerradura.', duracion: 43200, precio: 249900, imagen: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', capacidad: 1, unidad: 'mes' },
  { id: 'cw5', categoria: 'oficina', nombre: 'Oficina Privada · 4 personas', descripcion: 'Oficina privada para equipos pequeños, totalmente equipada.', duracion: 43200, precio: 549900, imagen: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80', capacidad: 4, unidad: 'mes' },
  { id: 'cw6', categoria: 'sala', nombre: 'Sala de Reuniones · Pequeña', descripcion: 'Sala para 4-6 personas con pantalla y pizarra.', duracion: 60, precio: 14900, imagen: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80', capacidad: 6, unidad: 'hora' },
  { id: 'cw7', categoria: 'sala', nombre: 'Sala de Reuniones · Grande', descripcion: 'Sala para 10-14 personas con videoconferencia HD.', duracion: 60, precio: 24900, imagen: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80', capacidad: 14, unidad: 'hora' },
  { id: 'cw8', categoria: 'evento', nombre: 'Sala de Eventos', descripcion: 'Espacio amplio para workshops, lanzamientos y eventos de hasta 50 personas.', duracion: 240, precio: 79900, imagen: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', capacidad: 50, unidad: 'bloque 4h' },
  { id: 'cw9', categoria: 'virtual', nombre: 'Oficina Virtual', descripcion: 'Domicilio comercial y recepción de correspondencia, sin espacio físico.', duracion: 43200, precio: 49900, imagen: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80', capacidad: 1, unidad: 'mes' }
];

const ESPACIOS = [
  { id: 'es1', nombre: 'Sala Cumbre', tipo: 'reunion-grande', descripcion: 'Sala premium con vista panorámica, TV 65" y sistema de audio.', imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', capacidad: 14, servicios: ['Wifi gigabit', 'TV 65"', 'Videoconferencia', 'Pizarra digital'], rating: 4.9 },
  { id: 'es2', nombre: 'Sala Nido', tipo: 'reunion-pequena', descripcion: 'Espacio íntimo ideal para entrevistas y reuniones 1-a-1.', imagen: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80', capacidad: 4, servicios: ['Wifi', 'TV 43"', 'Pizarra'], rating: 4.8 },
  { id: 'es3', nombre: 'Sala Focus 1', tipo: 'reunion-pequena', descripcion: 'Sala silenciosa con aislamiento acústico para máximo enfoque.', imagen: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', capacidad: 6, servicios: ['Wifi', 'TV 50"', 'Aislamiento acústico'], rating: 4.7 },
  { id: 'es4', nombre: 'Sala Focus 2', tipo: 'reunion-pequena', descripcion: 'Segunda sala de focus con iguales prestaciones.', imagen: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80', capacidad: 6, servicios: ['Wifi', 'TV 50"', 'Pizarra'], rating: 4.8 },
  { id: 'es5', nombre: 'Sala Taller', tipo: 'evento', descripcion: 'Espacio multiuso para workshops y eventos corporativos.', imagen: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', capacidad: 50, servicios: ['Proyector 4K', 'Sonido ambiental', 'Catering opcional', 'Montaje flexible'], rating: 4.9 },
  { id: 'es6', nombre: 'Oficina Vista', tipo: 'oficina', descripcion: 'Oficina privada con vista exterior, ideal para ejecutivos.', imagen: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', capacidad: 4, servicios: ['Escritorios x4', 'Sala de estar', 'Café ilimitado', 'Locker'], rating: 5.0 }
];

const HORARIOS = {
  lunes: { abierto: true, desde: '07:00', hasta: '22:00' },
  martes: { abierto: true, desde: '07:00', hasta: '22:00' },
  miercoles: { abierto: true, desde: '07:00', hasta: '22:00' },
  jueves: { abierto: true, desde: '07:00', hasta: '22:00' },
  viernes: { abierto: true, desde: '07:00', hasta: '22:00' },
  sabado: { abierto: true, desde: '09:00', hasta: '18:00' },
  domingo: { abierto: false, desde: '', hasta: '' }
};

const HORARIOS_OFICINAS = {
  lunes: { abierto: true, desde: '08:00', hasta: '20:00' },
  martes: { abierto: true, desde: '08:00', hasta: '20:00' },
  miercoles: { abierto: true, desde: '08:00', hasta: '20:00' },
  jueves: { abierto: true, desde: '08:00', hasta: '20:00' },
  viernes: { abierto: true, desde: '08:00', hasta: '20:00' },
  sabado: { abierto: false, desde: '', hasta: '' },
  domingo: { abierto: false, desde: '', hasta: '' }
};

const CLASES = [
  {
    id: 'cl1',
    nombre: 'Workshop: Productividad Extrema',
    descripcion: 'Aprende frameworks de productividad usados por equipos de Silicon Valley.',
    sesiones: 1,
    duracionSesion: '2 horas',
    precio: 0,
    profesor: 'Andrea Salas',
    nivel: 'Todos',
    cuposTotales: 20,
    imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    dia: 'miercoles',
    hora: '18:00',
    categoria: 'workshop'
  },
  {
    id: 'cl2',
    nombre: 'Networking Night',
    descripcion: 'Encuentro mensual para conectar con otros profesionales del cowork.',
    sesiones: 1,
    duracionSesion: '2 horas',
    precio: 0,
    profesor: 'Comunidad Cowork',
    nivel: 'Todos',
    cuposTotales: 40,
    imagen: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    dia: 'jueves',
    hora: '19:00',
    categoria: 'networking'
  },
  {
    id: 'cl3',
    nombre: 'Mentoría: Pitch para Startups',
    descripcion: 'Sesión práctica con mentor serial entrepreneur para preparar tu pitch.',
    sesiones: 1,
    duracionSesion: '1.5 horas',
    precio: 15000,
    profesor: 'Roberto Méndez',
    nivel: 'Intermedio',
    cuposTotales: 12,
    imagen: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    dia: 'martes',
    hora: '17:00',
    categoria: 'mentoria'
  },
  {
    id: 'cl4',
    nombre: 'Workshop: Design Thinking',
    descripcion: 'Resuelve problemas complejos aplicando pensamiento de diseño.',
    sesiones: 1,
    duracionSesion: '3 horas',
    precio: 25000,
    profesor: 'Carolina Pérez',
    nivel: 'Principiante',
    cuposTotales: 15,
    imagen: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    dia: 'viernes',
    hora: '15:00',
    categoria: 'workshop'
  },
  {
    id: 'cl5',
    nombre: 'Yoga para Emprendedores',
    descripcion: 'Sesión de yoga y mindfulness para reducir el estrés laboral.',
    sesiones: 1,
    duracionSesion: '1 hora',
    precio: 0,
    profesor: 'Valentina Soto',
    nivel: 'Todos',
    cuposTotales: 25,
    imagen: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
    dia: 'sabado',
    hora: '10:00',
    categoria: 'wellness'
  },
  {
    id: 'cl6',
    nombre: 'Charla: Marketing Digital 2026',
    descripcion: 'Las tendencias de marketing digital que dominan este año.',
    sesiones: 1,
    duracionSesion: '1.5 horas',
    precio: 0,
    profesor: 'Diego Rojas',
    nivel: 'Todos',
    cuposTotales: 50,
    imagen: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    dia: 'miercoles',
    hora: '12:00',
    categoria: 'charla'
  }
];

const GALERIA = [
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', cat: 'oficinas', titulo: 'Zona Hot Desk' },
  { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', cat: 'oficinas', titulo: 'Open Space' },
  { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', cat: 'oficinas', titulo: 'Oficina Privada' },
  { url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80', cat: 'oficinas', titulo: 'Sala de Trabajo' },
  { url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80', cat: 'salas', titulo: 'Sala de Reuniones' },
  { url: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80', cat: 'salas', titulo: 'Sala Grande' },
  { url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', cat: 'eventos', titulo: 'Sala de Eventos' },
  { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', cat: 'eventos', titulo: 'Workshop' },
  { url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', cat: 'salas', titulo: 'Charla Cowork' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', cat: 'eventos', titulo: 'Networking Night' },
  { url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80', cat: 'salas', titulo: 'Sala Wellness' },
  { url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80', cat: 'oficinas', titulo: 'Oficina Virtual' }
];

const PLANES = [
  {
    id: 'p1',
    nombre: 'Day Pass',
    precio: 8900,
    periodo: 'día',
    destacado: false,
    descripcion: 'Ideal para probar el espacio o trabajar un día puntual.',
    beneficios: [
      { texto: 'Acceso a zona común y hot desk', incluido: true },
      { texto: 'Wifi gigabit', incluido: true },
      { texto: 'Café y té ilimitado', incluido: true },
      { texto: 'Impresión (10 páginas)', incluido: true },
      { texto: 'Acceso 24/7', incluido: false },
      { texto: 'Sala de reuniones', incluido: false }
    ]
  },
  {
    id: 'p2',
    nombre: 'Flexible',
    precio: 89900,
    periodo: 'mes',
    destacado: true,
    descripcion: 'El plan más popular para freelancers y profesionales independientes.',
    beneficios: [
      { texto: 'Hot desk ilimitado', incluido: true },
      { texto: 'Wifi gigabit', incluido: true },
      { texto: 'Café, té y snacks', incluido: true },
      { texto: 'Impresión ilimitada', incluido: true },
      { texto: '2 horas de sala/mes', incluido: true },
      { texto: 'Acceso 24/7', incluido: false }
    ]
  },
  {
    id: 'p3',
    nombre: 'Dedicado',
    precio: 159900,
    periodo: 'mes',
    destacado: false,
    descripcion: 'Tu propio escritorio 24/7 con locker y máxima privacidad.',
    beneficios: [
      { texto: 'Escritorio asignado 24/7', incluido: true },
      { texto: 'Locker personal', incluido: true },
      { texto: 'Wifi gigabit', incluido: true },
      { texto: 'Café premium y snacks', incluido: true },
      { texto: '4 horas de sala/mes', incluido: true },
      { texto: 'Acceso 24/7', incluido: true }
    ]
  },
  {
    id: 'p4',
    nombre: 'Equipo',
    precio: 549900,
    periodo: 'mes',
    destacado: false,
    descripcion: 'Oficina privada cerrada para equipos de hasta 4 personas.',
    beneficios: [
      { texto: 'Oficina privada para 4', incluido: true },
      { texto: 'Mobiliario premium', incluido: true },
      { texto: 'Sala de estar privada', incluido: true },
      { texto: '10 horas de sala grande/mes', incluido: true },
      { texto: 'Domicilio comercial', incluido: true },
      { texto: 'Línea telefónica propia', incluido: true }
    ]
  }
];

const METODOS_PAGO = [
  { id: 'tarjeta', nombre: 'Tarjeta de Crédito/Débito', icono: 'card' },
  { id: 'webpay', nombre: 'Webpay / Transbank', icono: 'webpay' },
  { id: 'transferencia', nombre: 'Transferencia Bancaria', icono: 'bank' },
  { id: 'efectivo', nombre: 'Efectivo en local', icono: 'cash' }
];

const Storage = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      Storage.set(STORAGE_KEYS.USERS, [
        { id: 'u1', nombre: 'Felipe Araya', email: 'felipe@test.com', telefono: '+56 9 9876 5432', empresa: 'Araya Diseño', password: '123456', foto: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80' },
        { id: 'u2', nombre: 'Constanza Vidal', email: 'constanza@test.com', telefono: '+56 9 8765 1234', empresa: 'Vidal & Asoc.', password: '123456', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' }
      ]);
    }
  },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    if (s.expires && s.expires < Date.now()) {
      Storage.remove(STORAGE_KEYS.SESSION);
      return null;
    }
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'El email ya está registrado.' };
    if (data.password.length < 6) return { ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
    if (!data.aceptaTerminos) return { ok: false, error: 'Debes aceptar los términos y condiciones.' };
    const newUser = {
      id: 'u' + Date.now(),
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono || '',
      empresa: data.empresa || '',
      password: data.password,
      foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80'
    };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: newUser };
  },
  logout() { Storage.remove(STORAGE_KEYS.SESSION); },
  update(userId, data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false };
    users[idx] = { ...users[idx], ...data };
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: users[idx] };
  },
  changePassword(userId, currentPass, newPass) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false, error: 'Usuario no encontrado.' };
    if (users[idx].password !== currentPass) return { ok: false, error: 'La contraseña actual es incorrecta.' };
    if (newPass.length < 6) return { ok: false, error: 'La nueva contraseña debe tener al menos 6 caracteres.' };
    users[idx].password = newPass;
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true };
  },
  resetPasswordByEmail(email, newPass) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.email === email);
    if (idx === -1) return { ok: false, error: 'No existe una cuenta con ese email.' };
    if (newPass.length < 6) return { ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
    users[idx].password = newPass;
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true };
  }
};

const Reservas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, null);
    if (list === null) {
      const samples = [
        { id: 'r1', userId: 'u1', servicioId: 'cw2', espacioId: null, fecha: this._futureDate(3), hora: '09:00', duracion: 1, estado: 'confirmada', pago: 'pagado', metodoPago: 'tarjeta', precio: 89900, createdAt: Date.now() - 86400000 * 2 },
        { id: 'r2', userId: 'u1', servicioId: 'cw6', espacioId: 'es2', fecha: this._futureDate(5), hora: '15:00', duracion: 1, estado: 'pendiente', pago: 'pendiente', metodoPago: null, precio: 14900, createdAt: Date.now() - 86400000 },
        { id: 'r3', userId: 'u1', servicioId: 'cw1', espacioId: null, fecha: this._futureDate(-7), hora: '08:00', duracion: 1, estado: 'completada', pago: 'pagado', metodoPago: 'webpay', precio: 8900, createdAt: Date.now() - 86400000 * 10 },
        { id: 'r4', userId: 'u1', servicioId: 'cw7', espacioId: 'es1', fecha: this._futureDate(-15), hora: '11:00', duracion: 2, estado: 'anulada', pago: 'pendiente', metodoPago: null, precio: 24900, createdAt: Date.now() - 86400000 * 20 }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, samples);
    }
  },
  _futureDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },
  listByUser(userId) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).filter(r => r.userId === userId);
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).find(r => r.id === id) || null;
  },
  create(data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const newReserva = {
      id: 'r' + Date.now(),
      createdAt: Date.now(),
      estado: 'pendiente',
      pago: 'pendiente',
      metodoPago: null,
      ...data
    };
    list.push(newReserva);
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return newReserva;
  },
  update(id, data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const idx = list.findIndex(r => r.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return list[idx];
  },
  cancel(id) { return this.update(id, { estado: 'anulada' }); },
  markPaid(id, metodo) {
    return this.update(id, { pago: 'pagado', metodoPago: metodo, estado: 'confirmada' });
  },
  setDraft(data) { Storage.set(STORAGE_KEYS.RESERVA_DRAFT, data); },
  getDraft() { return Storage.get(STORAGE_KEYS.RESERVA_DRAFT, null); },
  clearDraft() { Storage.remove(STORAGE_KEYS.RESERVA_DRAFT); },
  setPagoDraft(data) { Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  getPagoDraft() { return Storage.get(STORAGE_KEYS.PAGO_DRAFT, null); },
  clearPagoDraft() { Storage.remove(STORAGE_KEYS.PAGO_DRAFT); }
};

const Clases = {
  list() { return CLASES; },
  get(id) { return CLASES.find(c => c.id === id); },
  getInscritos(id) {
    const all = Storage.get(STORAGE_KEYS.CLASES, {});
    return all[id] || 0;
  },
  cuposDisponibles(clase) {
    return Math.max(0, clase.cuposTotales - this.getInscritos(clase.id));
  },
  isInscrito(claseId, userId) {
    const all = Storage.get(STORAGE_KEYS.CLASES + '_users', {});
    const list = all[claseId] || [];
    return list.includes(userId);
  },
  inscribir(claseId, userId) {
    const clase = this.get(claseId);
    if (!clase) return { ok: false, error: 'Clase no encontrada.' };
    if (this.cuposDisponibles(clase) <= 0) return { ok: false, error: 'No quedan cupos disponibles.' };
    if (this.isInscrito(claseId, userId)) return { ok: false, error: 'Ya estás inscrito en esta clase.' };
    const all = Storage.get(STORAGE_KEYS.CLASES, {});
    all[claseId] = (all[claseId] || 0) + 1;
    Storage.set(STORAGE_KEYS.CLASES, all);
    const allUsers = Storage.get(STORAGE_KEYS.CLASES + '_users', {});
    if (!allUsers[claseId]) allUsers[claseId] = [];
    allUsers[claseId].push(userId);
    Storage.set(STORAGE_KEYS.CLASES + '_users', allUsers);
    return { ok: true };
  },
  desinscribir(claseId, userId) {
    const all = Storage.get(STORAGE_KEYS.CLASES, {});
    if (all[claseId] && all[claseId] > 0) {
      all[claseId] -= 1;
      Storage.set(STORAGE_KEYS.CLASES, all);
    }
    const allUsers = Storage.get(STORAGE_KEYS.CLASES + '_users', {});
    if (allUsers[claseId]) {
      allUsers[claseId] = allUsers[claseId].filter(u => u !== userId);
      Storage.set(STORAGE_KEYS.CLASES + '_users', allUsers);
    }
    return { ok: true };
  }
};

const UI = {
  formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-CL', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  },
  formatDateShort(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  formatPrice(n) {
    return 'CLP$ ' + Math.round(Number(n)).toLocaleString('es-CL');
  },
  servicioById(id) { return SERVICIOS.find(s => s.id === id); },
  espacioById(id) { return ESPACIOS.find(p => p.id === id); },
  categoriaLabel(cat) {
    const map = {
      'hot-desk': 'Hot Desk',
      'oficina': 'Oficina',
      'sala': 'Sala',
      'evento': 'Evento',
      'virtual': 'Virtual'
    };
    return map[cat] || cat;
  },
  estadoBadge(estado) {
    const map = {
      pendiente: { label: 'Pendiente', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      confirmada: { label: 'Confirmada', cls: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
      pagada: { label: 'Pagada', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
      completada: { label: 'Completada', cls: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
      anulada: { label: 'Anulada', cls: 'bg-red-500/20 text-red-300 border-red-500/30' }
    };
    return map[estado] || map.pendiente;
  },
  pagoBadge(pago) {
    const map = {
      pendiente: { label: 'Por pagar', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      pagado: { label: 'Pagado', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' }
    };
    return map[pago] || map.pendiente;
  },
  isPastDate(iso) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(iso + 'T00:00:00');
    return d < today;
  },
  isFutureDate(iso) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(iso + 'T00:00:00');
    return d > today;
  },
  isToday(iso) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(iso + 'T00:00:00');
    return d.getTime() === today.getTime();
  },
  generateSlots(servicioId, fecha) {
    if (!servicioId || !fecha) return [];
    const day = new Date(fecha + 'T00:00:00').getDay();
    const dayKey = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'][day];
    const h = HORARIOS[dayKey];
    if (!h.abierto) return [];
    const serv = this.servicioById(servicioId);
    if (!serv) return [];
    const slots = [];
    let [hStart, mStart] = h.desde.split(':').map(Number);
    let [hEnd, mEnd] = h.hasta.split(':').map(Number);
    const interval = serv.categoria === 'sala' ? 30 : 60;
    let cur = hStart * 60 + mStart;
    const end = hEnd * 60 + mEnd;
    while (cur + interval <= end) {
      const hh = String(Math.floor(cur/60)).padStart(2,'0');
      const mm = String(cur%60).padStart(2,'0');
      slots.push(`${hh}:${mm}`);
      cur += interval;
    }
    return slots;
  },
  toast(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `fixed top-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-2xl font-medium text-sm border ${type === 'success' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/40' : 'bg-red-500/20 text-red-100 border-red-500/40'} backdrop-blur`;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2500);
    setTimeout(() => el.remove(), 2900);
  },
  modal(html, options = {}) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `<div class="modal-content">${html}</div>`;
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    const closeBtn = backdrop.querySelector('[data-close]');
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (options.onConfirm) {
      const confirmBtn = backdrop.querySelector('[data-confirm]');
      if (confirmBtn) confirmBtn.addEventListener('click', () => { options.onConfirm(); close(); });
    }
    return close;
  },
  requireAuth(redirectUrl) {
    if (!Auth.isLogged()) {
      Storage.set('cw_redirect', redirectUrl || window.location.pathname);
      window.location.href = 'inicio-sesion.html';
      return false;
    }
    return true;
  },
  applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    Storage.set(STORAGE_KEYS.THEME, theme);
  },
  initTheme() {
    const saved = Storage.get(STORAGE_KEYS.THEME, 'dark');
    this.applyTheme(saved);
  },
  diaSemana(key) {
    const map = {
      lunes: 'Lunes', martes: 'Martes', miercoles: 'Miércoles',
      jueves: 'Jueves', viernes: 'Viernes', sabado: 'Sábado', domingo: 'Domingo'
    };
    return map[key] || key;
  },
  categoriaClaseLabel(cat) {
    const map = {
      workshop: 'Workshop',
      networking: 'Networking',
      mentoria: 'Mentoría',
      charla: 'Charla',
      wellness: 'Wellness'
    };
    return map[cat] || cat;
  }
};

function iconSvg(name, classes = 'h-5 w-5') {
  const icons = {
    card: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>',
    webpay: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    bank: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>',
    cash: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    building: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    desk: '<svg class="' + classes + '" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
  };
  return icons[name] || icons.card;
}

function buildHeader(active) {
  const user = Auth.current();
  const isDark = document.documentElement.classList.contains('dark');
  const links = [
    { href: 'index.html', label: 'Inicio', key: 'index' },
    { href: 'servicios.html', label: 'Servicios', key: 'servicios' },
    { href: 'galeria.html', label: 'Galería', key: 'galeria' },
    { href: 'precios.html', label: 'Precios', key: 'precios' },
    { href: 'horario-clases.html', label: 'Clases', key: 'clases' },
    { href: 'horarios.html', label: 'Horarios', key: 'horarios' },
    { href: 'contacto.html', label: 'Contacto', key: 'contacto' }
  ];
  const authLinks = user
    ? `<a href="perfil.html" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
        <img src="${user.foto}" class="h-7 w-7 rounded-full object-cover border border-primary/40" alt=""/>
        <span class="hidden lg:inline">${user.nombre.split(' ')[0]}</span>
       </a>
       <a href="#" id="btnLogout" class="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Salir</a>`
    : `<a href="inicio-sesion.html" class="text-sm font-medium hover:text-primary transition-colors">Ingresar</a>
       <a href="registro.html" class="bg-primary text-white font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:bg-primary-light transition-all">Registrarse</a>`;

  return `
  <header class="sticky top-0 z-50 bg-background-dark/85 backdrop-blur-md border-b border-primary/20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3">
          <svg class="h-9 w-9 text-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="10" width="14" height="32" rx="2" fill="currentColor" opacity="0.3"/>
            <rect x="28" y="6" width="14" height="36" rx="2" fill="currentColor"/>
            <rect x="6" y="10" width="14" height="6" fill="currentColor"/>
            <rect x="28" y="6" width="14" height="6" fill="currentColor"/>
            <circle cx="13" cy="20" r="1.5" fill="#0f172a"/>
            <circle cx="13" cy="26" r="1.5" fill="#0f172a"/>
            <circle cx="13" cy="32" r="1.5" fill="#0f172a"/>
          </svg>
          <div>
            <h2 class="text-lg font-bold text-white leading-tight" style="font-family: 'Playfair Display', serif">Cowork Studio</h2>
            <p class="text-[10px] uppercase tracking-widest text-primary/80">Espacio & Comunidad</p>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-7" id="navMenu">
          ${links.map(l => `<a href="${l.href}" class="text-sm font-medium transition-colors ${active === l.key ? 'text-primary' : 'text-gray-300 hover:text-primary'}">${l.label}</a>`).join('')}
        </nav>
        <div class="hidden lg:flex items-center gap-4">
          ${authLinks}
          <button id="btnTheme" class="text-gray-300 hover:text-primary transition-colors" title="Cambiar tema">
            ${isDark ? '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' : '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'}
          </button>
        </div>
        <button class="lg:hidden text-white" id="btnMenu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <nav class="hidden lg:hidden flex-col gap-1 pb-4" id="navMobile">
        ${links.map(l => `<a href="${l.href}" class="block py-2 px-3 rounded text-sm font-medium transition-colors ${active === l.key ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-primary/5'}">${l.label}</a>`).join('')}
        <div class="border-t border-primary/20 mt-3 pt-3 flex flex-col gap-2">
          ${user
            ? `<a href="perfil.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Mi Perfil</a>
               <a href="#" id="btnLogoutMobile" class="block py-2 px-3 rounded text-sm text-red-400 hover:bg-red-500/10">Cerrar sesión</a>`
            : `<a href="inicio-sesion.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Ingresar</a>
               <a href="registro.html" class="block py-2 px-3 rounded text-sm text-primary font-semibold hover:bg-primary/5">Registrarse</a>`}
        </div>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="bg-background-dark border-t border-primary/20 mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <svg class="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="10" width="14" height="32" rx="2" fill="currentColor" opacity="0.3"/>
              <rect x="28" y="6" width="14" height="36" rx="2" fill="currentColor"/>
              <rect x="6" y="10" width="14" height="6" fill="currentColor"/>
              <rect x="28" y="6" width="14" height="6" fill="currentColor"/>
            </svg>
            <h3 class="text-lg font-bold text-white" style="font-family: 'Playfair Display', serif">Cowork Studio</h3>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">Tu espacio para crear, conectar y crecer. Oficinas, salas, eventos y una comunidad que inspira.</p>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="servicios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="galeria.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Galería</a></li>
            <li><a href="precios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Precios</a></li>
            <li><a href="horario-clases.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Clases</a></li>
            <li><a href="contacto.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="terminos.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="privacidad.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Políticas de Privacidad</a></li>
            <li><a href="recuperar-password.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Recuperar Contraseña</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Av. Apoquindo 4520, Las Condes
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +56 2 2895 4300
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              hola@coworkstudio.cl
            </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .56.04.81.11V9.02a6.27 6.27 0 00-.81-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">© 2024 Cowork Studio. Todos los derechos reservados.</p>
        <p class="text-xs text-gray-600">Santiago, Chile · Trabaja mejor, juntos</p>
      </div>
    </div>
  </footer>`;
}

function initLayout(active) {
  UI.initTheme();
  Auth.init();
  Reservas.init();
  const headerHost = document.getElementById('appHeader');
  const footerHost = document.getElementById('appFooter');
  if (headerHost) headerHost.innerHTML = buildHeader(active);
  if (footerHost) footerHost.innerHTML = buildFooter();

  const btnMenu = document.getElementById('btnMenu');
  const navMobile = document.getElementById('navMobile');
  if (btnMenu && navMobile) {
    btnMenu.addEventListener('click', () => {
      navMobile.classList.toggle('hidden');
      navMobile.classList.toggle('flex');
    });
  }

  const btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const cur = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      UI.applyTheme(cur === 'dark' ? 'light' : 'dark');
      window.location.reload();
    });
  }

  const bindLogout = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
      UI.toast('Sesión cerrada correctamente');
      setTimeout(() => window.location.href = 'index.html', 600);
    });
  };
  bindLogout('#btnLogout');
  bindLogout('#btnLogoutMobile');
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || '';
  initLayout(page);
  if (typeof pageInit === 'function') pageInit();
});
