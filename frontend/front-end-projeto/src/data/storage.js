import { vehicles as defaultVehicles, fines as defaultFines, parkingSpots as defaultParkingSpots, drivers as defaultDrivers } from './mockData'

const KEYS = {
  vehicles: 'acdVehicles',
  fines: 'acdFines',
  schedules: 'acdSchedules',
  profile: 'acdProfile'
}

function read(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch (error) {
    return fallback
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getVehicles() {
  return read(KEYS.vehicles, defaultVehicles)
}

export function saveVehicles(vehicles) {
  write(KEYS.vehicles, vehicles)
}

export function addVehicle(vehicle) {
  const vehicles = getVehicles()
  const nextVehicle = { id: Date.now(), ...vehicle }
  saveVehicles([...vehicles, nextVehicle])
  return nextVehicle
}

export function getFines() {
  return read(KEYS.fines, defaultFines)
}

export function saveFines(fines) {
  write(KEYS.fines, fines)
}

export function payAllFines(vehicleId) {
  const fines = getFines().filter((fine) => fine.vehicleId !== Number(vehicleId))
  saveFines(fines)
  return fines
}

export function getSchedules() {
  return read(KEYS.schedules, [])
}

export function addSchedule(schedule) {
  const schedules = getSchedules()
  const nextSchedule = { id: Date.now(), status: 'Confirmado', ...schedule }
  write(KEYS.schedules, [...schedules, nextSchedule])
  return nextSchedule
}

export function getParkingSpots() {
  return defaultParkingSpots
}

export function getDrivers() {
  return defaultDrivers
}

export function getProfile(defaultProfile) {
  return read(KEYS.profile, defaultProfile)
}

export function saveProfile(profile) {
  write(KEYS.profile, profile)
}
