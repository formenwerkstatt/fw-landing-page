import { useScopedI18n } from "@/locales/client";
import { Article } from "@/types";

export default function useHomeArticle(scope: any, nested?: any): Article {
  const scopedT = useScopedI18n(nested ? `${scope}.${nested}` : scope);

  const getSafeTranslation = (key: any) => {
    const translation = scopedT(key, { returnObjects: false });
    return translation === key ? "" : translation;
  };

  const generateSections = () => {
    const sections: Array<{ title: string; list: string[] }> = [];
    let sectionIndex = 0;
    while (true) {
      const sectionTitleKey = `sections.${sectionIndex}.title`;
      const sectionTitle = getSafeTranslation(sectionTitleKey);
      if (!sectionTitle && sectionIndex > 0) break;
      sections.push({
        title: sectionTitle,
        list: generateList(`sections.${sectionIndex}.list`),
      });
      sectionIndex++;
    }
    return sections;
  };

  const generateList = (key: any) => {
    const benefits: string[] = [];
    let benefitIndex = 0;
    while (true) {
      const benefitKey = `${key}.${benefitIndex}`;
      const benefit = getSafeTranslation(benefitKey);
      if (!benefit && benefitIndex > 0) break;
      benefits.push(benefit);
      benefitIndex++;
    }
    return benefits;
  };

  const article = {
    title: getSafeTranslation("title"),
    introduction: getSafeTranslation("introduction"),
    sections: generateSections(),
    benefits: generateList("benefits"),
  };


  return article;
}
