"use client"
import MainLayout from "../../../components/layout/MainLayout";
import useWow from "../../../hooks/useWow";
import Link from "next/link";
import urlFor from '../../../lib/urlFor';
import { useRouter } from "next/navigation";
import { useLanguageContext } from '../../languageContext'


const BlogpageMain = ({blogs ,catsData ,tagsData ,newpostsData ,loadMore ,isparams }) => {

console.log("BLOGS WHERE-->" , blogs)
  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'

  useWow()


  console.log("BLOGSSSSSSSS????" ,blogs)


const router =useRouter()


  return (
    <MainLayout
    
    page={lang === 'en' ? 'Courses' :  "الكورسات" } title={lang === 'en' ?  'Courses' :  "الكورسات"}
    
    >
        
      <div
        className="blog-grid-section scroll-margin pt-120 mb-120"
        id="blog-grid"
      >
        <div className="container">
          <div className="row g-lg-4 gy-5">




<div className="col-lg-8">
<div className="row g-lg-4 gy-5">
          {blogs?.map((blog, index) => {

return (
            <div
            key={index}
              className="col-lg-6 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href={`/course/${blog?.slug.current}`} className="card-img">
                    <img   src={urlFor(blog.mainImage)?.url()}  alt="" />
                  </Link>
                  <Link href={`/course/${blog?.slug.current}`} className="date">
                    <span>
                      {/* <strong>15</strong> January */}
                      <stong>

                    
                      {new Date(blog?._createdAt).toLocaleDateString('en', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                        </stong>
                    </span>
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                        
                      <li>
                        <Link href="/blog">
                        {blog?.categories && ( lang === 'en' ? blog?.categories[0]?.title : blog?.categories[0]?.titlear )}
                        </Link>
                     </li>
           
                    </ul>
                    {/* <div className="blog-comment">
                      <span>Comment (20)</span>
                    </div> */}
                  </div>
                  <h4>
                    <Link  href={`/course/${blog?.slug.current}`}>
                    { lang === 'en' ? blog?.title : blog?.titlear}
                    </Link>
                  </h4>
                  <Link  href={`/course/${blog?.slug.current}`} className="read-more-btn">
                  { lang === 'en' ? " Read More" : 'اقرأالمزيد'} 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
)})}

</div>


{/* <div className="load-me flex justify-center">



<button className="load-btn text-white !mt-12 !text-center !block" onClick={loadMore}>
  Load More
</button>


</div> */}

{!isparams &&

<div className="row mtt !mt-[44px]">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <button onClick={loadMore}  className="load-btn arabic">
                <span>

                  {lang === 'en' ? 'Load More' : 'عرض المزيد'}
                  
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

}


</div>

{/* Sidebar */}
<div
              className="col-lg-4 wow animate fadeInRight"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="sidebar-area">
                {/* <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input type="text" placeholder="Search Here" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div> */}
                <div className="single-widget mb-30">
                  <h5 className="widget-title arabic">{lang === 'en' ?  'Category' : 'القسم'}</h5>
                  <ul className="category-list">
                  {catsData?.map((cat, index) => {
                    return (
                    <li
                    className=" !cursor-pointer"
                    key={index}
                    // onClick={() => {
                    //   router.replace(`/blog/?category=${cat?.title}`)
                    // }}
                    >
                       <Link href={`/blog?category=${cat?.title}`}  passHref> 
                        <span  className=" arabic !cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          {lang === 'en' ? cat?.title :cat?.titlear}
                        </span>
                        <span>({cat?.count})</span>
                      </Link>
                    </li>

                    )})}

             
                  </ul>
                </div>


                {/* <div className="single-widget mb-30">
                  <h5 className="widget-title">New Tags</h5>
                  <ul className="tag-list">
                  {tagsData?.map((tag, index) => {
                    return (
                    <li key={index}>
                      <Link 
                      href={`/blog?tag=${tag?.title}`}
                      >

                        {tag?.title}
                      </Link>
                    </li>
                 
                    )})}
          
                  </ul>
                </div> */}


                {/* <div className="single-widget mb-30">
                  <h5 className="widget-title">Popular Post </h5>
                  {newpostsData?.map((post, index) => {

                    return (
                  <div key={index} className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link 
                      href={`/course/${post?.slug.current}`} 
                      >
                        <img
                          src={urlFor(post.mainImage).url()} 
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link 
                    href={`/course/${post?.slug.current}`} 
                      
                      >20 January, 2024</Link>
                      <h6>
                        <Link href={`/course/${post?.slug.current}`} >
                          Looking Inspiration Traveling The World.
                        </Link>
                      </h6>
                    </div>
                  </div>
                    )})}
                
                </div> */}

              

                {/* <div className="single-widget">
                  <h5 className="widget-title">Social Share</h5>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

         </div>
        </div>
      </div>



      
    </MainLayout>
  );
};

export default BlogpageMain;
