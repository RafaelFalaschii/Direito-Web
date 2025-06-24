import { useParams } from 'react-router-dom';
import { articles } from './BlogArticles';
import ReactMarkdown from 'react-markdown';

import Header from '../utils/Header-pages';
import Footer from '../../layout/Footer';
import BlogSection from './Blog';
import BG from '../../assets/bg-services.png';

export default function BlogDetails(){
    const { id } = useParams();
    const article = articles.find((a) => a.id === Number(id));

    if (!article) return <p>Artigo não encontrado</p>;


    return(
         <>
            <Header title='Blog' />

                <section className='bg-cover bg-center h-auto' style={{ backgroundImage: `url(${BG})` }}>
                   <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" >
                            <div className='space-y-7 text-left font-bold text-orange-400'>
                                <p className='text-white'>{article.date}</p>
                                <h1 className='text-2xl text-white'>{article.title}</h1>

                                <div className='max-w-full overflow-x-auto xl:overflow-x-hidden'>
                                    <ReactMarkdown>{article.fullContent}</ReactMarkdown>
                                </div>

                                
                                <BlogSection articles={articles} />
                            </div>
                    </div>
                </section>

                <Footer />
         </>
    )
}