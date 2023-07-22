import axios from 'axios';
import cheerio from 'cheerio';

export async function scrapeData() {
  try {
    const response = await axios.get('http://books.toscrape.com/');
    const $ = cheerio.load(response.data);
    const books = [];
    $('.product_pod').each((index, element) => {
      const title = $(element).find('h3 a').attr('title');
      const price = $(element).find('.price_color').text();
      books.push({ title, price });
    });
    return books;
  } catch (error) {
    console.error(`Error scraping data: ${error}`);
  }
}
