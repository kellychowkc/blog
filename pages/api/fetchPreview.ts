import { Article } from "../schema/type";

export async function fetchUrlPreview(url: string) {
  try {
    const response = await fetch(`/api/urlPreview?url=${encodeURIComponent(url)}`);
    const { ogImage, ogTitle, ogDescription } = await response.json();

    return {
      url,
      ogImage,
      ogTitle,
      ogDescription,
    };
  } catch (error) {}
}

export async function fetchPreview(article: Article) {
  try {
    let updatedArticle;
    const preview = await fetchUrlPreview(article.url);
    if (!preview!.ogImage) {
      if (article.id < 11) {
        updatedArticle = Object.assign({}, article, {
          image: `/image/image${article.id}.jpeg`,
        });
      } else {
        let newId = article.id - 10;
        updatedArticle = Object.assign({}, article, {
          image: `/image/image${newId}.jpeg`,
        });
      }
    } else {
      updatedArticle = Object.assign({}, article, {
        image: preview!.ogImage,
      });
    }
    return updatedArticle;
  } catch (error) {
    return article;
  }
}
