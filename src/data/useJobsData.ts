import { useScopedI18n } from "@/locales/client";
import { Jobs } from "@/types";

const useJobsData = (): Jobs => {
  const t = useScopedI18n("jobs");

  return {
    title: t("title"),
    paragraph: t("paragraph"),
    sectionTitle: t("sectionTitle"),
    sectionParagraph: t("sectionParagraph"),
    sectionList: [t("sectionList.0"), t("sectionList.1"), t("sectionList.2")],
    ads: [
      {
        title: t("ads.0.title"),
        paragraph: t("ads.0.paragraph"),
        cta: t("ads.0.cta"),
        content: [
          {
            title: t("ads.0.content.0.title"),
            list: [
              t("ads.0.content.0.bullets.0"),
              t("ads.0.content.0.bullets.1"),
              t("ads.0.content.0.bullets.2"),
              t("ads.0.content.0.bullets.3"),
              t("ads.0.content.0.bullets.4"),
            ],
          },
          {
            title: t("ads.0.content.1.title"),
            list: [
              t("ads.0.content.1.bullets.0"),
              t("ads.0.content.1.bullets.1"),
              t("ads.0.content.1.bullets.2"),
              t("ads.0.content.1.bullets.3"),
              t("ads.0.content.1.bullets.4"),
              t("ads.0.content.1.bullets.5"),
              t("ads.0.content.1.bullets.6"),
              t("ads.0.content.1.bullets.7"),
            ],
          },
          {
            title: t("ads.0.content.2.title"),
            list: [
              t("ads.0.content.2.bullets.0"),
              t("ads.0.content.2.bullets.1"),
              t("ads.0.content.2.bullets.2"),
            ],
          },
        ],
      },
    ],
  };
};

export default useJobsData;
