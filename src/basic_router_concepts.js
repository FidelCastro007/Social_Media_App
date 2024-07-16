import { Link, Route, Routes } from "react-router-dom";
import Post from "./Post";
import PostLayout from "./PostLayout";

{/*   <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        {/* <li><Link to ="newpost">NewPost</Link></li> 
        <li><Link to ="postpage">PostPage</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route  path="/" element={<Home />} /> {/*ELEment means showing value in page as there is stored in anything or any components  
      <Route  path="/about" element={<About />} />
      <Route  path="/newpost" element={<NewPost />} />
      <Route path="/postpage" element = {<PostLayout />}> {/* Nest in Router (parent Router)
      <Route index element={<PostPage />}/>  {/*(child Router)
      <Route path=":id" element={<Post />}/>
      {/*only work in react-dom ver:6 harcore the pathway not in ver:5 
      <Route path="newpost" element={<NewPost />}/>
      </Route>
      <Route path="*" element ={<Missing />}/> 
    </Routes> */}
