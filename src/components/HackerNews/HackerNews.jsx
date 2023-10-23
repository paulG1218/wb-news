import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function HackerNews() {

  const loading = useSelector(state => state.hackerNews.loading)
  const articles = useSelector(state => state.hackerNews.articles)

  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(requestArticles)
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
