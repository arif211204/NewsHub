export const fetchArticles = async () => {
  const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-02-22&to=2024-02-22&sortBy=popularity&apiKey=4d6c444ba6894b8090fd422cf177748c`;

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
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d6c444ba6894b8090fd422cf177748c`;
  
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

  
export const fetchTechCrunchTopHeadlines = async () => {

  const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4d6c444ba6894b8090fd422cf177748c`;

  try {
    const response = await fetch(apiUrl);
    if (response.status === 429) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      return fetchTechCrunchTopHeadlines();
    }
    const data = await response.json();
    return formatArticles(data.articles.slice(0, 10));
  } catch (error) {
    console.error('Error fetching top business headlines:', error);
    return [];
  }
}


export const fetchArticlesByTitle = async (title, fromDate, toDate, sortBy) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${title}&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&pageSize=20&apiKey=4d6c444ba6894b8090fd422cf177748c`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch articles");
    }

    const formattedArticles = formatArticles(data.articles);
    console.log(formattedArticles);
    return formattedArticles;
  } catch (error) {
    console.error("Error fetching articles by title:", error);
    throw error;
  }
};



