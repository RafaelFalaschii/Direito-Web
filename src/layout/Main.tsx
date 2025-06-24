import About from '../components/About';
import Serviços from '../components/Serviços';
import Equipe from '../components/Equipe';
import BlogSection from '../components/blog/Blog';
import { articles } from '../components/blog/BlogArticles'; 

export default function Main(){
    return(
        <main>
            <About />
                <Serviços />
                <Equipe />
            <BlogSection articles={articles} limit={3} />
        </main>
    )
}