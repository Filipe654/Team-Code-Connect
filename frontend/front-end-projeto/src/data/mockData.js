export const parkingSpots = [
  { id: 1, name: 'Área Centro 01', region: 'Centro', address: 'Av. Sampaio Vidal, 340', status: 'available', available: 8, x: 35, y: 36 },
  { id: 2, name: 'Área Comercial 02', region: 'Centro', address: 'Rua Nove de Julho, 420', status: 'occupied', available: 0, x: 64, y: 37 },
  { id: 3, name: 'Área Hospitalar 03', region: 'Hospital', address: 'Hospital Beneficente Unimar', status: 'available', available: 6, x: 39, y: 58 },
  { id: 4, name: 'Área Industrial 04', region: 'Distrito Industrial', address: 'Av. Industrial, 1200', status: 'available', available: 12, x: 60, y: 72 },
  { id: 5, name: 'Área Mercado 05', region: 'Mercado', address: 'Rua das Indústrias, 85', status: 'occupied', available: 0, x: 70, y: 56 }
]

export const realtimeSpots = [
  { id: 1, region: 'Centro', status: 'available', available: 3, x: 48, y: 16 },
  { id: 2, region: 'Centro', status: 'available', available: 4, x: 18, y: 30 },
  { id: 3, region: 'Hospital', status: 'occupied', available: 0, x: 36, y: 28 },
  { id: 4, region: 'Industrial', status: 'available', available: 1, x: 44, y: 28 },
  { id: 5, region: 'Mercado', status: 'occupied', available: 0, x: 60, y: 23 },
  { id: 6, region: 'Industrial', status: 'available', available: 6, x: 76, y: 27 },
  { id: 7, region: 'Centro', status: 'occupied', available: 0, x: 87, y: 46 },
  { id: 8, region: 'Hospital', status: 'available', available: 11, x: 57, y: 68 },
  { id: 9, region: 'Mercado', status: 'occupied', available: 0, x: 66, y: 52 },
  { id: 10, region: 'Industrial', status: 'available', available: 14, x: 80, y: 66 }
]

export const drivers = [
  { id: 1, name: 'Filipe Damasio', cpf: '676.767.670-67', phone: '(14) 99999-0101', email: 'filipe@empresa.com', vehicle: 'Volvo FH 540', plate: 'ABC-1234', status: 'Ativo' },
  { id: 2, name: 'Jessica Vicentini', cpf: '987.654.321-00', phone: '(14) 99999-0202', email: 'jessica@empresa.com', vehicle: 'Scania R450', plate: 'DEF-5678', status: 'Disponível' },
  { id: 3, name: 'Valdir Junior', cpf: '123.456.789-12', phone: '(14) 99999-0303', email: 'valdir@empresa.com', vehicle: 'Mercedes Atego', plate: 'GHI-9012', status: 'Indisponível' },
  { id: 4, name: 'Guilherme Pessato', cpf: '612.182.430-36', phone: '(14) 99999-0404', email: 'guilherme@empresa.com', vehicle: 'Iveco Stralis', plate: 'JKL-3456', status: 'Disponível' },
  { id: 5, name: 'Rodrigo Gonçalves', cpf: '496.762.486-13', phone: '(14) 99999-0505', email: 'rodrigo@empresa.com', vehicle: 'DAF XF 105', plate: 'MNO-7890', status: 'Indisponível' },
  { id: 6, name: 'Henrico Pucci', cpf: '235.711.317-19', phone: '(14) 99999-0606', email: 'andre@empresa.com', vehicle: 'Ford Cargo 2429', plate: 'PQR-1122', status: 'Ativo' }
]

export const vehicles = [
  { id: 1, owner: 'Filipe Damasio', plate: 'ABC-1234', brand: 'Volvo', model: 'FH 540', type: 'Caminhão', color: 'Branco' },
  { id: 2, owner: 'Jessica Vicentini', plate: 'DEF-5678', brand: 'Scania', model: 'R450', type: 'Caminhão', color: 'Azul' },
  { id: 3, owner: 'Valdir Junior', plate: 'GHI-9012', brand: 'Mercedes', model: 'Atego', type: 'Caminhão', color: 'Prata' }
]

export const fines = [
  { id: 1, vehicleId: 1, type: 'Excesso de tempo na vaga', date: '10/03/2026', value: 80 },
  { id: 2, vehicleId: 1, type: 'Uso sem agendamento', date: '17/05/2026', value: 72.8 },
  { id: 3, vehicleId: 2, type: 'Descumprimento de horário', date: '30/08/2026', value: 59.99 },
  { id: 4, vehicleId: 2, type: 'Reserva sem utilização', date: '01/02/2026', value: 82.45 },
  { id: 5, vehicleId: 3, type: 'Categoria inválida', date: '16/10/2026', value: 45.32 }
]

export const userProfile = {
  name: 'Usuário Teste',
  email: 'usuaritesteo@empresa.com',
  password: '********',
  phone: '(14) 99999-0000',
  document: '123.456.789-00'
}
