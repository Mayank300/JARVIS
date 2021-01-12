import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js';
const infoCards = [
  { color: '#00838f', title: 'Ask me Anything', info: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', text: 'Give me the latest news' },
  { color: '#ff5936', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#ff9999', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#e88c2e', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  { color: '#00bfff', title: 'Ask for Weather', info: 'There is no such thing as bad weather, only different kinds of good weather.', text: 'What\'s the weather' },
  { color: '#C0C0C0', title: 'Ask for Calculation', info: 'I can do lightning mathematics quicker than somebody can do them on a calculator.', text: 'What\'s 200-137' },
  { color: '#e05cad', title: 'I am good Translator', info: '“Translation is not a matter of words only: it is a matter of making intelligible a whole culture.”', text: 'Translate hello in Hindi' },
  { color: '#e8a3ff', title: 'I am also a Motivator', info: '“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', text: 'Give me some Inspiration' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;