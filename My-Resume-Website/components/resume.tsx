import type React from "react"

export const Resume: React.FC = () => {
  return (
    <div className="resume-container py-2 space-y-4 max-w-3xl overflow-auto">
      <div className="header">
        <h1 className="text-xl font-bold">Patrick Dunn</h1>
        <p>
          Email: Thecryptowallethunter@gmail.com | Rate: $55.00/hr | Availability: More than 30 hrs/week (Open to
          contract-to-hire)
        </p>
        <p>Languages: English</p>
      </div>

      <div className="section">
        <h2 className="text-lg font-semibold text-green-400">Professional Summary</h2>
        <p>
          Self-taught Cryptocurrency Data Analyst with a strong passion for uncovering actionable insights in market
          trends and data patterns. Proficient in data scraping, analysis, and visualization, I empower clients to make
          informed investment decisions. I also provide web design services and develop custom tools for clients who
          need specialized solutions. Whether it's creating detailed market reports, developing automated trading
          strategies, or presenting complex data in a digestible format, I deliver results that exceed expectations.
        </p>
      </div>

      <div className="section">
        <h2 className="text-lg font-semibold text-green-400">Core Competencies</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Data Analysis & Visualization: Expert in analyzing large datasets and creating interactive visualizations to
            identify trends and opportunities.
          </li>
          <li>Algorithm Development: Skilled in designing and optimizing algorithms for automated trading bots.</li>
          <li>
            Data Scraping: Proficient in extracting and processing data from cryptocurrency exchanges using Python.
          </li>
          <li>
            Machine Learning & AI: Knowledgeable in applying machine learning models for predictive analytics and
            decision-making.
          </li>
          <li>
            Web Design & Development: Creating responsive, user-friendly websites and web applications for clients.
          </li>
          <li>
            Custom Tool Development: Building specialized tools tailored to client requirements and business needs.
          </li>
          <li>Trend Analysis: Experienced in identifying emerging trends to provide actionable insights.</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="text-lg font-semibold text-green-400">Technical Skills</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Programming Languages: Python (Pandas, Matplotlib, BeautifulSoup, Scrapy, Pyrogram, Telethon)</li>
          <li>Visualization Tools: Tableau, Matplotlib</li>
          <li>Data Management: ETL, Big Data, Statistical Analysis</li>
          <li>Machine Learning Frameworks: TensorFlow, Scikit-learn</li>
          <li>Other Skills: Analytical Presentation, Alpha/Beta Testing, Predictive Insights</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="text-lg font-semibold text-green-400">Professional Experience</h2>

        <div className="job py-2">
          <h3 className="font-medium text-blue-400">Data Visualization Specialist</h3>
          <p className="italic">Self-Employed | January 2023 – Present</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Designed and developed interactive visualizations using Tableau and Matplotlib to represent cryptocurrency
              trends.
            </li>
            <li>Collaborated with clients to create dashboards highlighting investment opportunities.</li>
            <li>Delivered data-driven insights that improved client decision-making processes.</li>
          </ul>
        </div>

        <div className="job py-2">
          <h3 className="font-medium text-blue-400">Cryptocurrency Data Analyst</h3>
          <p className="italic">Independent Projects | January 2022 – Present</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Built and deployed automated bots to scrape data from cryptocurrency platforms.</li>
            <li>
              Analyzed large datasets to identify patterns and trends, enabling clients to make informed trading
              decisions.
            </li>
            <li>Created comprehensive reports and visualizations to present findings clearly.</li>
          </ul>
        </div>

        <div className="job py-2">
          <h3 className="font-medium text-blue-400">Algorithm Developer for Trading Bots</h3>
          <p className="italic">Self-Employed | April 2021 – Present</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Engineered and fine-tuned algorithms for automated trading bots to execute trades based on market signals.
            </li>
            <li>
              Conducted backtesting of trading strategies using historical data, achieving a 15% improvement in bot
              accuracy.
            </li>
            <li>Monitored algorithm performance and implemented optimizations to enhance profitability.</li>
          </ul>
        </div>

        <div className="job py-2">
          <h3 className="font-medium text-blue-400">Data Scraping Specialist</h3>
          <p className="italic">Self-Employed | March 2021 – Present</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Designed web scraping bots using BeautifulSoup and Scrapy to extract data from cryptocurrency exchanges.
            </li>
            <li>
              Processed large datasets for market research and trend analysis, improving the efficiency of data
              collection by 20%.
            </li>
          </ul>
        </div>

        <div className="job py-2">
          <h3 className="font-medium text-blue-400">Cryptocurrency Trend Analyst</h3>
          <p className="italic">Self-Employed | April 2020 – Present</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Conducted in-depth analysis of cryptocurrency market data to identify emerging trends.</li>
            <li>Authored detailed reports summarizing findings, which were shared with traders and investors.</li>
            <li>Improved market prediction accuracy by leveraging advanced analytical tools.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2 className="text-lg font-semibold text-green-400">Education</h2>
        <p>San Diego Mesa College</p>
      </div>

      <div className="section">
        <h2 className="text-lg font-semibold text-green-400">Work Philosophy</h2>
        <p>
          I prioritize clear and consistent communication throughout the project lifecycle to ensure alignment with
          client goals. My commitment to quality and attention to detail drives my ability to deliver exceptional
          results. Let's connect to explore how I can help you navigate the ever-evolving cryptocurrency landscape.
        </p>
      </div>

      <div className="section">
        <h2 className="text-lg font-semibold text-green-400">Key Achievements (STAR Framework Highlights)</h2>

        <div className="achievement py-1">
          <p>
            <span className="font-medium">Situation:</span> Clients lacked insights into cryptocurrency market trends.
          </p>
          <p>
            <span className="font-medium">Task:</span> Develop tools and visualizations to provide actionable insights.
          </p>
          <p>
            <span className="font-medium">Action:</span> Built data scraping bots and created interactive dashboards.
          </p>
          <p>
            <span className="font-medium">Result:</span> Enabled clients to identify profitable investment
            opportunities, increasing ROI.
          </p>
        </div>

        <div className="achievement py-1">
          <p>
            <span className="font-medium">Situation:</span> Inefficient data collection methods slowed down market
            research.
          </p>
          <p>
            <span className="font-medium">Task:</span> Optimize data scraping processes.
          </p>
          <p>
            <span className="font-medium">Action:</span> Designed and implemented efficient web scraping bots.
          </p>
          <p>
            <span className="font-medium">Result:</span> Reduced data collection time by 30%, allowing faster
            decision-making.
          </p>
        </div>

        <div className="achievement py-1">
          <p>
            <span className="font-medium">Situation:</span> Clients struggled to understand complex market data.
          </p>
          <p>
            <span className="font-medium">Task:</span> Simplify data presentation.
          </p>
          <p>
            <span className="font-medium">Action:</span> Created visually appealing and interactive reports using
            Tableau.
          </p>
          <p>
            <span className="font-medium">Result:</span> Improved client understanding of market trends, leading to
            better investment strategies.
          </p>
        </div>
      </div>
    </div>
  )
}

