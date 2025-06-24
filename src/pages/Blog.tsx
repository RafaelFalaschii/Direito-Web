import Header from '../components/utils/Header-pages'; 
import BlogSection from '../components/blog/Blog';
import { articles } from '../components/blog/BlogArticles'; 
import Footer from '../layout/Footer';


export default function Blog(){
  return(
     <>
      <Header title='Blog' />
        <BlogSection articles={articles} />
      <Footer />
    </>
    )     
}