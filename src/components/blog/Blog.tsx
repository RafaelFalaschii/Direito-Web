import { Link, useLocation } from "react-router-dom";
import BS from '../utils/Button'
import { FadeInOnScroll } from "../scroll/Scroll";

type Article = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type BlogSectionProps = {
  articles: Article[];
  limit?: number;
};

export default function BlogSection({ articles, limit }: BlogSectionProps) {
  const location = useLocation();
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <FadeInOnScroll>
      <section className="text-gray-200" id="blog">
        <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <h2 className="py-4 font-bold text-2xl md:text-4xl">Últimas Notícias</h2>

          <div className="sm:grid sm:gap-4 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-3">
            {displayedArticles.map((article) => (
              <article key={article.id} className="flex flex-col gap-2 max-w-80">
                <time dateTime={article.date} className="text-[#c49c68]">
                  {article.date}
                </time>
                <h3 className="font-bold">{article.title}</h3>
                <p className="text-sm">{article.content}</p>
                

                <BS title="LEIA MAIS" to={`/blog/${article.id}`} href={`/blog/${article.id}`} />
              </article>
            ))}
          </div>

          {location.pathname === "/home" && (
              <Link
                  to="/blog"
                  
                  className="py-10 font-bold text-sm text-[#c49c68] block m-auto w-max transition duration-300 hover:scale-125"
                  aria-label="Botão de mais informações"
                  >
                  VER TODOS
              </Link>
          )}
          
        </div>
      </section>
    </FadeInOnScroll>
  );
}
