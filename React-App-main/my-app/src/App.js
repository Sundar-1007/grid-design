import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <header className="header">
        <div className="logo-stories">
          <div className="logo">EDYODA</div>
          <h1 className="stories">Stories</h1>
        </div>
        <div className="explore">
          <label>Explore Categories</label>
          <select style={{border: 'none'}}>
          </select>
        </div>
        <div className='techies'>
        <p>EdYoda is a learning and knowledge</p>
        <p>sharing platform for techies</p>
        </div>
        <button className='button'>Go To Main Menu</button>
      </header>

      <div className="center">
        <h1>Trending Posts</h1>
        <span className="fa-solid fa-filter" style={{color:'#0084ff'}}>   </span>
        <span className="filter-text">  Filter by Category</span>
        <div className="categoriescontainer">
          <span className="categories">All</span>
          <span className="categories">Artificial Intelligence</span>
          <span className="categories">Cloud Computing</span>
          <span className="categories">DevOps</span>
          <span className="categories">Programming Languages</span>
          <span className="categories">Mobile Application Development</span>
          <span className="categories">Technology and Tools</span>
          <span className="categories">Get a Job in a Tech Company</span>
          <span className="categories">Others</span>
        </div>
      </div>
      <div className="card-grid">
      <div className="card">
        <div className="item">
          <div className="image-section">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt="Card 1 Image" />
          </div>
          <div className="text-section">
            <h2 className="title">Introduction To A Machine Learning Online Course</h2>
            <div className="author-container">
              <span className="author">EdYoda</span>
              <span className="date">| 23 Aug 2019</span>
            </div>
            <p className="description">We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course holds. To begin with, one must understand what machine learning is. Basically, it is a concept wherein a machine attempts to understand the structure of a data and fits that into models that people can understand and utilize. While traditional forms of computing were all about solving problems using set instructions and data, machine learning is all about computers utilizing data, training on it and using statistical data to output values. Thus, in this way, the process of decision-making is automated for computers based on sample input data. Now that we know what Machine Learning is all about, it’s time to delve in a little deeper.</p>
          </div>
        </div>
      </div>
      <div className="card">
    <div className="item">
        <div className="image-section">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt="Card 2 Image" />
        </div>
        <div className="text-section">
            <h2 className="title">LAMP Stack Vs MEAN stack: Choosing the right platform for your web application development</h2>
            <div className="author-container">
                <span className="author">EdYoda  </span>
                <span className="date">| 24 Aug 2019</span>
            </div>
            <p className="description">In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely depend on programming for their everyday business operations, the big business level applications, sites and servers have become apparent. It is important to use consistent, scalable and standardized software when developing a new application.

                A web stack is a collection of software that is used to build a web application. Many E-commerce platforms like Amazon, Walmart and eBay provide the best user experience which is one of the reasons why they maintain their position at the top. Currently, the most popular web stacks are: LAMP stack and MEAN stack.
                
                Let us try to understand more about these web application development platforms.</p>
        </div>
    </div>
</div>
<div className="card">
  <div className="item">
    <div className="image-section">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt="Card 3 Image" />
    </div>
    <div className="text-section">
      <h2 className="title">Impact of Cloud Computing in various industries</h2>
      <div className="author-container">
        <span className="author">EdYoda</span>
        <span className="date">| 24 Aug 2019</span>
      </div>
      <p className="description">Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business. Every industry has its own technology dynamics designed to suit its infrastructure. To understand the future of cloud computing, one needs to understand the dynamics of cloud computing in various key industries. According to the reports by Dell companies that invest in Big Data, cloud, mobility and security enjoy up to 53% faster revenue growth than their competitors. As it is becoming more and more difficult to keep all the information, programs, and systems up and running on in-house computer servers, it has become necessary to store data on the cloud.</p>
    </div>
  </div>
</div>

<div className="card">
  <div className="item">
    <div className="image-section">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt="Card 4 Image" />
    </div>
    <div className="text-section">
      <h2 className="title">Challenges of Machine Learning in Big Data Analytics</h2>
      <div className="author-container">
        <span className="author">EdYoda</span>
        <span className="date">| 24 Aug 2019</span>
      </div>
      <p className="description">Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and think by enabling the process of optimization, discovering insights and improved decision making. This potential relies on the ability to extract value from big data and provide data analytics. Machine learning is the ability to learn from data, provide insights, predictions, suggestions from data which help in the decision-making process.</p>
    </div>
  </div>
</div>

<div className="card">
  <div className="item">
    <div className="image-section">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt="Card 5 Image" />
    </div>
    <div className="text-section">
      <h2 className="title">Breaking the Myths around Cybersecurity</h2>
      <div className="author-container">
        <span className="author">EdYoda</span>
        <span className="date">| 24 Aug 2019</span>
      </div>
      <p className="description">As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every security measure possible by businesses. Cyber attackers are developing advancing technologies that are continuing to cause more damage. There are many methods through which a cyber attack is committed like software vulnerabilities, user interaction (using malicious links, email attachments) and use of stolen credentials logins, encryption keys.</p>
    </div>
  </div>
</div>
<div className="card">
  <div className="item">
    <div className="image-section">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt="Card 6 Image" />
    </div>
    <div className="text-section">
      <h2 className="title">Importance of Data Backup and Recovery in the IT industry</h2>
      <div className="author-container">
        <span className="author">EdYoda  </span>
        <span className="date">| 24 Aug 2019</span>
      </div>
      <p className="description">A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan that is necessary for every business and especially industries working with clouds, networks and computers should conduct a backup of its files which will serve as a boon in any point of time. </p>
    </div>
  </div>
</div>
<div className="card">
  <div className="item">
    <div className="image-section">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" alt="Card 7 Image" />
    </div>
    <div className="text-section">
      <h2 className="title">What is Web Scraping?</h2>
      <div className="author-container">
        <span className="author">EdYoda  </span>
        <span className="date">| 24 Aug 2019</span>
      </div>
      <p className="description">Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet.

      Some websites and platforms offer application programming interfaces (APIs) which we can use to access information in a structured way, but others might not. While APIs are certainly becoming the standard way of interacting with today’s popular platforms, we don’t always have this luxury when interacting with most of the websites on the internet.</p>
    </div>
  </div>
</div>
<div className="card">
  <div className="item">
    <div className="image-section">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt="Card 8 Image" />
    </div>
    <div className="text-section">
      <h2 className="title">What is Income Share Agreement?</h2>
      <div className="author-container">
        <span className="author">EdYoda  </span>
        <span className="date">| 24 Aug 2019</span>
      </div>
      <p className="description">The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist, and statistician who strongly believed in “free-market capitalism”. In the last few months, there has been a lot of buzz around it, particularly among college graduates.</p>
    </div>
  </div>
</div>
<div className="card">
  <div className="item">
    <div className="image-section">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt="Card 9 Image" />
    </div>
    <div className="text-section">
      <h2 className="title">Practical Machine Learning with Python and Keras</h2>
      <div className="author-container">
        <span className="author">EdYoda  </span>
        <span className="date">| 24 Aug 2019</span>
      </div>
      <p className="description">Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific task) from data, without being explicitly programmed. Think of how efficiently (or not) Gmail detects spam emails, or how good text-to-speech has become with the rise of Siri, Alexa, and Google Home.</p>
    </div>
  </div>
</div>

</div>

<footer>
  <h3 style={{ marginBottom: "15px" }}>EDYODA</h3>
  <div className="edyoda">About Us</div>
  <div className="edyoda">Career</div>
  <div className="edyoda">Contact Us</div>
  <div className="edyoda">Terms of Use</div>
  <div className="edyoda">Privacy Policy</div>
</footer>

      </>
  );
}

export default App;
