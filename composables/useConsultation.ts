export function useConsultation() {
  const isConsultationOpen = useState('consultation-open', () => false)
  const selectedService = useState('consultation-service', () => '')

  function openConsultation(service = '') {
    selectedService.value = service
    isConsultationOpen.value = true
  }

  function closeConsultation() {
    isConsultationOpen.value = false
  }

  return { isConsultationOpen, selectedService, openConsultation, closeConsultation }
}
