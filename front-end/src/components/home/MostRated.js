import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//React Bootstrap Components
import Card from 'react-bootstrap/Card'

const MostRated = ({ pinData }) => {


  const [topRated, setTopRated] = useState([])

  console.log('pinDataProp', pinData)

  // Sorting the pinData for the avgrating in descending order
  useEffect(() => {
    const sortedRatings = pinData.sort((a, b) => parseFloat(b.averageRating) -
      parseFloat(a.averageRating))
    console.log('sorted-ratings', sortedRatings)

    const topRated = sortedRatings.slice(0, 4)
    console.log('topRated', topRated)
    setTopRated(topRated)
  }, [pinData])


  return (

    <>
        <div>
          <h2>Most Rated</h2>
        </div>
        <div className='cards-container'>
          {topRated &&
            topRated.map((pin, i) => {
              return (
                <Card className='card-container' key={i} style={{ width: '18rem', height: '18rem'}}>
                  <Link className='pins-link' to={`/pins/${pin._id}`}>
                    <Card.Img className='card-img' variant="top" src={pin.imageUrl} />
                    <Card.Body>
                      <Card.Title>{pin.title}</Card.Title>
                      <Card.Text>Rating test: {pin.averageRating}</Card.Text>
                      <Card.Text>{pin.avgRating}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              )
            })}
        </div>
    </>
  )
}


export default MostRated
