export const fetchArticles = async () => {
  const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-02-22&to=2024-02-22&sortBy=popularity&apiKey=5bda6a1c42e243d896828e51b2ff6806`;

  try {
    const response = await fetch(apiUrl);
    if (response.status === 429) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      return fetchArticles();
    }
    const data = await response.json();
    return formatArticles(data.articles.slice(0, 10));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};
  const formatArticles = (articles) => {
    return articles.map((article) => {
      const { author, title, description, url, urlToImage, publishedAt } = article;
      const formattedDate = new Date(publishedAt).toLocaleString('id-ID', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
      });
      
      return {
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt: formattedDate,
      };
    });
  };

  
  export const fetchTopBusinessHeadlines = async () => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5bda6a1c42e243d896828e51b2ff6806`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.status === 429) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        return fetchTopBusinessHeadlines();
      }
      const data = await response.json();
      return formatArticles(data.articles.slice(0, 10)); 
    } catch (error) {
      console.error('Error fetching top business headlines:', error);
      return [];
    }
  };

  
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         return formatArticles(data.articles);
//     } catch (error) {
//         console.error('Error fetching Wall Street Journal articles:', error);
//         return [];
//     }
// };
// export const fetchTechCrunchTopHeadlines = async () => {

//     const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=924c3c853220400d9d9ea4efc15ec8b0`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         return formatArticles(data.articles);
//     } catch (error) {
//         console.error('Error fetching TechCrunch top headlines:', error);
//         return [];
//     }
// };


