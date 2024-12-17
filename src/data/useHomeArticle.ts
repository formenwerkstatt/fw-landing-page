import { useScopedI18n } from "@/locales/client";
import { Article } from "@/types";

const useHomeArticle = (): Article => {
  const t = useScopedI18n("homeArticle");

  return {
    title: t("title"),
    introduction: t("introduction"),
    sections: [
      {
        title: t("sections.0.title"),
        list: [
          t("sections.0.list.0"),
          t("sections.0.list.1"),
          t("sections.0.list.2"),
          t("sections.0.list.3"),
          t("sections.0.list.4"),
        ],
      },
      {
        title: t("sections.1.title"),
        list: [
          t("sections.1.list.0"),
          t("sections.1.list.1"),
          t("sections.1.list.2"),
          t("sections.1.list.3"),
        ],
      },
      {
        title: t("sections.2.title"),
        list: [
          t("sections.2.list.0"),
          t("sections.2.list.1"),
          t("sections.2.list.2"),
          t("sections.2.list.3"),
        ],
      },
    ],
    benefits: [t("benefits.0"), t("benefits.1"), t("benefits.2")],
    callToAction: t("callToAction"),
  };
};

export default useHomeArticle;
