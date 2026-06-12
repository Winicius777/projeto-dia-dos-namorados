export const PHOTO_PLACEHOLDER = "/photos/placeholder.png"
export const OG_IMAGE = "/photos/og-image.png"

export const PHOTO_TARGETS: Record<string, string> = {
  first_date: "/photos/chapter-06/primeiro-encontro.jpg",
  first_kiss_matrix: "/photos/chapter-06/selinho-matriz.jpg",
  first_kiss_basilica: "/photos/chapter-06/beijo-basilica.jpg",
  place_matriz: "/photos/chapter-07/matriz.jpg",
  place_basilica: "/photos/chapter-07/basilica.jpg",
  place_waterfall: "/photos/chapter-07/cachoeiras.jpg",
  memory_waterfall: "/photos/chapter-11/festa.jpg",
  memory_graduation: "/photos/chapter-11/formatura.jpg",
  memory_bouquet: "/photos/chapter-11/buque.jpg",
  memory_friends: "/photos/chapter-11/festa.jpg",
  memory_first_selfie: "/photos/chapter-06/primeiro-encontro.jpg",
  memory_bouquet_car: "/photos/chapter-11/buque-carro.jpg",
  memory_bouquet_school: "/photos/chapter-11/buque-escola.jpg",
  memory_gala: "/photos/chapter-06/beijo-basilica.jpg",
  memory_video_call: "/photos/moments/chamada.jpg",
  memory_late_night_01: "/photos/moments/noite-01.jpg",
  memory_late_night_02: "/photos/moments/noite-02.jpg"
}

export const PHOTOS: Record<string, string> = {
  first_date: "/photos/chapter-06/primeiro-encontro.jpg",
  first_kiss_matrix: "/photos/chapter-06/selinho-matriz.jpg",
  first_kiss_basilica: "/photos/chapter-06/beijo-basilica.jpg",
  place_matriz: "/photos/chapter-07/matriz.jpg",
  place_basilica: "/photos/chapter-07/basilica.jpg",
  place_waterfall: "/photos/chapter-07/cachoeiras.jpg",
  memory_waterfall: "/photos/chapter-11/festa.jpg",
  memory_graduation: "/photos/chapter-11/formatura.jpg",
  memory_bouquet: "/photos/chapter-11/buque.jpg",
  memory_friends: "/photos/chapter-11/festa.jpg",
  memory_first_selfie: "/photos/chapter-06/primeiro-encontro.jpg",
  memory_bouquet_car: "/photos/chapter-11/buque-carro.jpg",
  memory_bouquet_school: "/photos/chapter-11/buque-escola.jpg",
  memory_gala: "/photos/chapter-06/beijo-basilica.jpg",
  memory_video_call: "/photos/moments/chamada.jpg",
  memory_late_night_01: "/photos/moments/noite-01.jpg",
  memory_late_night_02: "/photos/moments/noite-02.jpg"
}

export function getPhoto(key: string): string {
  return PHOTOS[key] ?? PHOTO_PLACEHOLDER
}

export function isPlaceholderPhoto(key: string): boolean {
  return getPhoto(key) === PHOTO_PLACEHOLDER
}
