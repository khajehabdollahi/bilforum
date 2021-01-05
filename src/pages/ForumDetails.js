import React, {useContext} from 'react'
import { ForumContext } from '../contexts/ForumContextProvider';
import { Container, Row, Col, Card, CardTitle, CardText, CardBody } from 'reactstrap';

const ForumDetails = () => {
  const { forum } = useContext(ForumContext);

  const dispForumDetails = () => {
    return (
        <div key={"key"+forum.id}>
          <h1>{forum.title}</h1>
          <p>{ forum.text }</p>
        </div>
      )
  }        
      
  

  return (
    <div>
      { forum&& dispForumDetails()}
    </div>
  )
}

export default ForumDetails
