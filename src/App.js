import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles'
import wordsToNumbers from 'words-to-numbers';

const alanKey = 'ac2f313c81f5dd214d7d24c6b98aa2a62e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticls] = useState([]);
    const [activeArticle, setactiveArticle] = useState(-1);
    const classes= useStyles();

    useEffect(() => {
        alanBtn({
          key: alanKey,
          onCommand: ({ command, articles, number }) => {
            if(command === 'newHeadlines'){
                setNewsArticls(articles);
                setactiveArticle(-1)
           } else if(command === 'highlight'){
               setactiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            } else if (command === 'open') {
              const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
              const article = articles[parsedNumber - 1];
    
              if (parsedNumber > articles.length) {
                alanBtn().playText('Please try that again...');
              } else if (article) {
                window.open(article.url, '_blank');
                alanBtn().playText('Opening...');
              } else {
                alanBtn().playText('Please try that again...');
              }
            }
          },
        });
      }, []);

    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://static1.squarespace.com/static/599bfc6803596ef973b3fade/t/5a0c82920d9297328dbfea92/1510769339985/loader-ai-siri_2x.gif?format=1500w" className={classes.alanLogo}/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}

export default App;