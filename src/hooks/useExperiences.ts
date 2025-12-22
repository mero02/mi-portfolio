import { useTranslation } from 'react-i18next';
import { experiencesTranslations } from '../data/experiences-i18n';

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

/**
 * Hook personalizado para obtener experiencias profesionales internacionalizadas
 */
export const useExperiences = (): Experience[] => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as 'es' | 'en';

  return experiencesTranslations[currentLanguage];
};

export default useExperiences;