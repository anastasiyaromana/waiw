const answer_question_data = [
  {
    id: 1,
    question: <>What open source development do you have and where can i find it?</>,
    answer: <>We create SeismicPro and SeismiQB libraries to simplify seismic processing and interpretation. Additionally, SegFast enables rapid loading of SEG-Y files, while BatchFlow facilitates data management, 
      ML model training, and related tasks. <br />
      Two other libraries were developed for medical purposes: CardIO for in-depth analysis of electrocardiograms and RadIO for processing CT scans. <br />
  SeismicPro https://github.com/GeoscienceML/SeismicPro <br />
  SeismicQB - https://github.com/GeoscienceML/seismiqb <br />
  Segfast - https://github.com/analysiscenter/segfast <br />
  Batchflow - https://github.com/analysiscenter/batchflow </> ,
    accordion_id: "One", 
    collapsed: "collapsed",
    aria_expanded: true,
    active: "",
  },
  {
    id: 2,
    question: <>What specialists work on your team?</>,
    answer: <>Our team includes highly qualified specialists in the field of machine learning, mathematics and computer science. Over the years, each team member has acquired qualifications in the Oil & Gas, especially in the field of seismic processing and interpretation.</> ,
    accordion_id: "Two", 
    collapsed: "",
    aria_expanded: false, 
    show: true,
    active: "tp-faq-active",
  },
  {
    id: 3,
    question: <>Do you have NLP and generative AI solutions?</>,
    answer: <>Our tools include models based on latest LLMs for working with seismic projects using natural language. Using them, you can quickly get an answer to a question regarding a scenario for working with a project or brief information about the project based on the results of express interpretation.</> ,
    accordion_id: "Three", 
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
  {
    id: 4,
    question: <>What type of service do we provide?</>,
    answer: <>1) We offer software development services, which include 3D visualization of complex scientific data integrated with AI algorithms to quickly prototype a field within a few hours. <br />
  2) Our consulting services focus on accelerating seismic processing on GPUs using advanced ML algorithms. We provide a cost-effective solution for reprocessing legacy data. <br />
  3) We provide professional training programs that deliver high-quality, hands-on Data Science education based on open-source technologies specifically designed for the Exploration and Production industry.</> ,
    accordion_id: "Four", 
    collapsed: "collapsed",
    aria_expanded: true,
    active: "",
  },
  {
    id: 5,
    question: <>How are your solutions delivered?</>,
    answer: <>We provide both packaged solutions that you can deploy on your servers, as well as a service for processing your data.</> ,
    accordion_id: "Five", 
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
  {
    id: 6,
    question: <>What data we are working with?</>,
    answer: <>Seismic processing involves working with different data formats at various processing stages. Initially, we can access information from RPS, SPS, or XPS files, later transition to using SEG-Y files. <br />
      Additionally, velocity data can be incorporated, often stored in formats compatible with conventional software like the Paradigm Echos VFUNC format, and others.</> ,
    accordion_id: "Six", 
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
  {
    id: 7,
    question: <>What kind of educational programs can you offer?</>,
    answer: <>We can provide introductory courses for those who are completely unfamiliar with machine learning and geology, as well as advanced courses for those deeply immersed in this field. 
      We customize our programs to meet the specific needs of each client, optimizing the learning experience for all.</> ,
    accordion_id: "Seven", 
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
  {
    id: 8,
    question: <>At what conferences did you talk about your projects?</>,
    answer: <>In recent years, we have been regular participants in the EAGE (Annual, Digital), SPE and many other conferences.</> ,
    accordion_id: "Eight", 
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
];
export default answer_question_data;
