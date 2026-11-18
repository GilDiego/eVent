import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import style from './DisplayComments.module.css';
import { API_URL } from '../../../config';
export default function DisplayComments(id) {
  const [data, setData] = useState([]);
  const [tempDisplay, setTempDisplay] = useState([]);
  const [display, setDisplay] = useState([]);
  const [eventRating, setEventRating] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      let backup;
      let temporary;
      let generalRating;
      try {
        backup = await axios.get(`${API_URL}/comment/all?id=${id.state}`);
        temporary = await axios.get(`${API_URL}/comment/getFormattedComments?id=${id.state}`);
        generalRating = await axios.get(`${API_URL}/comment/generalRating?id=${id.state}`);
        if (backup && backup.data.length) setData(backup.data);
        if (temporary && temporary.data.length) setTempDisplay(temporary.data);
        if (generalRating && generalRating.data !== 0) setEventRating(generalRating.data);
      } catch (error) {
        setData([]);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    setTotalComments(countComments(data));
  }, [data]);
  const toStars = (grade) => {
    let result = '';
    while (grade !== 0) {
      result += '★';
      grade--;
    }
    while (result.length < 5) {
      result += '☆';
    }
    return result;
  };
  const countComments = (reviews) => {
    let res = 0;
    for (let i = 0; i < reviews.length; i++) {
      res += reviews[i][`star${i + 1}`].length;
    }
    return res;
  };
  let keyGenerator = 0;
  return (
    <div className={style.commentsWrapper}>
      {!tempDisplay.length ? (
        <p className={style.noReviews}>Este evento todavia no tiene comentarios.</p>
      ) : (
        <div className={style.mainContainer}>
          <div className={style.leftContainer}>
            {eventRating !== 0 ? (
              <>
                <p className={style.generalRating}>
                  Rating General: <span className={style.generalStars}>{toStars(eventRating)}</span>
                </p>
                <p className={style.allRatings} onClick={(e) => setDisplay(tempDisplay)}>
                  {totalComments} {totalComments > 1 ? 'calificaciones' : 'calificación'} para este
                  evento.
                </p>
                <div className={style.starContainer}>
                  <p className={style.individualStars} onClick={(e) => setDisplay(data[4].star5)}>
                    <span className={style.stars}>★★★★★</span>{' '}
                    {Math.floor((data[4].star5.length / totalComments) * 100)}%
                  </p>
                  <p className={style.individualStars} onClick={(e) => setDisplay(data[3].star4)}>
                    <span className={style.stars}>★★★★☆</span>{' '}
                    {Math.floor((data[3].star4.length / totalComments) * 100)}%
                  </p>
                  <p className={style.individualStars} onClick={(e) => setDisplay(data[2].star3)}>
                    <span className={style.stars}>★★★☆☆</span>{' '}
                    {Math.floor((data[2].star3.length / totalComments) * 100)}%
                  </p>
                  <p className={style.individualStars} onClick={(e) => setDisplay(data[1].star2)}>
                    <span className={style.stars}>★★☆☆☆</span>{' '}
                    {Math.floor((data[1].star2.length / totalComments) * 100)}%
                  </p>
                  <p className={style.individualStars} onClick={(e) => setDisplay(data[0].star1)}>
                    <span className={style.stars}>★☆☆☆☆</span>{' '}
                    {Math.floor((data[0].star1.length / totalComments) * 100)}%
                  </p>
                </div>
              </>
            ) : (
              <p className={style.noRating}>Este evento todavia no tiene calificaciones.</p>
            )}
          </div>
          <div className={style.rightContainer}>
            {!display.length
              ? tempDisplay.map((comment) => (
                  <Card
                    key={keyGenerator++}
                    name={`${comment.user.first_name} ${comment.user.last_name}`}
                    rating={toStars(comment.rating)}
                    review={comment.review}
                  />
                ))
              : display.map((comment) => (
                  <Card
                    key={keyGenerator++}
                    name={`${comment.user.first_name} ${comment.user.last_name}`}
                    rating={toStars(comment.rating)}
                    review={comment.review}
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  );
}
