import {
  AppWindow, Camera, Code2, Headphones, Router, Satellite,
} from 'lucide-vue-next'
import type { Service } from '~/types'

const standardProcess = ['Konsultasi', 'Analisis kebutuhan', 'Penawaran', 'Pengerjaan', 'Testing & serah terima']

export const services: Service[] = [
  {
    slug: 'cctv', title: 'Jasa Instalasi CCTV', navTitle: 'CCTV', icon: Camera,
    shortDescription: 'Instalasi dan konfigurasi CCTV untuk rumah, toko, kantor, sekolah, dan area lainnya.',
    description: 'Solusi keamanan dengan sistem CCTV yang disesuaikan dengan kebutuhan rumah, bisnis, maupun organisasi.',
    features: ['Instalasi kamera', 'Konfigurasi DVR/NVR', 'Remote monitoring', 'Night vision', 'Perekaman', 'Konfigurasi jaringan', 'Penentuan posisi kamera'],
    benefits: ['Cakupan pengawasan sesuai kebutuhan lokasi', 'Akses pemantauan yang lebih praktis', 'Konfigurasi perangkat yang tertata'],
    process: standardProcess,
    audiences: ['Rumah', 'Toko', 'Kantor', 'Sekolah', 'Gudang', 'Area usaha'],
    ctaText: 'Konsultasikan Kebutuhan CCTV Anda',
  },
  {
    slug: 'starlink', title: 'Instalasi Starlink', navTitle: 'Starlink', icon: Satellite,
    shortDescription: 'Instalasi dan konfigurasi Starlink untuk kebutuhan internet di berbagai lokasi.',
    description: 'Membantu proses pemasangan, konfigurasi, dan pengujian Starlink agar siap digunakan.',
    features: ['Analisis lokasi', 'Penentuan posisi perangkat', 'Instalasi perangkat', 'Konfigurasi koneksi', 'Pengujian jaringan'],
    benefits: ['Penempatan perangkat dipertimbangkan sejak awal', 'Sistem dikonfigurasi sesuai kondisi lokasi', 'Koneksi diuji sebelum serah terima'],
    process: ['Konsultasi', 'Survei / analisis lokasi', 'Penentuan posisi perangkat', 'Instalasi', 'Konfigurasi', 'Testing', 'Serah terima'],
    audiences: ['Rumah', 'Usaha', 'Sekolah', 'Organisasi', 'Instansi', 'Lokasi operasional'],
    ctaText: 'Konsultasikan Instalasi Starlink',
  },
  {
    slug: 'network', title: 'Instalasi Network & Wi-Fi', navTitle: 'Network & Wi-Fi', icon: Router,
    shortDescription: 'Instalasi jaringan LAN, Wi-Fi, router, access point, dan infrastruktur jaringan.',
    description: 'Jaringan yang direncanakan berdasarkan kebutuhan ruang, pengguna, perangkat, dan aktivitas Anda.',
    features: ['Instalasi LAN', 'Instalasi Wi-Fi', 'Konfigurasi router', 'Instalasi access point', 'Troubleshooting', 'Optimasi jaringan', 'Infrastruktur jaringan dasar'],
    benefits: ['Jangkauan jaringan lebih terencana', 'Konfigurasi perangkat lebih rapi', 'Kendala koneksi lebih mudah ditelusuri'],
    process: standardProcess,
    audiences: ['Rumah', 'Kantor', 'Sekolah', 'Toko', 'UMKM', 'Instansi'],
    ctaText: 'Diskusikan Kebutuhan Jaringan Anda',
  },
  {
    slug: 'website', title: 'Pembuatan Website', navTitle: 'Website', icon: Code2,
    shortDescription: 'Pembuatan website profesional untuk bisnis, organisasi, sekolah, maupun personal.',
    description: 'Website dirancang sesuai kebutuhan bisnis dan tujuan penggunanya, bukan sekadar menggunakan template.',
    features: ['Company profile', 'Website bisnis', 'Landing page', 'E-commerce', 'Aplikasi web', 'Website custom'],
    benefits: ['Struktur mengikuti tujuan bisnis', 'Tampilan responsif di berbagai perangkat', 'Fondasi yang dapat dikembangkan'],
    process: standardProcess,
    audiences: ['Bisnis', 'UMKM', 'Sekolah', 'Organisasi', 'Instansi', 'Personal'],
    ctaText: 'Diskusikan Website Anda',
  },
  {
    slug: 'application', title: 'Pengembangan Aplikasi', navTitle: 'Application', icon: AppWindow,
    shortDescription: 'Pengembangan aplikasi sesuai kebutuhan bisnis dan organisasi.',
    description: 'Perencanaan dan pengembangan solusi aplikasi berdasarkan alur kerja dan kebutuhan yang telah disepakati.',
    features: ['Aplikasi web', 'Sistem internal', 'Dashboard', 'Sistem manajemen', 'Aplikasi custom', 'Integrasi API'],
    benefits: ['Fitur diprioritaskan sesuai kebutuhan', 'Alur kerja dapat dipetakan sejak awal', 'Arsitektur dapat disiapkan untuk pengembangan lanjut'],
    process: standardProcess,
    audiences: ['Bisnis', 'Organisasi', 'Sekolah', 'Instansi'],
    ctaText: 'Konsultasikan Ide Aplikasi Anda',
  },
  {
    slug: 'it-support', title: 'IT Support', navTitle: 'IT Support', icon: Headphones,
    shortDescription: 'Bantuan teknis untuk perangkat, software, jaringan, dan kebutuhan IT lainnya.',
    description: 'Dukungan teknis praktis untuk membantu menangani kendala perangkat, software, dan jaringan.',
    features: ['Troubleshooting komputer', 'Instalasi software', 'Troubleshooting jaringan', 'Konfigurasi perangkat', 'Pemeliharaan sistem', 'Konsultasi IT dasar'],
    benefits: ['Kendala ditangani berdasarkan diagnosis', 'Solusi dijelaskan dengan bahasa yang mudah dipahami', 'Dukungan disesuaikan dengan kebutuhan'],
    process: standardProcess,
    audiences: ['Rumah', 'Toko', 'Kantor', 'Sekolah', 'UMKM', 'Organisasi'],
    ctaText: 'Konsultasikan Kendala IT Anda',
  },
]

export function getService(slug: string) {
  return services.find(service => service.slug === slug)
}
