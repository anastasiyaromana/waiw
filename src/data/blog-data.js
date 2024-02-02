
// home 01
import blog_img_1 from "@assets/img/blog/img-1.jpg";
import blog_img_2 from "@assets/img/blog/img-2.jpg";
import blog_img_3 from "@assets/img/blog/img-3.jpg"; 
// home 03
import blog_img_4 from "@assets/img/blog/img-7.jpg";
import blog_img_5 from "@assets/img/blog/img-8.jpg";
import blog_img_6 from "@assets/img/blog/img-9.jpg";
// user
import blog_user_4 from "@assets/img/blog/user.png";
import blog_user_5 from "@assets/img/blog/user.png";
import blog_user_6 from "@assets/img/blog/user.png";

const blog_data = [
    // for home 01 
    {
        id: 1, 
        img: blog_img_1,
//     category: "Business",
        date: "19 Jan 2024",
//        comments: "Comments (03)",
        title: <>Hands-on the desk with <br /> First Break Picking.</>,
    },
    {
        id: 2, 
        img: blog_img_2,
//        category: "Business",
        date: "23 Oct 2023",
 //       comments: "Comments (23)",
        title: <>Seismic Processing: <br /> The Earth-Shattering Truth.</>,
    },
    {
        id: 3, 
        img: blog_img_3,
 //       category: "Business",
        date: "05 Sep 2023",
  //      comments: "Comments (15)",
        title: <>Jupyter Notebook: beyond prototyping with NBTools and Research.</>,
    },
    // for home 03 
    {
        id: 4, 
        cls: "",
        img: blog_img_4,
        user: blog_user_4,
        user_name: "Jamil",
        category: "Business",
        date: "05 May 2023",
        comments: "Comments (03)",
        title: <>Making SEG-Y fast.</>,
    },
    {
        id: 5, 
        cls: "active",
        img: blog_img_5,
        user: blog_user_5,
        user_name: "Rasalina",
        category: "Business",
        date: "27 Mar 2023",
        comments: "Comments (23)",
        title: <>Convolutions and Self-Attention or <br /> There and Back Again.</>,
    },
    {
        id: 6, 
        cls: "",
        img: blog_img_6,
        user: blog_user_6,
        user_name: "Hamim",
        category: "Business",
        date: "27 Jan 2023",
        comments: "Comments (15)",
        title: <>Automatic lithology description: a history of failure.</>,
    },


    
]
export default blog_data
